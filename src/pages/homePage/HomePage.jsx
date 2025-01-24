import React, { useEffect, useState } from 'react';
import { fetchMovies } from '../../api/api';
import MovieCard from '../../components/movieCard/MovieCard';
import FeaturedCarousel from '../../components/featuredCarousel/FeaturedCarousel';
import "./HomePage.css"

const HomePage = () => {
  const [featuredMovies, setFeaturedMovies] = useState([]);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovies({ s: 'indian', type: 'movie' }).then((res) => {
      if (res.data.Search) {
        setFeaturedMovies(res.data.Search.slice(0, 5));
        setMovies(res.data.Search);
      }
    });
  }, []);

  return (
      <div className="home-container">
      <FeaturedCarousel movies={featuredMovies} />
        <h1>Popular Movies<span>.</span></h1>
        <div className="movie-grid">
          {movies.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))}
        </div>
      </div>
  );
};

export default HomePage;
