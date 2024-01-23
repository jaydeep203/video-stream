"use client";

import React, { useState } from 'react';
import {MovieInterface} from "@/types";
import {Info} from "lucide-react";
import PlayButton from '@/app/components/PlayButton';
import InfoModal from '@/app/providers/InfoModal';
import { User } from '@prisma/client';

interface BillboardProps{
  movie : MovieInterface | null;
  currentUser: User | null;
}

const Billboard:React.FC<BillboardProps> = ({
  movie,
  currentUser
}) => {
  
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  }

  
  return (
    <div className='
        w-full
        relative
        h-[56.25vw]
    '>

      <InfoModal
        currentUser={currentUser}
        isOpen={isOpen} 
        setIsOpen = {setIsOpen}
        movie = {movie}

      />
        
      <video className='
        w-full
        h-[56.25vw]
        object-cover
        brightness-[60%]
      '
        autoPlay
        muted
        loop
        poster={movie?.thumbnailUrl}
        src={movie?.videoUrl}
      >

      </video>
      <div className='
            absolute
            w-full
            flex
            flex-col
            top-[50%]
        '>
          <div className='mx-auto flex flex-col justify-center items-center'>

            <p className='
                text-white
                text-1xl
                md:text-5xl
                h-full
                w-[50%]
                lg:text-6xl
                font-bold
                drop-shadow-xl
            '>{movie?.title}</p>
            <p className='
                text-white
                text-[8px]
                md:text-lg
                mt-3
                md:mt-8
                w-[90%]
                md:w-[80%]
                lg:w-[50%]
                drop-shadow-xl
            '>
                {movie?.description}
            </p>
            <div className='flex flex-row items-center mt-3 md:mt-4 gap-3'>
                <PlayButton movieId={movie?.id} />
                <button
                    onClick={handleOpenModal}
                  className='
                    bg-white
                    text-white
                    bg-opacity-[30%]
                    rounded-md
                    py-1
                    md:py-2
                    px-2 md:px-4
                    w-auto
                    text-xs lg:text-lg
                    font-semibold
                    flex
                    flex-row
                    items-center
                    hover:bg-opacity-20
                    transition
                '>
                    <Info className='mr-1 h-5 w-5 lg:h-8 lg:w-8'/> More Info
                </button>
            </div>

          </div>

      </div>
    </div>
  )
}

export default Billboard;