import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import SoundContext from "../../context/sound/SoundContext";
/*componente*/
import {DivFloat} from '../../styled/float' 


const Float = () => {
  const soundContext = useContext(SoundContext);
  const { ToogleAdd, toogle } = soundContext;

  const Toogle = () => {
    ToogleAdd(!toogle);
  };

  return (
    <DivFloat val={toogle}>
      <FontAwesomeIcon icon={faMusic} swapOpacity color="#E86060" fixedWidth onClick={Toogle} size='2x'/>
    </DivFloat>
  );
};

export default Float;
