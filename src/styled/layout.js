import styled, { createGlobalStyle } from "styled-components";
import { device } from "../mediaquery/device";
import { fonts } from "../styled/fonts";

export const GlobalLayout = createGlobalStyle`
    *,::after, ::before{
      box-sizing:border-box;
      margin:0;
     padding:0;
    }
    ul,li{
  list-style: none; 
  list-style: none;
}
a{
  text-decoration: none;
}
html {
  height: 100vh;
}
   body{
    position:relative;
     width:100%;
     display:flex;
     justify-content:center;
     align-items:center;
     overflow:auto;
     font-family:${fonts.Quicksand}
   }
`;
export const Container = styled.main`
  width:100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 180px 340px;
  padding: 1rem 1.5rem 1rem 1.5rem;
  max-width:440px;
  margin:0px;
  cursor: pointer;
  border-radius:15px;
  ::after{
    content: '';
	position: absolute;
	width: 100%;
	height: 100%;
	left: 0;
	top: 0;
	background: linear-gradient(0deg, rgba(167, 0, 0, 0.5), rgba(167, 0, 0, 0)), url("https://wallpaperaccess.com/full/1695845.jpg") no-repeat center;
	background-size: cover;
	filter: blur(40px);
  z-index:-9999;
  
  }

  @media ${device.tablet} {
    max-width:750px;
    padding:1.5rem;
    place-content:center;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 400px;
  }

  


`;
