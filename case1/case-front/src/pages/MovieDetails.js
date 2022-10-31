import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BoxDetails, MoviesContainer, MoviesDetails } from "./styles"

const moviesURL = process.env.REACT_APP_API;
const apiKey = process.env.REACT_APP_API_KEY;
const imageURL = process.env.REACT_APP_IMG;


export const MovieDetails = () => {
  const {id} = useParams()
  const [movie, setMovie] = useState(null)

  const getMovie = async (url) => {
    const res = await fetch(url)
    const data = await res.json();

    setMovie(data)
  }

  useEffect(() => {
    const movieURL = `${moviesURL}${id}?${apiKey}&language=pt-BR`
    getMovie(movieURL)
  })

  return(

    <BoxDetails>
      {movie &&
      <MoviesContainer>
      <>
      <img src={imageURL + movie.poster_path} alt={`Cartaz do filme ${movie.title}`} title={`Cartaz do filme ${movie.title}`}/>
      </>
      <MoviesDetails>
      <h2>{movie.title}</h2>
      <p>{movie.vote_average}</p>
      <p>{movie.tagline}</p>
      <p>{movie.overview}</p>
      </MoviesDetails>
      </MoviesContainer>
      }

    </BoxDetails>
  )
}