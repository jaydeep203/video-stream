"use client";

import React from 'react';
import {X} from "lucide-react";
import { Button } from '@/components/ui/button';
import useLoginModal from '../hooks/useLoginModal';

interface modalProps{
    header: string;
    children: React.ReactNode;
}

const Modal:React.FC<modalProps> = ({
    header,
    children
}) => {
    const loginModal = useLoginModal();

  return (
    <div className={`
        fixed
        z-50
        w-full
        h-screen
        bg-zinc-900
        bg-opacity-60
        ${loginModal.isOpen ? "flex": "hidden"}
        items-center
        justify-center
    `}>
        <div className='
            p-1
            lg:p-8
            bg-zinc-900
            rounded-md
            w-full
            lg:w-[35%]
            max-h-[90%]
            flex
            flex-col
        '>
            <Button
                onClick={() => loginModal.onClose()}
                size="icon"
                className='
                    self-end
                '
            >
                <X className='text-white' />
            </Button>
            <div className='
                px-12
                py-8
                flex
                flex-col
                gap-3
            '>
                <h1 className='
                    text-white
                    font-bold
                    text-3xl
                '>
                    {header}
                </h1>
                <hr className='text-white text-[1px]' />
                <div className='w-full flex flex-col gap-4'>
                    {children}
                </div>

                
            </div>

        </div>
    </div>
  )
}

export default Modal