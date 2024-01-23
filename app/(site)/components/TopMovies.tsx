"use client"

import { Button } from '@/components/ui/button'
import React from 'react'
import {ChevronRight} from "lucide-react";
import {MovieCarousel} from '@/app/components/MovieCarousel';
import { Movie, User } from '@prisma/client';

interface topMoviesProps{
    movies: Movie[];
    currentUser: User | null;
}

const TopMovies:React.FC<topMoviesProps> = ({
    movies,
    currentUser
}) => {
  return (
    <div className='
        w-full
        my-background
        py-3
        flex
    '>
        <div className='
            w-[95%]
            m-auto
        '>
            <div className='w-full flex justify-between py-4'>
                <h1 className='
                    text-white
                    text-2xl
                    font-semibold
                '>
                    LATEST TOP MOVIES
                </h1>
                <Button 
                    variant="ghost"
                    className='
                        text-white
                        hover:bg-opacity-10

                    '
                >
                    View All
                    <ChevronRight  />
                </Button>
            </div>
            <MovieCarousel currentUser={currentUser} movies={movies} />
        </div>
    </div>
  )
}

export default TopMovies