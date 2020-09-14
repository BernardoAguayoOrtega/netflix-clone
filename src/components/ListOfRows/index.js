//import React
import React from 'react';
//import row component
import { Row } from '../Row';
//import the endpoints
import { requests } from '../../utils/request';

//create and export Row component
export const ListOfRows = () => {
	return (
		<>
			<Row
				title='Netflix Originals'
				fetchUrl={requests.fetchNetflixOriginals}
			/>
			<Row title='Trending' fetchUrl={requests.fetchTrending} />
			<Row title='Top Rated' fetchUrl={requests.fetchTopRated} />
			<Row title='Action Movies' fetchUrl={requests.fetchActionMovies} />
			<Row title='Comedy Movies' fetchUrl={requests.fetchComedyMovies} />
			<Row title='Horror Movies' fetchUrl={requests.fetchHorrorMovies} />
			<Row title='Romance Movies' fetchUrl={requests.fetchRomanceMovies} />
			<Row title='Documentaries' fetchUrl={requests.FetchDocumentaries} />
		</>
	);
};
