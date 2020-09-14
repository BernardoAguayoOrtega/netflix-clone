//import React and its hooks
import React, { useState, useEffect } from 'react';
//import instance const
import { instance, baseUrl } from '../../utils/request';
//import styled component
import { ListOfCards, Poster, Title } from './styles';

//create and export Row component
export const Row = ({ title, fetchUrl, isLargeRow }) => {
	//use state hook
	const [movies, SetMovies] = useState([]);

	//use use effect hook
	/**
	 * @description: make a request to the movie data base and return the response
	 * in json formant. Also add the movies response to movies state
	 */
	useEffect(() => {
		const fetchData = async () => {
			const request = await instance(fetchUrl).then((response) =>
				response.json(),
			);

			SetMovies(request.results);
		};

		fetchData();
	}, [fetchUrl]);

	console.table(movies);

	return (
		<>
			{/*Title*/}
			<Title>{title}</Title>
			{/*List of cards component*/}
			<ListOfCards>
				{movies.map((movie) => (
					<Poster
						key={movie.id}
						src={`${baseUrl}${
							isLargeRow ? movie.poster_path : movie.backdrop_path
						}`}
						alt={movie.name ? movie.name : movie.title}
					/>
				))}
			</ListOfCards>
		</>
	);
};
