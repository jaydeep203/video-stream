import prismadb from "@/lib/prismadb"

export const getMovieBanner = async() => {
    const movieCount = await prismadb.movie.count();
    const randomIndex = Math.floor(Math.random()*movieCount);

    const movie = await prismadb.movie.findMany({
        take:1,
        skip:randomIndex
    });

    if(!movie){
        return null;
    }

    return movie[0];

}