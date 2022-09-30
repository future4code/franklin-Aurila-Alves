import { ButtonGenre } from "../Buttons/Button"
import { BoxTitle, Text, TextFilter, TextTitle } from "./styles"

export const TitleBox = () => {
  return(
    <BoxTitle>

        <TextTitle>
          <Text>Milhões de filmes, séries e pessoas para descobrir. Explore já.
            </Text>
          </TextTitle>
        <TextFilter>Filtre por</TextFilter>
        <ButtonGenre text = 'ação'/>

    </BoxTitle>
  )
}