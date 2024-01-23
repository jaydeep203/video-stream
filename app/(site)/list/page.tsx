import React from 'react'
import MyList from '../components/MyList'
import getCurrentUser from '@/app/actions/getCurrentUser'
import { getFavorites } from '@/app/actions/getFavorites';

const page = async() => {
    const currentUser = await getCurrentUser();
    const favorites = await getFavorites();
  return (
    <div className='
        pt-[5rem]
        my-background
        w-full
        h-[100vh]
    '>
        <MyList currentUser={currentUser} favorites={favorites} />
    </div>
  )
}

export default page