import prismadb from "@/lib/prismadb"

export const getMovie = (movieId: string) => {
    const movie = prismadb.movie.findFirst({
        where:{
            id:movieId
        }
    });

    if(!movie)
    {
        return null;
    }

    return movie;
}