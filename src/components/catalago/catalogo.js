import React, {useContext} from 'react';
import SoundContext from '../../context/sound/SoundContext'
import styled  from 'styled-components'
import {device} from '../../mediaquery/device'
/*componente*/
import Logo from './logo'
import Libreria from './liberia'
import Playlist from './playlist'

const DivAside = styled.aside`
position:absolute;
  width: 330px;
  background: #662323;
  min-height:100vh;
  display:flex;
  flex-direction:column;
  align-items:center;
  z-index:2000;
  transform:translateX(${props => props.val ? "0px" : "-330px" });
  transition: cubic-bezier(0.165, 0.84, 0.44, 1);
  transition: all 0.5s ease-in-out;
  border-top-right-radius:100px;
  @media ${device.tablet}{
    transition: all 0.5s ease-in-out;
  }
  @media ${device.tabletL}{
    position:relative;
    transform:translateX(0px);
    width: 330px;
    transition: all 0.5s ease-in-out;
  }
`
const Catalogo=()=>{

  const soundContext = useContext(SoundContext)
  const {toogle} = soundContext;

    return(
        <DivAside val={toogle}>
           <Logo />
           <Libreria />
           <Playlist />
        </DivAside>
    )
}

export default Catalogo