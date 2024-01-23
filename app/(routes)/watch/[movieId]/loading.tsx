"use client";

import React from 'react'
import { ClipLoader } from 'react-spinners';

const Loading = () => {
  return (
    <div className='h-[100vh] my-background w-full flex items-center justify-center'>
        <ClipLoader color='crimson' size={60} />
    </div>
  )
}

export default Loading;