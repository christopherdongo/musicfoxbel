import React, { useContext, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStepBackward,
  faStepForward,
  faPlay,
  faPause,
} from "@fortawesome/free-solid-svg-icons";
/*componentes*/

import { Button, ButtonNext, ButtonPrev } from "../../styled/reproductor";
import SoundContext from "../../context/SoundContext";

const Song = () => {
  const soundContext = useContext(SoundContext);
  const { play, volumen, repro, ADDrepro } = soundContext;

  const audio = useRef("audio_tag");
  
  useEffect( ()=>{
        if(play){
          audio.current.play();
        }
  }, [play])

    useEffect(()=>{
       if(volumen){
        audio.current.volume=volumen
       }
  }, [volumen])

  const playSound = () => {
    audio.current.play();
    ADDrepro(true);
  };
  // pause audio sound
  const pauseSound = () => {
    audio.current.pause();
    ADDrepro(false);
  };


  return (
    <>
      <div>
        <audio
          ref={audio}
          type="audio/mpeg"
          preload="true"
          src={play.preview}
          
        />
      </div>
      <ButtonPrev>
        <FontAwesomeIcon
          icon={faStepBackward}
          color="white"
          width="22.8"
          height="22.8"
        />
      </ButtonPrev>
      {repro ? (
        <Button onClick={pauseSound}>
          <FontAwesomeIcon
            icon={faPause}
            swapOpacity
            color="white"
            width="24.5"
          />
        </Button>
      ) : (
        <Button onClick={playSound}>
          <FontAwesomeIcon
            icon={faPlay}
            swapOpacity
            color="white"
            width="24.5"
            height="24.5"
          />
        </Button>
      )}
      <ButtonNext type="button" value="Next">
        <FontAwesomeIcon
          icon={faStepForward}
          color="white"
          width="22.8"
          height="22.8"
        />
      </ButtonNext>
    </>
  );
};

export default Song;
