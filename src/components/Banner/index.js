//import React
import React, { useState, useEffect } from 'react';
//import the request
import { instance, requests } from '../../utils/request';

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
			const request = await instance(requests.fetchNetflixOriginals);
		}
		fetchData();
	}, [isChange]);

	return (
		<header>
			{/*image background*/}
			{/*Title*/}
			{/*div > 2 buttons*/}
			{/*description*/}
		</header>
	);
};
