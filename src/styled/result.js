import styled from 'styled-components'
import { device } from "../mediaquery/device";
import { fonts } from "../styled/fonts";

export const Container = styled.div`
width:100%;
padding-top:290px;
padding-left:1rem;
padding-right:1rem;
 @media ${device.tabletL}{
  padding-left: 2.5rem;
padding-right: 2.5rem;
     width:100%;
     padding-top:40px;
 }
`
export const TitleResult= styled.h1`
  font-family:${fonts.Quicksand};
  font-size:22px;
  line-height:27.5px;
  font-weight:700;
  color:#E86060;
  font-weight:bold;
  
`

export const DivCard=styled.div`
     display: grid;
     grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
     place-content:center;
     place-items:center;
     padding-top:30px;
     gap:20px;
 @media ${device.tablet}{  
 }
@media ${device.laptopL}{
    gap:40px;
}
`
export const Cardartist = styled.article`
 height:200px;
 width:160px;
:hover{
    transform:scale(1.01);
    opacity:0.7;
}
@media ${device.tablet}{
  height:186px;
}

`
export const ImgArtist = styled.img`
 display:block;
 width:160px;
 height:160px;
`
export const TitleSong=styled.p`
font-size:14px;
font-weight:700;
font-family:${fonts.Quicksand};
line-height:17.5px;
color:#555555;
`
export const Artistep= styled.p`
font-size:12px;
font-family: ${fonts.Quicksand};
line-height:15px;
font-weight:400;
color:#828282;
` 
export const Containerimg = styled.div`
position:relative;
 width:160px;
 height:160px;
 display:flex;
 justify-content:center;
 align-items:center;
`
export const Iconplay = styled.img`
  position: absolute;
  cursor: pointer;
  width: 32px;
  height: 36px;
  
  z-index:1000;
  :hover {
    transform: scale(1.2);
  }
`;