import React from "react";
import { ContainerMovie } from "./components/ContainerMovies/ContainerMovie";

import { Header } from "./components/Header/Header";
import { TitleBox } from "./components/TitleBox/TitleBox";
import { GlobalStyles } from "./styles";

function App() {
  return (
    <>
      <GlobalStyles/>
      <Header/>
      <TitleBox
      />
      <ContainerMovie>

      </ContainerMovie>
    </>
  );
}

export default App;
