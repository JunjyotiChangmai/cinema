import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovies } from '../../api/api';
import { useFavorites } from '../../context/FavoritesContext';
import "./MovieDetailsPage.css";

const MovieDetailsPage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const { addFavorite, removeFavorite } = useFavorites();

  useEffect(() => {
    fetchMovies({ i: id })
      .then((res) => {
        setMovie(res.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  if (loading) return <p>Loading...</p>;

  return (
    <div className='movie-details'>
      <div className="back-image">
        <img src={movie.Poster} alt={movie.Title} />
      </div>
      <div className="md-container">
        <h1>{movie.Title}</h1>
        <p>Year: {movie.Year}</p>
        <p>Genre: {movie.Genre}</p>
        <div className='movie-plot'>{movie.Plot}</div>
        <div className="buttons">
          <button onClick={() => addFavorite(movie)}>Add to Favorites</button>
          <button onClick={() => removeFavorite(movie.imdbID)}>Remove Favorites</button>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailsPage;
