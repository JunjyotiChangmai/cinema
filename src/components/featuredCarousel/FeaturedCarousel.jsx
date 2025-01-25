import React from 'react';
import Slider from 'react-slick';
import './FeaturedCarousel.css';

const FeaturedCarousel = ({ movies }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Slider {...settings} className="carousel">
      {movies.map((movie) => (
        <div key={movie.imdbID} className="carousel-item">
          <img src={movie.Poster} alt={movie.Title} />
          <div className="carousel-caption">
            <h2>{movie.Title}</h2>
            <p>{movie.Year}</p>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default FeaturedCarousel;
