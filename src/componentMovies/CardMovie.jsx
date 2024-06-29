import React from 'react';
import { Link } from 'react-router-dom';


function CardMovie({movie}) {
  return (
    <div className='container d-flex justify-content-center align-items-center flex-wrap gap-4 mt-5 mb-5'>
      <div className="card" style={{ width: "18rem" }}>
      
        <div className="card-body">
          <h5 className="card-title">{movie.title}</h5>
          <h6 className="card-title">{movie.rating}</h6>
          <p className="card-text">{movie.description} 
            <span><Link to="/moviesDesc">show More</Link></span>
          </p>
          <p className="card-text">{movie.url}</p>
        </div>
      </div>
      
    </div>
  );
}

export default CardMovie;
