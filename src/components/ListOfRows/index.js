//import React
import React from 'react';
//import row component
import { Row } from '../Row';
//import the endpoints
import { requests } from '../../utils/request';

//create and export Row component
export const ListOfRows = () => {
  return(
    <>
      <Row title='Netflix Originals' fetchUrl={requests.fetchNetflixOriginals} />
      <Row title='Trending' fetchUrl={requests.fetchTrending} />
    </>
  )
}
