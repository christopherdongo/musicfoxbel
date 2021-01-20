import React from 'react';
import {Container,Divlink, Linkdiv, TitleLibreria } from '../../styled/styledlibreria'

import {playslist} from '../../contains/biblioteca'


const Playlist =()=>{

    return(
        <Container top="30px">
        <TitleLibreria>Playlist</TitleLibreria>
        <Divlink>
             {
                 playslist.map( (item, index) =>(
                     <Linkdiv key={index} href={item.link}>{item.name}</Linkdiv>
                 ))
             }
        </Divlink>
        </Container>
    )
}

export default Playlist