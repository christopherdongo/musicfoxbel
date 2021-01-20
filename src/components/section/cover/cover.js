import React, { useContext, useEffect } from "react";

/*context*/
import SoundContext from "../../../context/SoundContext";
import play from "../../../assets/play.svg";
import puntos from '../../../assets/puntos.svg'

/*componentes*/
import {
  Container,
  Divcover1,
  Divcover2,
  Imgcover1,
  Iconplay,
  Coversection1,
  Coversection2,
  Coversection3,
  Button,
  Description,
  NameArtist,
  Subtitule,
  Fans,
  Divpuntos,
  Imgpuntos
} from "../../../styled/cover";

const Cover = () => {
  /*recibiendo el context*/
  const soundContext = useContext(SoundContext);
  /*function y state del context*/
  const { AddCoverSound, cover } = soundContext;
  //destructurin
  const { cover_big} = cover;

  /*buscar el cover al iniciar la aplicacion*/
  useEffect(() => {
    AddCoverSound();
  // eslint-disable-next-line 
  }, []);


  return (
    <Container>
      <Divcover1>
        <Imgcover1 src={`http://e-cdn-images.deezer.com/images/cover/1a5f34fb1ce5ebad0557c06d90edba5c/500x500-000000-80-0-0.jpg` || cover_big} alr="cover" />
        <Iconplay src={play} alt="play" />
      </Divcover1>
      <Divcover2>
        <Coversection1>
          <NameArtist>Adele</NameArtist>
          <div>
          <Subtitule>Lo mejor de Adele</Subtitule>
          <Fans>321, 123 seguidores</Fans>
          </div>

        </Coversection1>
        <Coversection2>
          <Description>
            Adele Laurie Blue Adkins (Tottenham, Londres, Inglaterra, 5 de mayo
            de 1988), conocida simplemente como Adele, es una cantante,
            compositora y multinstrumentista británica.8​{" "}
          </Description>
        </Coversection2>
        <Coversection3>
          <Button>Reproducir</Button>
          <Button>Seguir</Button>
          <Divpuntos>
            <Imgpuntos src={puntos} alt="puntos"/>
            <Imgpuntos src={puntos}  alt="puntos"/>
            <Imgpuntos src={puntos} alt="puntos"/>
          </Divpuntos>
        </Coversection3>
      </Divcover2>
    </Container>
  );
};

export default Cover;
