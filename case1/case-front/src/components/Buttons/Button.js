import React from "react";
import { ButtonStyle, ButtonText } from "./styles";


export const ButtonGenre = ({gen}) => {
  return(
    <ButtonStyle>
      <ButtonText>
      
       <p> {gen.genres.name}</p>
        </ButtonText>
    </ButtonStyle>
    
  )
}