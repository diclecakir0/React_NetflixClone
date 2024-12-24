import axios from "axios";
import { ActionTypes } from "../../constants/actionTypes";
import { options } from "../../constants/constants";

// Add base URL to all requests
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

// Function that creates an action object
export const setLoading = (payload) => ({
	type: ActionTypes.SET_LOADING,
	payload,
});



// Fetch data and dispatch to reducer
export const getMovies = () => {
	return async function (dispatch)  { 
		// Fetch data
	const res = await axios.get('/movie/popular?language=en', options);
		// Dispatch data to reducer
		dispatch({
			type: ActionTypes.SET_MOVIES,
			payload: res.data,
		});
	};
};


export const getGenres = () => (dispatch) => {
	 // Fetch category data
	axios.get("/genre/movie/list?language=en", options)
	.then((res) =>
		  // Dispatch to reducer
		dispatch({ 
		type: ActionTypes.SET_GENRES,
		payload: res.data.genres,
}))
	.catch((err)=> console.log(err));
};