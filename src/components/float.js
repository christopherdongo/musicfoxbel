import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import SoundContext from "../context/SoundContext";
import styled from "styled-components";
import { device } from "../mediaquery/device";

const DivFloat = styled.div`
  display: block;
  position: absolute;
  cursor: pointer;
  padding-top: 20px;
  padding-left: ${props => props.val? '270px' : '30px'};
  z-index: 2000;
  transition: all 0.5s ease-in-out;
  @media ${device.tabletL} {
    display: none;
    z-index: -9999;
    transition: all 0.5s ease-in-out;
  }
`;

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
