import React from "react";
import styled, { createGlobalStyle } from "styled-components";
/*context global*/
import { GlobalSoundState } from "./context/SoundState";

/*componenetes*/
import Catalogo from "./components/catalago/catalogo";
import Section from "./components/section/section";
import Reproductor from "./components/reproductor/reproductor";
import Float from "./components/float";
/*media querys*/
import { device } from "./mediaquery/device";

const Global = createGlobalStyle`
    *,::after, ::before{
      box-sizing:border-box;
      margin:0;
     padding:0;
    }
    ul,li{
  list-style: none; 
  list-style: none;
}
a{
  text-decoration: none;
}
html {
  height: 100vh;
}
   body{
    position:relative;
     min-height:100vh;
     background-color:white;
     max-width:1440px;
     overflow:hidden;
   }
`;

const ContainerPrincipal = styled.main`
  display: grid;
  grid-template-columns: 1% 1fr;

  @media ${device.tabletL} {
    grid-template-columns: 330px 1fr;
  }
`;

function App() {
  return (
    <>
      <GlobalSoundState>
        <Global />
        <ContainerPrincipal>
          <Catalogo />
          <Float />
          <Section />
          <Reproductor />
        </ContainerPrincipal>
      </GlobalSoundState>
    </>
  );
}

export default App;
