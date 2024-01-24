import React from 'react'
import Billboard from './components/Billboard'
import { getMovieBanner } from '../actions/getMovieBanner';
import TopMovies from './components/TopMovies';
import { getAllMovies } from '../actions/getAllMovies';
import LanguageSection from './components/LanguageSection';
import MovieOverview from './components/MovieOverview';
import ExclusiveMovies from './components/ExclusiveMovies';
import MyList from './components/MyList';
import { getFavorites } from '../actions/getFavorites';
import getCurrentUser from '../actions/getCurrentUser';

export const revalidate = 0;

const page = async() => {
  const movie = await getMovieBanner();
  const movies = await getAllMovies();
  const favorites = await getFavorites();
  const currentUser = await getCurrentUser();

  return (
    <div className='bg-neutral-100 w-full'>
        <Billboard currentUser={currentUser} movie={movie} />
        <MyList currentUser={currentUser} favorites={favorites} />
        <ExclusiveMovies currentUser={currentUser} movies={movies} />
        <TopMovies currentUser={currentUser} movies={movies} />
        <LanguageSection />
        <MovieOverview movies={movies} />
    </div>
  )
}

export default page