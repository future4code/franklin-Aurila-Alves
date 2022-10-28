import { useEffect } from "react";
import { useState } from "react";
import { ContainerMovie } from "../components/ContainerMovies/ContainerMovie";
import { TitleBox } from "../components/TitleBox/TitleBox";
import { ContainerHome, MoviesContainer } from "./styles";


const moviesURL = process.env.REACT_APP_API;
const apiKey = process.env.REACT_APP_API_KEY;


const Home = () => {

  const [popularMovies, setPopularMovies] = useState([])

  const getPopularMovies = async (url) => {
    const res = await fetch(url)
    const data = await res.json();

    setPopularMovies(data.results)
  };

  useEffect(() => {
    const popular = `${moviesURL}/popular?${apiKey}&language=pt-BR`
    getPopularMovies(popular)
  }, [])

  return (
    <>
      {/* <TitleBox
      /> */}
      <ContainerHome>
        <MoviesContainer>
          {popularMovies.length === 0 ? <p>Carregando...</p>
          :popularMovies.map((movie) => <ContainerMovie key={movie.id} movie={movie}/>)
          }
        </MoviesContainer>
      </ContainerHome>

    </>
  );
}

export default Home;