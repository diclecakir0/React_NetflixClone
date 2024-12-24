import React from 'react'
import { useSelector } from 'react-redux'
import { baseImgUrl } from '../constants/constants';
import { Link } from 'react-router-dom';

const Hero = () => {
	// Subscribe to the store (access the data stored in the store)
	const state = useSelector((store) => store.movieReducer);
	// Find a random number based on the length of the array
	const i = Math.floor(Math.random() * state.popularMovies.length);
	// Select a random movie from the array
	const film =  state.popularMovies[i];

	if(state.isLoading){ return 'Loading...'; }

  return (
	<div className='row p-4'>
		 {/* Display while loading */}
		{state.isLoading && <p>Loading...</p>}
		{/* Display after loading */}
		{!state.isLoading && (
			<>
			<div className='col-md-6 gap-3 mb-3 d-flex flex-column justify-content-center'>
			<h1>{film.title}</h1>
			<p className='lead'>{film.overview}</p>
			<p className='text-warning fw-bold'>IMDB: {film.vote_average}</p>
			<div className='d-flex gap-3 justify-content-center'>
				<Link to={`/movie/${film.id}`} className='btn btn-danger'>Watch the Movie</Link>
				<button className='btn btn-info'>Add to List</button>
			</div>
			</div>
			<div className='col-md-6 d-flex align-items-center'>
				<img className='img-fluid rounded shadow' src={`${baseImgUrl}${film.backdrop_path}`} alt="" />
			</div>
			</>
		)}
	</div>
  );
};

export default Hero;