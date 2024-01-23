import React from 'react'

const LanguageSection = () => {
    const languages = [
        {
            text:"Hindi",
            title:"Hindi",
            color:"bg-green-500"
        },
        {
            text:"Marathi",
            title:"Marathi",
            color:"bg-yellow-400"
        },
        {
            text:"English",
            title:"English",
            color:"bg-purple-500"
        },
        {
            text:"Chinese",
            title:"Chinese",
            color:"bg-sky-400"
        },
        {
            text:"Spanish",
            title:"Spanish",
            color:"bg-purple-600"
        },
        {
            text:"Russian",
            title:"Russian",
            color:"bg-sky-600"
        },
        {
            text:"French",
            title:"French",
            color:"bg-pink-700"
        },
        {
            text:"Gernman",
            title:"German",
            color:"bg-blue-400"

        },
        {
            text:"Indonesian",
            title:"Indonesian",
            color:"bg-yellow-800"

        },
        {
            text:"Portuguese",
            title:"Portuguese",
            color:"bg-red-400"

        },
    ]

  return (
    <div className='
        w-full
        my-background
        py-8
        px-1
        sm:px-4
        flex
    '>
        <div className='
            m-auto
            py-8
            w-[90%]
            flex
            flex-col
            gap-6
            
            
        '>
            <h1 className='
                text-white
                text-xl
                sm:text-2xl
                font-bold
                mx-auto
            '>
                BROWSE BY LANGUAGE
            </h1>
            <div 
                className='
                    grid
                    grid-cols-2
                    sm:grid-cols-3
                    lg:grid-cols-5
                    items-center
                    justify-center
                '
            >
                {
                    languages.map(({text, title, color}, index) => (
                        <div key={text} className={`
                            my-4
                            col-span-${index+1}
                            flex
                            flex-col
                            items-center
                            justify-center
                            gap-3
                            transition
                            hover:-translate-y-5
                            hover:scale-105
                        `}>
                            <div className={`
                                aspect-[1.3/1]
                                w-[80%]
                                rounded-lg
                                mx-auto
                                flex
                                justify-center
                                items-center
                                text-white
                                text-xl
                                font-bold
                                ${color}
                            `}>
                                {text}
                            </div>
                            <h1 className='
                                font-bold
                                text-white
                                text-lg
                                
                            '>
                                {title}
                            </h1>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default LanguageSection