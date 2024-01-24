"use client";
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation'
import React from 'react'
import useLoginModal from '../hooks/useLoginModal';
import { Button } from '@/components/ui/button';

const HomeBtn = () => {
    const router = useRouter();


  return (
    <div className='text-white flex flex-col gap-4'>
        <p>Login to see the list...</p>
        <Button 
            onClick={() => router.push("/")}
        className='
            bg-gradient-to-tr
            from-red-700
            via-pink-600
            to-rose-400
            hover:from-red-600
            hover:via-pink-500
            hover:to-rose-300
        '>
            Go to Home.
        </Button>
    </div>
  )
}

export default HomeBtn