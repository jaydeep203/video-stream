"use client";

import { User } from '@prisma/client';
import React, { useCallback, useMemo, useState } from 'react'
import {Check, Plus} from 'lucide-react';
import axios from 'axios';
import { useToast } from '@/components/ui/use-toast';
import { twMerge } from 'tailwind-merge';

interface FavoriteButtonProps{
    currentUser: User | null;
    movieId: string | undefined;
    className?: string;
}

const FavoriteButton:React.FC<FavoriteButtonProps> = ({
    currentUser,
    movieId,
    className
}) => {

    const {toast} = useToast();
    const [favoriteMovies, setFavoriteMovies] = useState(currentUser?.favoritIds);
    
    const isFavorite = useMemo(()=>{
        const list = favoriteMovies;

        return list?.includes(movieId || "");
    },[movieId, favoriteMovies]);


    

    const toggleFavorites = useCallback(async()=>{
        let response;

        if(isFavorite){
            response = await axios.delete("/api/favorite", {data: {movieId}});
            toast({
                title:"Movie removed from favorite succesfully."
            })
        }else{
            response = await axios.post("/api/favorite", {movieId});
            toast({
                title:"Movie added to favorite succesfully."
            })
        }

        

        setFavoriteMovies(response?.data?.favoritIds);

    },[movieId, toast, isFavorite]);

    const Icon = isFavorite ? Check : Plus;
  return (
    <div
        onClick={toggleFavorites}
        className={twMerge(`
            cursor-pointer
            group/item
            w-6
            h-6
            lg:w-10
            lg:h-10
            border-2
            rounded-full
            flex
            justify-center
            items-center
            transition
        `,
            isFavorite? "hover:border-green-700" : "hover:border-neutral-300",
            isFavorite? "border-green-500" : "border-white",
            className
        )}>
        <Icon className={`
            ${isFavorite ? "text-green-500" : "text-white"}
        `} size={25} />
    </div>
  )
}

export default FavoriteButton