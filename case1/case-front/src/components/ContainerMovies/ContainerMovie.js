import React from "react";
import { MovieBox, MovieContainer, MovieDate, MovieImg, MovieTitle } from "./styles";

export const ContainerMovie = () => {
  return(
    <MovieContainer>
      <MovieBox>
        <MovieImg/>
        <MovieTitle/>
        <MovieDate/>
      </MovieBox>

    </MovieContainer>
  )
}