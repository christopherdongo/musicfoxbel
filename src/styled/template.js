import styled from "styled-components";
import { device } from "../mediaquery/device";

export const Section = styled.section`
  display: block;
  box-shadow: 0px 0px 19px 5px rgba(0,0,0,0.19);
  border-radius:10px 10px 0 0;
  @media ${device.tablet} {
    height:100%;
    width:100%;
    background-size:100%;
    background-position:center;
    object-fit:contain;
    border-radius: 15px 0 0 15px;
  }
`;
export const Img = styled.img`
display:block;
margin:auto;
 width:100%;
 height:100%;
 opacity:0.5;
 border-radius:10px 10px 0 0;

 @media ${device.tablet}{
  border-radius: 15px 0 0 15px;
 }
`