"use client";


import React from 'react';
import {ArrowLeft} from "lucide-react";
import { useRouter } from 'next/navigation';
import { Movie } from '@prisma/client';

interface VideoPlayerProps{
    movie: Movie | null;
}

const VideoPlayer:React.FC<VideoPlayerProps> = ({
    movie
}) => {
    const router = useRouter();

  return (
    <div className="h-screen w-screen bg-black">
            <nav className="
                fixed
                w-full
                p-4
                z-10
                flex
                flex-row
                items-center
                gap-8
                bg-black
                bg-opacity-70
            ">
                <ArrowLeft onClick={()=>router.push("/")} className="text-white cursor-pointer" size={40} />
                <p className="text-white text-1xl md:text-3xl font-bold">
                    <span className="font-light">
                        Watching:
                    </span>
                    {movie?.title}
                </p>
            </nav>
            <video 
                autoPlay
                controls
                className="h-full w-full"
             src={movie?.videoUrl}></video>
        </div>
  )
}

export default VideoPlayer