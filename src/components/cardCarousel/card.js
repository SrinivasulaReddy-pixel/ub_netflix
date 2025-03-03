import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./card.css";
import { moviesData } from "../../json/movies";
import { useNavigate } from "react-router-dom";


const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 4 },
  tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
};

export const StremeoCardCarousel = () => {
  const [hoveredMovie, setHoveredMovie] = useState(null);
  const navigate = useNavigate();

  const handleWatchNow = ()=>{
    navigate('/WatchNow')
  }

  return (
    <div className="stremeo-card-carousel">
      <div className="stremeo-card-carousel-header-part">
        <span>Latest and Popular Movies</span>
      </div>
      <div className="container stremeo-card-carousel-section">
        <Carousel
          responsive={responsive}
          autoPlay={true} // Enables auto-scroll
          autoPlaySpeed={1000} // Moves every 2 seconds (2000ms)
          infinite={true} // Loops the carousel infinitely
          keyBoardControl={true} // Allows keyboard navigation
          removeArrowOnDeviceType={["tablet", "mobile"]}
        >
          {moviesData.map((movie) => (
            <div
              key={movie.id}
              className="stremeo-individual-card-layout"
              onMouseEnter={() => setHoveredMovie(movie.id)}
              onMouseLeave={() => setHoveredMovie(null)}
            >
              <img src={movie.image} alt={movie.name} className="movie-image" />
              {hoveredMovie === movie.id && (
                <div className="movie-quality-overlay">
                  <p className="carousel-movie-name">{movie.name}</p>
                  <p className="carousel-movie-quality">
                    Quality: {movie.quality}
                  </p>
                  <p className="carousel-movie-button">
                    <span>
                      <button onClick={(e)=>{e.preventDefault();handleWatchNow()}}>Watch Now</button>
                    </span>
                  </p>
                </div>
              )}
              {/* {hoveredMovie === movie.id && (
                <div className="movie-quality-overlay">
                  <p>Quality: {movie.quality}</p>
                </div>
              )} */}
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};
