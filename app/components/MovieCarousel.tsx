"use client";


import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Movie, User } from "@prisma/client";
import Image from "next/image";
import StarBadge from "./StarBadge";
import { PlayCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import FavoriteButton from "./FavoriteButton";

interface topMoviesProps{
  movies: Movie[];
  currentUser: User | null;
}

export function MovieCarousel({movies, currentUser}:topMoviesProps) {
  const router = useRouter();
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true
      }}
      plugins={[
        Autoplay({
          delay: 3000,
        }),
      ]}
      className="w-full max-w-[95%] mx-auto"
    >
      <CarouselContent>
        {movies?.map(({thumbnailUrl, title, genre, duration, id}, index) => (
          <CarouselItem key={index} className="md:basis-1/5 lg:basis-1/5 mr-2">
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
                      onClick={() => router.push(`/watch/${id}`)}
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
                      flex-row
                      justify-between
                      gap-2
                    ">
                      {title}
                                <FavoriteButton currentUser={currentUser} movieId={id} 
                                                        className='
                                                            lg:w-6
                                                            lg:h-6
                                                            mr-3
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
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden sm:flex" />
      <CarouselNext className="
          hidden sm:flex
      " />
    </Carousel>
  )
}
