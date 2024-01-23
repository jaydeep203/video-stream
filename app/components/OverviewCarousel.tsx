"use client";
import * as React from "react"

import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Movie } from "@prisma/client";
import Image from "next/image";
import StarBadge from "./StarBadge";
import {Clock, VenetianMask, PlayCircle, Share2, MessageSquareText} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

interface CarouselProps{
    movies: Movie[]
}

export function OverviewCarousel({movies}:CarouselProps) {
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
        className="w-full max-w-full sm:max-w-[90%] mx-auto">
      <CarouselContent>
        {movies?.map(({thumbnailUrl, title, genre, duration, description, id}, index) => (
          <CarouselItem key={index}>
            <div className="p-0.5 sm:p-1">
              <Card className="border-none">
                <div className="
                    flex
                    gap-4
                    flex-col
                    sm:flex-row
                    items-center
                    justify-center
                ">
                    <div className="
                        relative
                        aspect-[1.3/1]
                        w-full
                        sm:w-[50%]
                    ">
                        <Image 
                            src={thumbnailUrl}
                            alt="thumbnail"
                            fill
                            className="object-cover object-center"
                        />
                    </div>
                    <div className="
                        flex
                        flex-col
                        gap-4
                        w-full
                        sm:w-[40%]
                    ">
                        <h1 className="
                            text-white
                            text-4xl
                            font-semibold
                        ">
                            {title}
                        </h1>
                        <div className="
                            flex 
                            flex-row 
                            gap-5
                            text-white
                            text-sm

                        ">
                            <StarBadge />
                            <span className="flex gap-2 my-auto"><VenetianMask /> {genre}</span>
                            <hr className="w-3 rotate-90 text-white my-auto" />
                            <span className="flex gap-2 my-auto"><Clock /> {duration}</span>
                        </div>
                        <p className="
                            text-white
                            text-base
                            sm:text-lg
                            text-wrap
                        ">
                            {description}
                        </p>
                        <div className="
                            w-full
                            flex
                            flex-col
                            text-sm
                            sm:text-base
                            gap-4
                            text-neutral-400
                        ">
                            <p>Genre: {genre}</p>
                            <p>Duration: {duration}</p>
                            <p>Subtitles: Hindi / English</p>
                            <p>Audio: Hindi / English</p>
                        </div>
                        <div className="
                            flex flex-row gap-5 items-center
                        ">
                            <Button 
                            onClick={() => router.push(`/watch/${id}`)}
                            size="lg"
                            className="
                                bg-gradient-to-tr
                                from-red-700
                                via-pink-600
                                to-rose-400
                                hover:from-red-600
                                hover:via-pink-500
                                hover:to-rose-300
                                flex
                                flex-row
                                gap-1
                                sm:gap-2
                                w-[32%]
                                sm:w-[25%]
                                
                            ">
                                <span className="
                                    sm:text-base
                                    text-sm
                                ">Play</span> <PlayCircle />
                            </Button>
                            <div className="
                                flex
                                flex-row
                                gap-2
                                text-white
                            ">
                                <Share2 className="text-pink-600" />
                                Share
                            </div>
                            <div className="
                                flex
                                flex-row
                                gap-2
                                text-white
                            "> 
                                <MessageSquareText className="text-pink-600" />
                                Feedback
                            </div>
                        </div>
                    </div>
                </div>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden sm:flex" />
      <CarouselNext className="hidden sm:flex" />
    </Carousel>
  )
}
