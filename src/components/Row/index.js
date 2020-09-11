//import React and its hooks
import React, { useState, useEffect } from 'react';
//import instance const
import { instance } from '../../utils/request';
//import styled component
import { Card, ListOfCards } from './styles';

//create and export Row component
export const Row = ({ title, fetchUrl }) => {
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
			<h1>{title}</h1>
      {/*List of cards component*/}
			<ListOfCards>
				{/*Map and return some component*/}
				{movies.map((movie, i) => (
					<Card key={i}>
						{/*Card component*/}
						<p>{movie.name ? movie.name : movie.title}</p>
						<img
							src={movie.poster_path}
							alt={movie.name ? movie.name : movie.title}
						/>
					</Card>
				))}
			</ListOfCards>
		</>
	);
};
