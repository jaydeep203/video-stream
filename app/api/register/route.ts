import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import prismadb from "@/lib/prismadb";

export async function POST(
    request: Request
){

    try{

        const body = await request.json();

        const {
            email,
            name,
            password
        } = body;

        if(!email || !name || !password)
            return new NextResponse("Missing Info", {status: 400})

        const hashedPassword = await bcrypt.hash(password, 12);

        const user = await prismadb.user.create({
            data:{
                email,
                hashedPassword,
                name
            }
        });

        return NextResponse.json(user);

    } catch(error){
        console.log(error);
        return new NextResponse("REGISTER_POST_ERROR", {status:400})
    }

}