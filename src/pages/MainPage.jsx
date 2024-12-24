import React, { useEffect } from 'react'
import { options } from '../constants/constants'
import axios from 'axios'
import { ActionTypes } from '../constants/actionTypes';
import { useDispatch, useSelector } from 'react-redux';
import Hero from '../components/Hero';
import { getGenres, setLoading } from '../redux/actions/actions';
import { getMovies } from '../redux/actions/actions';
import ListMovies from '../components/ListMovies';


const MainPage = () => { 
  const dispatch = useDispatch();
  const state = useSelector((store) => store.movieReducer);

  useEffect(() => {
   // set loading to true
    dispatch(setLoading(true));

   // fetch popular movie data and store it
   dispatch(getMovies());

   // fetch category data and store it
   dispatch(getGenres());
   
  }, [dispatch]);



  return (
	<div>
    <Hero />
    {/* render the component that lists movies for each category */}
    {
      state.genres.map((genre) => (
        <ListMovies key={genre.id} genre={genre} />
      ))
    }
  </div>
  )
};

export default MainPage;