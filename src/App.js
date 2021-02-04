import React from "react";
/*react-router-dom*/ 
/*context global*/
import { GlobalSoundState } from "./context/SoundState";
/*styled global*/ 
import {Global, ContainerPrincipal} from './styled/global' 
/*componenetes*/
import Catalogo from "./components/catalago/catalogo";
import Section from "./components/section/section";
import Reproductor from "./components/reproductor/reproductor";
import Float from "./components/float";


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
