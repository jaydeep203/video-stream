import prismadb from "@/lib/prismadb"


export const getAllMovies = async() => {
    const movies = await prismadb.movie.findMany();

    if(!movies){
        return [];
    }

    return movies;
}