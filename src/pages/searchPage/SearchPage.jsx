import React, { useState, useEffect } from 'react';
import { fetchMovies } from '../../api/api';
import MovieCardSearch from "../../components/movieCardSearch/MovieCardSearch"
import "../searchPage/SearchPage.css"
import SearchLoading from '../../components/loading/SearchLoading';

const SearchPage = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (query) {
      setLoading(true);
      const timeoutId = setTimeout(() => {
        fetchMovies({ s: query, type: 'movie' })
          .then((res) => {
            if (res.data.Search) {
              setResults(res.data.Search);
            }
            setLoading(false);
          })
          .catch(() => setLoading(false));
      }, 500);

      return () => clearTimeout(timeoutId);
    }
  }, [query]);

  return (
    <div className='search-container'>
      <div className="search-box">
        <i className="fa-solid fa-magnifying-glass" />
        <input type="text" placeholder="Search" value={query} onChange={(e) => setQuery(e.target.value)} />
      </div>
      {(loading) ? <SearchLoading /> : (<div className='movie-grid'>
        {results.map((movie) => (
          <MovieCardSearch key={movie.imdbID} movie={movie} />
        ))}
      </div>)
      }
    </div>
  );
};

export default SearchPage;
