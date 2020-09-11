//import React and its hooks
import React, { useState } from 'react';

//create and export Row component
export const Row = ({ title, fetchUrl }) => {
  //use state hook
  const [movies, SetMovies] = useState([])

  return(
    <>
      <h1>{title}</h1>
    </>
  )
}
