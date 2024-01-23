"use client";

import React from 'react';
import {PlayCircle} from "lucide-react";
import { useRouter } from 'next/navigation';

interface playButtonProps{
    movieId: string | undefined;
}

const PlayButton:React.FC<playButtonProps> = ({
    movieId
}) => {

    const router = useRouter();

  return (
    <button 
        onClick={() => router.push(`/watch/${movieId}`)}
    className='
        bg-gradient-to-tr
        from-pink-600
        via-red-600
        to-yellow-500
        hover:from-pink-500
        hover:via-red-500
        hover:to-yellow-400
        rounded-md
        py-1 md:py-2
        px-2 md:px-4
        w-auto
        text-white
        text-xs lg:text-lg
        font-semibold
        flex
        flex-row
        items-center
        hover:bg-opacity-60
        transition
    '>
        <PlayCircle className='h-5 w-5 lg:h-8 lg:w-8 mr-2' />
        Play
    </button>
  )
}

export default PlayButton