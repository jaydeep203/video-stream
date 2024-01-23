"use client";

import React from 'react'
import { Button } from '@/components/ui/button';
import { Clock, X, VenetianMask } from 'lucide-react';
import { MovieInterface } from '@/types';
import PlayButton from '../components/PlayButton';
import StarBadge from '../components/StarBadge';
import { User } from '@prisma/client';
import FavoriteButton from '../components/FavoriteButton';

interface infoModalProps{
    movie:MovieInterface|null;
     isOpen:boolean;
    setIsOpen:React.Dispatch<React.SetStateAction<boolean>>;
    currentUser: User | null;

}

const InfoModal = ({movie, isOpen, setIsOpen, currentUser}:infoModalProps) => {
    
    

  return (
    <div className={`
        fixed
        z-50
        w-full
        h-screen
        bg-zinc-900
        bg-opacity-60
        ${isOpen ? "flex": "hidden"}
        items-center
        justify-center
    `}>
        <div className='
            
            bg-zinc-900
            rounded-md
            h-[100vh]
            max-h-[100vh]
            lg:max-h-[90%]
            w-full
            lg:w-[55%]
            flex
            flex-col
            rounded-t-lg
        '>
                <Button
                    onClick={() => setIsOpen(false)}
                    size="icon"
                    variant="ghost"
                    className='
                        absolute
                        self-end
                        z-[100]
                        mt-2
                        mr-2
                        hover:text-black
                    '
                >
                    <X className='text-white' />
                </Button>
            <div className='
                h-96
                w-full
                relative
                rounded-t-lg
            '>
                
                <video
                        className='w-full brightness-[60%] object-cover h-full rounded-t-lg'
                        autoPlay muted loop poster={movie?.thumbnailUrl} src={movie?.videoUrl}
                    ></video>

                    <div className="
                        absolute
                        bottom-[10%]
                        left-10
                    ">
                        <p className='text-white text-3xl md:text-4xl h-full lg:text-5xl font-bold mb-8'>
                            {movie?.title}
                        </p>
                        <div className='flex flex-row gap-4 items-center'>
                            <PlayButton movieId={movie?.id} />
                            <FavoriteButton currentUser={currentUser} movieId={movie?.id} />
                        </div>
                    </div>
            </div>
            <div className='px-12 py-8 flex flex-col gap-3'>
                    <div className='text-green-400 font-semibold flex flex-row gap-3 text-lg'>
                        New
                        <StarBadge />
                    </div>
                    <div className='text-pink-500 flex flex-row gap-1 text-sm'>
                        <Clock /> {movie?.duration}
                    </div>
                    <div className='text-pink-500 flex flex-row gap-1 text-sm'>
                        <VenetianMask /> {movie?.genre}
                    </div>
                    <p className='text-white text-lg'>
                        {movie?.description}
                    </p>
                </div>
        </div>
    </div>
  )
}

export default InfoModal