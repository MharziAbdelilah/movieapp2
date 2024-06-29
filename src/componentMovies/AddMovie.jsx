import React, { useState } from 'react'
import ListMovies from './ListMovies';

function AddMovie() {
  const [movie, setMovie] = useState({});
  const [movies, setMovies] = useState([]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setMovie((prevState) => ({
      ...prevState,
      [id]: value
    }));
  };

  // This function will handle adding the movie to the movies array
  const handleAddMovie = () => {
    setMovies((prevMovies) => ([
      ...prevMovies, movie
    ]));
    setMovie({}); // Clear the form after adding the movie
  };

  return (
    <>
      <div className='container mt-5'>
        <h1 className='text-center'>Ajouter un Film</h1>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title</label>
          <input type="text" className="form-control" id="title" placeholder="Title ..." onChange={handleChange} />
        </div>

        <div className="mb-3">
          <label htmlFor="rating" className="form-label">Rating</label>
          <input type="text" className="form-control" id="rating" placeholder="Rating..." onChange={handleChange}  />
        </div>

        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description</label>
          <input type="text" className="form-control" id="description" placeholder="Description ..." onChange={handleChange}  />
        </div>

        <div className="mb-3">
          <label htmlFor="url-movie" className="form-label">URL Movie</label>
          <input type="text" className="form-control" id="url" placeholder="URL-Movie ..." onChange={handleChange}  />
        </div>

        <button className='btn btn-primary' onClick={handleAddMovie}>Add Movie</button>
      </div>

    <ListMovies ArrFinalMovie={movies}/>
    </>
  );
}

export default AddMovie;
