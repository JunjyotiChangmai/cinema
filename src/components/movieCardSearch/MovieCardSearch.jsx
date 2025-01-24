import { useEffect, useState} from 'react';
import "./MovieCardSearch.css"
import { fetchMovies } from '../../api/api';
import { Link } from 'react-router-dom';

const MovieCardSearch = ({movie}) => {

  const [res, setRes] = useState(null);
  const [loading, setLoading] = useState(true);
  // const { addFavorite, removeFavorite } = useFavorites();

  useEffect(() => {
    fetchMovies({ i: movie.imdbID })
      .then((res) => {
        setRes(res.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [movie.imdbID]);

  console.log(res);

  if (loading) return <p></p>;

  return (
    <Link to={`/movie/${res.imdbID}`}>
    <div className="movie-s-card">
      <div className="image-s-container">
        <img src={res.Poster}/>
      </div>
      <div className="s-content">
        <h3>{res.Title}</h3>
        <div className="s-rating">
          <span>{res.imdbRating}</span>
          <span className="s-stars">
            &#9733;&#9733;&#9733;&#9733;&#9734;
          </span>
        </div>
        <p className="s-genre">{res.Genre}</p>
        <p className="s-description">{res.Plot}</p>
      </div>
    </div>
    </Link>
  )
}

export default MovieCardSearch
