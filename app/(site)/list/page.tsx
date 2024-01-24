import React from 'react'
import MyList from '../components/MyList'
import getCurrentUser from '@/app/actions/getCurrentUser'
import { getFavorites } from '@/app/actions/getFavorites';
import HomeBtn from '@/app/components/HomeBtn';

const page = async() => {
    const currentUser = await getCurrentUser();
    const favorites = await getFavorites();

    if(!currentUser){
      return (
        <div className='
          w-full
          h-[100vh]
          my-background
          flex
          items-center
          justify-center
        '>
          <HomeBtn />
        </div>
      )
    }

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