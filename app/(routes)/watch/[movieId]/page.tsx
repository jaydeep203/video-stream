

import { getMovie } from '@/app/actions/getMovie'
import VideoPlayer from '@/app/components/VideoPlayer'
import React from 'react'

const page = async({
  params
}: {
  params:{movieId: string}
}) => {

  const movie = await getMovie(params.movieId);
  return (
    <VideoPlayer
      movie={movie}
    />
  )
}

export default page
