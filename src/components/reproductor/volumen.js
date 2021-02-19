import React, {useContext} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faVolumeOff,

} from "@fortawesome/free-solid-svg-icons";
/*import context*/
import SoundContext from '../../context/sound/SoundContext' 
/*componentes*/
import {InputVol, IconVol} from '../../styled/reproductor'


const Volumen =()=>{
    /*context*/
    const soundContext = useContext(SoundContext);
    const {AddVolumen} = soundContext;


    /*escucha del value del volumen*/ 
    const HandlerVolumen =(e)=>{
        e.preventDefault();
        AddVolumen((Math.round( (e.target.value/100)* 100))/100)
       // console.log((Math.round( (e.target.value/100)* 100))/100)
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
        <FontAwesomeIcon icon={faVolumeOff} color="white" />
        </IconVol>
        </>
    )
}

export default Volumen