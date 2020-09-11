//import React and its hooks
import React, { useState, useEffect } from 'react';
//import instance const
import { instance } from '../../utils/request';

//create and export Row component
export const Row = ({ title, fetchUrl }) => {
	//use state hook
	const [movies, SetMovies] = useState([]);

	//use use effect hook
	useEffect(() => {
		const fetchData = async () => {
      const request = await instance(fetchUrl)
      .then(response => response.json())
			console.dir(request);
    };
    
    fetchData()

	});

	return (
		<>
			<h1>{title}</h1>
		</>
	);
};
