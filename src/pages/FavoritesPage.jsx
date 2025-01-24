import React from 'react';
import { useFavorites } from '../context/FavoritesContext';
import MovieCard from '../components/movieCard/MovieCard';

const FavoritesPage = () => {
  const { favorites } = useFavorites();

  if (favorites.length === 0) return <p>No favorite movies yet!</p>;

  return (
    <div>
      {favorites.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default FavoritesPage;
