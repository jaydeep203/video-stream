import { Button } from '@/components/ui/button';
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from '@/components/ui/drawer'
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { twMerge } from 'tailwind-merge';

interface navsProps{
    text: string;
    link: string;
    active: boolean;
}

interface MenuSliderProps{
    navs: navsProps[];
}

const MenuSlider:React.FC<MenuSliderProps> = ({
    navs
}) => {
    const [goal, setGoal] = React.useState(350)
 
    function onClick(adjustment: number) {
        setGoal(Math.max(200, Math.min(400, goal + adjustment)))
    }
  return (
    <Drawer>
        <DrawerTrigger asChild>
                        <div className='
                            relative
                            mr-6
                            w-5
                            h-5
                            lg:w-8
                            lg:h-8
                            rounded-lg
                            outline
                            outline-white
                            cursor-pointer
                        '>
                            <Image 
                                src="/default-blue.png"
                                alt='avatar'
                                fill
                                className='object-cover object-center rounded-lg'
                            />
                        </div>
        </DrawerTrigger>
        <DrawerContent className='bg-zinc-900'>
            <div className="mx-auto w-full max-w-sm text-white flex flex-col items-center">
                <DrawerHeader className='items-center'>
                    <DrawerTitle>Menu Bar</DrawerTitle>
                    <DrawerDescription>Touch to navigate</DrawerDescription>
                </DrawerHeader>
                <div className='
                    py-3
                    flex
                    flex-col
                    gap-4
                '>
                    {
                        navs?.map(({text, link, active}) => (
                            <div key={text} className='h-full flex flex-col items-center'>
                                <Link href={link} className={twMerge(`
                                    h-full 
                                    flex 
                                    text-lg
                                    lg:tex-xl
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
                <DrawerFooter>
                    <DrawerClose asChild>
                        <Button variant="outline"
                            className='
                                text-white
                                hover:text-white
                                bg-gradient-to-tr
                                from-red-700
                                via-pink-600
                                to-rose-400
                                hover:from-red-600
                                hover:via-pink-500
                                hover:to-rose-300
                                outline-none
                                border-none
                            '
                        >Close</Button>
                    </DrawerClose>
                </DrawerFooter>
            </div>
        </DrawerContent>
    </Drawer>
  )
}

export default MenuSlider