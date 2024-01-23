"use client";

import React from 'react';
import {PlayCircle, Instagram, Twitter, Facebook, Linkedin, Send} from "lucide-react";
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <div className='
        w-full
        my-background
        py-12
        flex
    '>
        <div className='
            w-full
            sm:w-[95%]
            mx-auto
            flex
            flex-col
            items-center
        '>
            <div className='
                w-full
                py-12
                bg-zinc-900
                bg-opacity-10
                flex
                flex-col
                gap-5
                lg:gap-0
                lg:flex-row
            '>
                <div className='
                    w-full
                    lg:w-[25%]
                    flex
                    flex-col
                    gap-3
                    pl-1
                    lg:pl-3
                '>
                    <div className='
                        w-full
                        flex
                        flex-row
                        gap-2
                        text-white
                        text-xl
                        lg:text-2xl
                        justify-center
                        lg:justify-normal
                    '>
                        <PlayCircle className='text-jay w-10 h-10' />
                        VIDEOSTREAM
                    </div>
                    <div className='
                        flex
                        flex-row
                        items-center
                        gap-2
                        justify-center
                        lg:justify-normal
                    '>
                        <p className='text-white'>Questions?</p>
                        <p className='text-jay'>Call 1800-003-00123</p>
                    </div>
                    <div className='flex flex-col w-full items-center lg:items-baseline text-white gap-3'>
                        <p>FOLLOW US</p>
                        <div className='flex flex-row items-center gap-3 cursor-pointer'>
                            <Facebook className='text-blue-700' />
                            <Instagram className='text-pink-600'/>
                            <Twitter className='text-sky-500' />
                            <Linkedin className='text-violet-700'/>
                        </div>
                    </div>
                </div>

                <div className='
                    w-full
                    lg:w-[50%]
                    grid
                    grid-cols-1
                    lg:grid-cols-3
                '>
                    <div className='
                        flex
                        flex-col
                        gap-2
                        mx-auto
                    '>
                        <h1 className='
                            text-white
                            text-lg
                        '>Explore</h1>
                        <li className='
                            text-gray-400
                            text-sm
                        '>
                            Whishlist
                        </li>
                        <li className='
                            text-gray-400
                            text-sm
                        '>
                            My Account
                        </li>
                        <li className='
                            text-gray-400
                            text-sm
                        '>
                            Checkout
                        </li>
                        <li className='
                            text-gray-400
                            text-sm
                        '>
                            Cart
                        </li>
                    </div>
                    <div className='
                        flex
                        flex-col
                        gap-2
                        mx-auto
                    '>
                        <h1 className='
                            text-white
                            text-lg
                        '>Company</h1>
                        <li className='
                            text-gray-400
                            text-sm
                        '>
                            Profile
                        </li>
                        <li className='
                            text-gray-400
                            text-sm
                        '>
                            Social
                        </li>
                        <li className='
                            text-gray-400
                            text-sm
                        '>
                            User Playlist
                        </li>
                    </div>
                    <div className='
                        flex
                        flex-col
                        gap-2
                        mx-auto
                    '>
                        <h1 className='
                            text-white
                            text-lg
                        '>Legal</h1>
                        <li className='
                            text-gray-400
                            text-sm
                        '>
                            Home
                        </li>
                        <li className='
                            text-gray-400
                            text-sm
                        '>
                            Languages
                        </li>
                        <li className='
                            text-gray-400
                            text-sm
                        '>
                            Buy Plans
                        </li>
                        <li className='
                            text-gray-400
                            text-sm
                        '>
                            Shop
                        </li>
                    </div>
                </div>

                <div className='
                    w-full
                    lg:w-[25%]
                    flex
                    flex-col
                    px-1
                    gap-4
                '>
                    <h1 className='text-white text-xl font-semibold'>
                        Newsletter
                    </h1>
                    <p className='text-gray-400 text-sm text-wrap'>
                        Subscribe to our newsletter and never miss our latest movies, Web series and TV shows etc.
                    </p>
                    <div className='
                        flex
                        flex-row
                    '>
                        <input type="text"
                            className='py-2 lg:py-3 w-[75%] lg:w-[60%] rounded-l-md px-2'
                            placeholder='Enter Your Here..!'
                        />
                        <div className='
                            py-2
                            bg-gradient-to-tr
                            from-red-700
                            via-pink-600
                            to-rose-400
                            hover:from-red-600
                            hover:via-pink-500
                            hover:to-rose-300
                            rounded-r-md
                        '>
                            <Button   
                                size={"lg"}
                                className='
                                    bg-gradient-to-tr
                                    from-red-700
                                    via-pink-600
                                    to-rose-400
                                    hover:from-red-600
                                    hover:via-pink-500
                                    hover:to-rose-300
                                    py-2
                                '>
                                <Send className='text-white' />
                            </Button>
                        </div>
                    </div>
                </div>
                
            </div>
            <div className='
                w-full
                py-3
                text-white
                text-sm
                sm:text-base
                flex
                items-center
                justify-center
            '>
                Copyright @ 2024 VideoStream. All Right Reserved.
            </div>
        </div>
    </div>
  )
}

export default Footer