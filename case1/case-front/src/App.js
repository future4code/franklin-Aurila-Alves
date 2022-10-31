import React from "react";
import { Header } from "./components/Header/Header";
import { GlobalStyles } from "./styles";
import { Outlet } from "react-router-dom";


function App() {


  return (
    <>
      <GlobalStyles/>
      <Header/>

      <Outlet/>
    </>
  );
}

export default App;
