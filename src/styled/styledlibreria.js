import styled from 'styled-components'
import {fonts} from '../styled/fonts'

export const Container = styled.div`
width:100%;
display:flex;
flex-direction:column;
justify-content:center;
padding-left:40px;
font-family: ${fonts.Quicksand};
padding-top:${props => props.top}

`
export const Divlink =styled.div`
display:flex;
flex-direction:column;
 gap:10px;
 cursor:pointer;
 font-family: ${fonts.Quicksand};
`

export const Linkdiv = styled.a`
 font-size:16px;
 font-weight:400;
 font-family: ${fonts.Quicksand};
 position:relative;
 color:#fff;
 ::active{
    color:#E86060;
 }
 :hover{
   color:#E86060;
 }
 ::link{
  color:#E86060;
 }
 ::visited{
  color:#E86060;
 }

:after{
  display:block;
  content:url("../assets/reactangulo.svg");
  font-size:1rem;
  width:28px;
  height:28px;
  z-index:2000;
  position:absolute;

}


`
export const TitleLibreria = styled.h1`
  font-size:22px;
  color:#FFFFFF;
  font-weight:700;
  padding-bottom:10px;
  font-family: ${fonts.Quicksand};
`