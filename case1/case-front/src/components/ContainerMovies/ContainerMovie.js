import React from "react";
import { MovieBox, MovieContainer, MovieDate, MovieImg, MovieTitle } from "./styles";
import { Link } from "react-router-dom";

const imageURL = process.env.REACT_APP_IMG;

export const ContainerMovie = ({movie, showLink = true}) => {
  return(
    <MovieContainer>
      
      <MovieBox>
      {showLink && <Link to={`/movie/${movie.id}`}>
        <MovieImg src={imageURL + movie.poster_path}/>
        <MovieTitle>{movie.title}</MovieTitle>
        <MovieDate>
         {movie.release_date}
        </MovieDate>
        </Link>}
      </MovieBox>

    </MovieContainer>
  )
}