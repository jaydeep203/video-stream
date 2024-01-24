"use client";
import FavoriteButton from '@/app/components/FavoriteButton';
import StarBadge from '@/app/components/StarBadge';
import useLoginModal from '@/app/hooks/useLoginModal';
import { Button } from '@/components/ui/button';
import { Card, CardTitle } from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast';
import { Movie, User } from '@prisma/client';
import { ChevronRight, PlayCircle } from 'lucide-react';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react'


interface exclusiveMoviesProps{
    movies: Movie[];
    currentUser: User | null;
}

const ExclusiveMovies:React.FC<exclusiveMoviesProps> = ({
    movies,
    currentUser
}) => {
    const router = useRouter();
    const session = useSession();
    const loginModal = useLoginModal();
    const {toast} = useToast();

    const handlePlay = (id:string) => {
        if(session?.status=="unauthenticated"){
            loginModal.onOpen();
            toast({
                title: "login to watch the movie!"
            })
        }
        else{
            router.push(`/watch/${id}`);
        }
    }

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
                    EXCLUSIVE ON MOVIESTREAM
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
            <div 
                    className='w-full max-w-[95%] mx-auto flex flex-col sm:flex-row gap-3 sm:overflow-x-scroll no-scrollbar'
                >
                    {
                        movies?.map(({title, thumbnailUrl, id, duration, genre},index)=>(
                            <div key={index} className='md:basis-1/5 lg:basis-1/5 mr-2'>
                                <div className="p-1">
                                    <Card className="
                                            border-none
                                            flex
                                            flex-col
                                            gap-4
                                            group
                                            hover:-translate-y-2
                                            hover:scale-105
                                    "
                                    >
                                            <div className="relative aspect-square w-full mx-auto cursor-pointer"
                                            onClick={() => handlePlay(id)}
                                            >
                                            <Image 
                                                src={thumbnailUrl}
                                                alt="thumbnail"
                                                fill
                                                className="object-cover object-center group-hover:brightness-50 transition"
                                            />
                                            <PlayCircle className="
                                            text-white
                                                transition
                                                opacity-0
                                                relative
                                                w-12
                                                h-12
                                                top-[42%]
                                                left-[42%]
                                                translate-y-1/4
                                                group-hover:opacity-100
                                                group-hover:translate-y-0
                                            " />
                                            </div>
                                            
                                        <div>
                                            <CardTitle className="
                                                text-white
                                                text-xl
                                                flex
                                                flex-flex
                                                justify-between
                                                gap-2
                                            ">
                                            {title}
                                                <FavoriteButton currentUser={currentUser} movieId={id} 
                                                            className='
                                                                lg:w-6
                                                                lg:h-6
                                                                mr-2
                                                                opacity-0
                                                                transition
                                                                translate-y-10
                                                                group-hover:opacity-100
                                                                group-hover:translate-y-0
                                                        '
                                                    />
                                            </CardTitle>
                                            <div className="
                                            text-sm
                                            text-neutral-400
                                            flex
                                            flex-row
                                            gap-3
                                            bg-custom
                                            ">
                                            <span>{duration}</span>
                                            <hr className="text-[1px] text-white w-3 rotate-90 my-auto" />
                                            <span>{genre}</span>
                                            </div>
                                            <StarBadge />
                                        </div>
                                        
                                    </Card>
                                </div>
                            </div>
                        ))
                    }
            </div>
        </div>
    </div>
  )
}

export default ExclusiveMovies