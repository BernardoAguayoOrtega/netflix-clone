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
      <Row title='I am the row component number 1' fetchUrl={requests.fetchNetflixOriginals} />
      <Row title='I am the row component number 2' fetchUrl={requests.fetchTrending} />
    </>
  )
}
