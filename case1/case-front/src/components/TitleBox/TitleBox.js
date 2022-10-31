import { useEffect, useState } from "react";
import { ButtonGenre } from "../Buttons/Button"
import { BoxTitle, GenreBox, Text, TextFilter, TextTitle } from "./styles"

const genreList = process.env.REACT_APP_GENRE;
const apiKey = process.env.REACT_APP_API_KEY;

export const TitleBox = () => {

  const [genre, setGenre] = useState([])

  const getGenre = async (url) => {
    const res = await fetch(url)
    const data = await res.json()

    setGenre(data.genres)
  }

  useEffect(() => {
    const genreButton = `${genreList}?${apiKey}&language=pt-BR`
    getGenre(genreButton)

  }, [])

  return(
    <BoxTitle>


        <TextTitle>
          <Text>Milhões de filmes, séries e pessoas para descobrir. Explore já.
            </Text>
        </TextTitle>
        <TextFilter>Filtre por</TextFilter>
        <GenreBox>

        {genre.map((gen) => 
        <ButtonGenre key={gen.id} gen={gen}/>
        )}
        </GenreBox>
    </BoxTitle>
  )
}