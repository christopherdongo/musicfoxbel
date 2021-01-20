import React from 'react';
import styled from 'styled-components'
import {device} from '../../mediaquery/device'
/*componentes*/
import Form from './header/form'
import Cover from './cover/cover'
import Result from './result/result'


const Sectiondiv = styled.section`
     background:white;
     height:84vh;
     overflow-y:scroll;
     padding-right:0 !important;
     padding-left:0 !important;
     display:flex;
     flex-direction:column;
   
     ::-webkit-scrollbar {
      -webkit-appearance: none;
    }
    ::-webkit-scrollbar:vertical {
      width:5px;
    }
    ::-webkit-scrollbar-button:increment,::-webkit-scrollbar-button {
      display: none;
    } 
    ::-webkit-scrollbar:horizontal {
      height: 5px;
    }
    ::-webkit-scrollbar-thumb {
      background-color: #797979;
      border-radius: 20px;
      border: 2px solid #f1f2f3;
    }
    ::-webkit-scrollbar-track {
      border-radius: 10px;  
    }

    @media ${device.tablet}{
      height:84vh;
    }
`
const Section =()=>{

    return(
        <Sectiondiv>
         <Form />
         <Cover />
         <Result /> 
        </Sectiondiv>
    )
}


export default Section