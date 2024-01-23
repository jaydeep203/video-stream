"use client";

import { usePathname, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import {PlayCircle, Search, Bell} from "lucide-react";
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';
import { Button } from '@/components/ui/button';
import useLoginModal from '../hooks/useLoginModal';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import MenuSlider from './MenuSlider';

const TOP_OFFSET = 66;



const Navbar = () => {
    const pathname = usePathname();
    const [showBackground, setShowBackground] = useState(false);
    const session = useSession();

    const loginModal = useLoginModal();

    useEffect(()=>{
        const handleScroll = () => {
          if(window.scrollY >= TOP_OFFSET){
            setShowBackground(true);
          }
          else{
            setShowBackground(false);
          }
        }
    
        window.addEventListener("scroll", handleScroll);
        return () => {
          window.removeEventListener("scroll", handleScroll);
        }
    
      },[]);

     

    const router = useRouter();

    const navs = [
        {
            text: "Home",
            link: "/",
            active: pathname == "/" ? true : false
        },
        {
            text: "My List",
            link: "/list",
            active: pathname == "/list" ? true : false
        },
        {
            text: "Series",
            link: "/",
            active: false
        },
        {
            text: "TV Shows",
            link: "/",
            active: false
        },

    ];

  return (
    <div className={twMerge(`
        w-full
        h-[4rem]
        flex
        fixed
        z-40
    `,
        showBackground ? "bg-gradient-to-r from-zinc-900 via-gray-900 to-slate-900 bg-opacity-90" : ""
    )}
    >
        <div className='
            w-[95%]
            h-full
            mx-auto
            flex
            flex-row
            justify-between
        '>
            <div className='
                flex 
                flex-row
                gap-8
            '>
                <div 
                    onClick={() => router.push("/")}
                className='
                    flex
                    flex-row
                    gap-3
                    items-center
                    cursor-pointer
                '>
                    <PlayCircle className='w-6 h-6 sm:w-8 sm:h-8 text-pink-600'  />
                    <p className='
                        text-white
                        text-lg
                        font-semibold
                        sm:text-xl
                        sm:font-bold
                    '>
                        VIDEOSTREAM
                    </p>
                </div>
                <div className='
                    h-full
                    flex
                    flex-row
                    text-white
                    font-semibold
                    items-center
                    gap-5
                '>
                    {
                        navs.map(({text, link, active}) => (
                            <div key={text} className='h-full hidden sm:flex flex-col items-center'>
                                <Link href={link} className={twMerge(`
                                    h-full 
                                    flex 
                                    items-center
                                `,
                                active ? "text-pink-600" : "text-white",
                                active? "border-b-[3px] " : "border-b-0",
                                active ? "border-pink-600" : "text-white"
                                
                                )}>
                                    {text}
                                </Link>
                            </div>
                            
                        ))
                    }
                </div>
            </div>
            <div className='
                        flex
                        flex-row
                        gap-4
                        items-center
                    '>
            {
                session?.status == "unauthenticated" && (
                    <>
                        <Button className='
                            bg-gradient-to-tr
                            from-red-700
                            via-pink-600
                            to-rose-400
                            hover:from-red-600
                            hover:via-pink-500
                            hover:to-rose-300
                            
                        '
                            onClick={() => loginModal.onOpen()}
                        >
                            Login
                        </Button>
                        <Button className='
                            bg-gradient-to-tr
                            from-red-700
                            via-pink-600
                            to-rose-400
                            hover:from-red-600
                            hover:via-pink-500
                            hover:to-rose-300
                        '
                            onClick={() => loginModal.onOpen()}
                        >
                            Register
                        </Button>
                    </>
                )
            }
            {
                session?.status == "authenticated" && (
                    <>
                        <Search className='text-white' />
                        <Bell className='text-white' />
                        <MenuSlider navs={navs} />
                    </>
                )
            }

            </div>
            
        </div>
    </div>
  )
}

export default Navbar