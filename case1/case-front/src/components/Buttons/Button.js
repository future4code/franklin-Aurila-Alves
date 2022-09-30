import React from "react";
import { ButtonStyle, ButtonText } from "./styles";

export const ButtonGenre = (props) => {
  return(
    <ButtonStyle>
      <ButtonText>{props.text}</ButtonText>
    </ButtonStyle>
    
  )
}