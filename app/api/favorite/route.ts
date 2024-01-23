import getCurrentUser from "@/app/actions/getCurrentUser";
import prismadb from "@/lib/prismadb";
import { without } from "lodash";
import { NextResponse } from "next/server";

export async function POST(
    request: Request
){

    try{

        const currentUser = await getCurrentUser();
        if(!currentUser){
            return new NextResponse("UnAuthorised!");
        }
        const body = await request.json();

        const { movieId } = body;

        const existingMovie = await prismadb.movie.findUnique({
            where:{
                id: movieId
            }
        });

        if(!existingMovie){
            return new NextResponse("Invalid Id");
        }

        const user = await prismadb.user.update({
            where:{
                email:currentUser?.email || ""
            },
            data:{
                favoritIds:{
                    push:movieId
                }
            }
        });

        return NextResponse.json(user);

    } catch(error){
        console.log(error);
        return new NextResponse("FAVORITE_POST", {status:400});
    }

}


export async function DELETE(
    request: Request
){

    try{

        const currentUser = await getCurrentUser();
        if(!currentUser){
            return new NextResponse("UnAuthorised!");
        }
        const body = await request.json();

        const { movieId } = body;
        if(!movieId){
            return new NextResponse("Id not found!");
        }

        const existingMovie = await prismadb.movie.findUnique({
            where:{
                id: movieId
            }
        });

        if(!existingMovie){
            return new NextResponse("Invalid Id");
        }

        const updatedIds = without(currentUser.favoritIds, movieId);

        const user = await prismadb.user.update({
            where:{
                email:currentUser?.email || ""
            },
            data:{
                favoritIds:updatedIds
            }
        });

        return NextResponse.json(user);

    } catch(error){
        console.log(error);
        return new NextResponse("FAVORITE_DELETE", {status:400});
    }

}