import React from 'react'
import CardMovie from './CardMovie'


function ListMovies({ArrFinalMovie}) {
  return (
<>
{ArrFinalMovie?.map((m, index) => (
      <CardMovie key={index} movie={m} />
    ))}
</>
  )
}

export default ListMovies