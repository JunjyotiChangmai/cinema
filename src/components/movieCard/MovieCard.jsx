import React from 'react';
import { Link } from 'react-router-dom';
import './MovieCard.css';

const MovieCard = ({ movie }) => {
  return (
    <Link to={`/movie/${movie.imdbID}`}>
      <div class="movie-card">
        <div class="image-container">
          <img src={movie.Poster} alt={movie.Title} />
        </div>
        <div class="content">
          <h3>{movie.Title}</h3>
          <div class="rating">
            <span>3.5</span>
            <span class="star">&#9733;</span>
          </div>
        </div>
      </div>

    </Link>
  )
};

export default MovieCard;
