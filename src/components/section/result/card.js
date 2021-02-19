import React, {useContext} from "react";
import play from '../../../assets/play.svg'
/*api context*/
import SoundContext from '../../../context/sound/SoundContext'
/**/
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsisV,
  faPlay,
  faPause
} from "@fortawesome/free-solid-svg-icons";
/*componentes*/
import {
  Cardartist,
  ImgArtist,
  TitleSong,
  Artistep,
  Containerimg,
  Iconplay,
  Menusong,
  Button
} from "../../../styled/result";
/*component options*/


const Card = ({ item }) => {

    /*context*/
    const soundContext = useContext(SoundContext);
    const {AddPlay, PlayingAdd, ADDrepro, play, repro} = soundContext;
  const { artist, album, title, id } = item;
  const hanlderPlay=(id)=>{
      const display="show"
      AddPlay(display, id);
      PlayingAdd(!true);
      ADDrepro(true);
}


  return (
    <Cardartist>
      <Containerimg>
        <ImgArtist src={album.cover_xl}  al={album.name} />
       {/* <Iconplay src={play} alt="play" onClick={()=>hanlderPlay(id)}/>*/}
       <Button >
         <FontAwesomeIcon 
          icon={ repro && id == play.id? faPause : faPlay}
            swapOpacity
            color="white"
            size="3x"
            onClick={()=>hanlderPlay(id)}
         />
       </Button>

       { <Menusong>
        <FontAwesomeIcon
          icon={faEllipsisV}
          color="white"
          size="lg"
        />
       </Menusong> }
      </Containerimg>
      <TitleSong>{title}</TitleSong>
      <Artistep>{artist.name}</Artistep>
    </Cardartist>
  );
};

export default Card;
