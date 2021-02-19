import React from "react";
/**/ 
import {ContainerPrincipal} from '../styled/global'
/*componenetes*/
import Catalogo from "../components/catalago/catalogo";
import Section from "../components/section/section";
import Reproductor from "../components/reproductor/reproductor";
import Float from "../components/float/float";
const Home = () => {
  return (
    <>
      <ContainerPrincipal>
        <Catalogo />
        <Float />
        <Section />
        <Reproductor />
      </ContainerPrincipal>
    </>
  );
};

export default Home;
