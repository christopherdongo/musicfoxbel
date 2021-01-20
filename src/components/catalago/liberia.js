import React, {useState} from 'react';
import {milibreria} from '../../contains/biblioteca'
import {Container,Divlink, Linkdiv, TitleLibreria } from '../../styled/styledlibreria'



const Libreria =()=>{

    const [select, setSelect]= useState(false);
    
    return(
        <Container>
         <TitleLibreria>Mi Libreria</TitleLibreria>
          <Divlink>
              {
                  milibreria.map( (item, index) => (
                      <Linkdiv onClick={()=>setSelect(!select)} href={item.link} key={index} select={select} >{item.name} </Linkdiv>
                  ))
              }

          </Divlink>
         
        </Container>
    )
}

export default Libreria