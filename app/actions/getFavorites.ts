import prismadb from "@/lib/prismadb"
import getCurrentUser from "./getCurrentUser"

export const getFavorites = async() => {

    try{

        const currentUser = await getCurrentUser();

        if(!currentUser){
            return [];
        }

        const favoritMovies = await prismadb.movie.findMany({
            where:{
                id:{
                    in: currentUser?.favoritIds
                }
            }
        });


        if(!favoritMovies){
            return [];
        }

        return favoritMovies;
            
    } catch(error){
        return [];
    }

}