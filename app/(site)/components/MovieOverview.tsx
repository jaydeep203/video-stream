"use client";
import { OverviewCarousel } from '@/app/components/OverviewCarousel';
import { Movie } from '@prisma/client';
import React from 'react';

interface MovieOverviewProps{
    movies: Movie[]
}

const MovieOverview:React.FC<MovieOverviewProps> = ({
    movies
}) => {
  return (
    <div className='
        w-full
        bg-zinc-900
        py-16
        flex
    '>
        <div 
            className='
                w-[95%]
                mx-auto
                flex
                flex-col
            '
        >
            <h1 className='
                text-white
                text-2xl
                font-bold
                mx-auto
            '>
                MOVIE OVERVIEW
            </h1>
            <div className='
                w-full
                mt-5
            '>
                <OverviewCarousel movies={movies} />
            </div>
        </div>
    </div>
  )
}

export default MovieOverview