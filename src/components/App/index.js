//import react
import React from 'react';
import { Banner } from '../Banner';
//import list of rows component
import { ListOfRows } from '../ListOfRows';
//import nav component
import { Nav } from '../Nav';

//create and export app component
export const App = () => {
	return (
		<>
			<Nav />
			<Banner />
			<ListOfRows />;
		</>
	);
};
