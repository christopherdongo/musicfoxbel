import React, {useContext, useState} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faVolumeOff,
    faVolumeUp
} from "@fortawesome/free-solid-svg-icons";
/*import context*/
import SoundContext from '../../context/sound/SoundContext' 
/*componentes*/
import {InputVol, IconVol} from '../../styled/reproductor'


const Volumen =()=>{
    /*context*/
    const soundContext = useContext(SoundContext);
    const {AddVolumen,soundMuted, muted, soundUnMuted} = soundContext;

    /*state*/
  const [changeIcon, setChangeIcon] = useState(false);

    /*escucha del value del volumen*/ 
    const HandlerVolumen =(e)=>{
        e.preventDefault();
        AddVolumen((Math.round( (e.target.value/100)* 100))/100)
       // console.log((Math.round( (e.target.value/100)* 100))/100)
    }


    const mutedVolumen = () => {
    console.log('muted')
    setChangeIcon(!changeIcon)
    soundMuted();
    }

    const mutedUnVolumen = () => {
        setChangeIcon(!changeIcon);
        soundUnMuted();
    }

   /*enviar el valor al context*/
    
    return(
        <>
        <InputVol 
          type="range"
          onChange={HandlerVolumen}
          min="0"
          max="100"
          defaultValue="80"
        ></InputVol>
        <IconVol>
        <FontAwesomeIcon icon={ changeIcon === false ? faVolumeUp : faVolumeOff} color="white" onClick={ muted === false? mutedVolumen: mutedUnVolumen} />
        </IconVol>
        </>
    )
}

export default Volumen