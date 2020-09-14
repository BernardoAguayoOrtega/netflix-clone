//import React
import React, { useState, useEffect } from 'react';
//import the request
import { instance, requests } from '../../utils/request';
//import styled components
import { Header, Buttons, Button, Description } from './styles';

//create and export banner component into a functional component
export const Banner = () => {
	//use local state with react hooks
	const [movie, setMovie] = useState([undefined]);
	const [isChange, setIsChange] = useState(0);

	//use effect react hook
	/**
	 * @description: make a request to tmdb and return the netflix originals
	 */
	useEffect(() => {
		async function fetchData() {
			const request = await instance(requests.fetchNetflixOriginals)
				.then((result) => result.json())
				.then((data) => data.results);
			setMovie(request[Math.floor(Math.random() * request.length)]);
		}

		fetchData();
	}, [isChange]);

	//set interval
	useEffect(() => {
		const interval = setInterval(() => {
			setIsChange((number) => number + 1);
		}, 1000 * 30);
		return () => clearInterval(interval);
	}, []);

	console.log(movie.backdrop_path);

	return (
		<Header image={movie.backdrop_path}>
			{/*Title*/}
			<h1>{movie?.title || movie?.name || movie?.original_name}</h1>
			{/*div > 2 buttons*/}
			<Buttons>
				<Button>Play</Button>
				<Button>My list</Button>
			</Buttons>
			{/*description*/}
			<Description>{movie?.overview}</Description>
		</Header>
	);
};
