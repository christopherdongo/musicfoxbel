import React, {useContext} from 'react';

/*import context*/
import SoundContext from '../../context/sound/SoundContext' 
import Volumen from './volumen'

/*components*/
import {
  ContainerArtist,
  ContainerControls,
  ContainerVolumen,
  Container,
  Sectiondiv,
  ImgArtist,
  InfoArtist,
  TitleSong,
  Artistep

} from '../../styled/reproductor' 
import Song from './song'


const Reproductor=()=>{

  const soundContext= useContext(SoundContext);
  const {display, play} = soundContext;
    return(
        <Sectiondiv display={display} >
          <Container>
            <ContainerArtist>
              <ImgArtist src={play.album !==undefined ? play.album.cover_xl : null}  />
              <InfoArtist>
                <TitleSong>
                   { play? play.title : null}
                </TitleSong>
                <Artistep>
                {play.artist !==undefined ? play.artist.name : null}
                </Artistep>
              </InfoArtist>
            </ContainerArtist>
            <ContainerControls >
             <Song />
            </ContainerControls   >
            <ContainerVolumen>
                <Volumen />
            </ContainerVolumen>
          </Container>
        </Sectiondiv>
    )
}

export default Reproductor