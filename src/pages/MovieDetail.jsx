import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { baseImgUrl, options } from './../constants/constants';
import { useSelector } from 'react-redux';


function MovieDetail ()
{
	const baseImgUrl = 'https://image.tmdb.org/t/p/w500';
	const { movie_id } = useParams();
	const [detail, setDetail] = useState(null);
	useEffect(() => {
		axios.get(`/movie/${movie_id}`, options)
		.then((res) => setDetail(res.data));
	}, []);

	const sum = (detail?.revenue || 0) - (detail?.budget || 0);

	if (!detail) return <div>Loading...</div>;
  return (
	<div className='movie-detail row p-4'>
	  <div className='col-md-6 d-flex align-items-center'>
		<div className='position-relative'>
		<img style={{maxWidth:"300px"}} className='img-fluid rounded' src={baseImgUrl.concat(detail.poster_path)}  />
		<span className='position-absolute bg-warning rounded p-1 shadow bottom-0 end-0 mb-3 me-4'>{detail.vote_average}</span>
		</div>
	  </div>
	  <div className='col-md-6 d-flex flex-column justify-content-center'>
		<h1>{detail.title}</h1>
		<p>{detail.overview}</p>

	<div className='row'>
		<div className='col-6 col-md-12'>
			<p>Cost: {detail.budget}$</p>
			<p>Revenues: {detail.revenue}$</p>
			<p>{sum > 0 ? "Profit" : "Damage"}: {sum}</p>
		</div>
		<div className='col-6 col-md-12'>
			<div className='d-flex  gap-3'>
			Categories: {detail.genres.map((genre) => (
				<p className='badge bg-primary'>{genre.name}</p>
			))}
			</div>

			<div className='d-flex  gap-3'>
			languages: {detail.spoken_languages.map((lang) => (
				<p className='badge bg-primary'>{lang.name}</p>
			))}
			</div>

			<div className='d-flex  gap-3'>
			companies: {detail.production_companies.map((comp) => (
				<p className='badge bg-primary'>{comp.name}</p>
			))}
			</div>
		</div>
	  </div>

	  </div>
	  
	</div>
  )
}

export default MovieDetail;

