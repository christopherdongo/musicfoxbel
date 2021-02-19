import styled from 'styled-components'
import { device } from '../mediaquery/device';
import { fonts } from "./fonts";
import {Link} from 'react-router-dom';

export const Section = styled.section`
  box-shadow: 0px 0px 19px 5px rgba(0,0,0,0.19);
  background:white;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-content:center;
  border-radius: 0 0 10px 10px;

  @media ${device.tablet}{
  border-radius:0 15px 15px 0;
  }
`

export const Title =styled.h1`
  font-family:${fonts.Quicksand};
  font-size:28px;
  text-align:center;
  color:#E86060;
  font-weight:700;
  margin-top:1rem;
  @media ${device.tablet}{
     padding-top:0;
  }
`
/*Formulario*/ 
export const Formulario = styled.form`
position:relative;
 display:flex;
 flex-direction:column;
 padding-left:1rem;
 padding-right:1rem;
 height:430px;
 justify-content:space-around;
 align-content:center;
 overflow:hidden;

 @media ${device.tablet}{
   padding:1.5rem;
   height:380px;
 }
`
export const Formcontrol = styled.div`
 display:flex;
 flex-direction:column;

`
export const Input = styled.input`
 padding:0.2rem;
 border-radius:5px;
outline:none !important;
outline-offset: 0 !important;
box-shadow:none;
border:0;
border-bottom: ${props => props.color? '2px' : '1px'} solid ${props => props.color? 'red' : '#888'} ;
background: transparent !important;
::placeholder{
  color: ${props => props.color? 'red' : '#888'};
}
 :focus{
     border-bottom: 2px solid #E86060 !important ;    
 }

`
export const Submit = styled.input`
 width:100%;
 position:relative;
 padding:0.5rem;
 margin-top:0.5rem;
 font-size:18px;
 border-radius:10px;
 cursor:pointer;
 background:#ff7676;
 border-style:hidden;
 color:black;

 &{
   transition: color 0.4s;
 }
 &:hover{
  color: #2a363b;
  opacity:0.9;
 }

 &:hover::before{
   transform: translateX(0);
 }

 ::before{
 content:"";
 position: absolute;
 display:block;
 width:100%;
 height:100%;
 top:0;
 left:0;
 background-color:#2a363b;
 transform:translateX(-100%);
 transition:transform 0.4s;
 z-index: -1;
 }

 @media ${device.tablet}{
   margin-top:0.8em;
 }

 
`
export const Containerlink = styled.ul`
 display:flex;
 justify-content:space-between;
 position:relative;
 overflow:hidden;
 width:100%;
 
`
export const Enlace = styled(Link)`
 color:#ff7676;
 font-family:${fonts.Quicksand};
 font-size:16px;
 font-weight:500;
 margin-bottom:0.5rem;
 margin-top : ${props => props.pading ? '2px' :  null};
 &:hover{
 transform:scale(5);
 }
`
export const Li = styled.li`
  position: relative;
  cursor: pointer;
  padding: 1rem 0;
  overflow: hidden;

::before, ::after{
  content: "";
  display: block;
  position: absolute;
  width: 100%;
  height: 2px;
  background:#ff7676;
  transition: transform 0.2s;
}
&::before{
  top:10px;
  transform: translateX(-100%);
}
&::after{
  bottom: 10px;
  transform: translate(100%);
}
&:hover::after, 
&:hover::before{
  transform:translateX(0);
}

`

/*signup*/ 