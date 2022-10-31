import React from "react"
import { HeaderStyle, Logo } from "./styles"
import TMDBLogo from './../../images/TMDBLogo.png'
import { Link } from "react-router-dom"

export const Header = () => {
  return(
    <HeaderStyle>
      <Link to="/">
      <Logo src={TMDBLogo} alt="Logo TMDB" title="Logo TMDB" />
      </Link>
      
    </HeaderStyle>
  )
}