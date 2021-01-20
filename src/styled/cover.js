import styled from "styled-components";
import { device } from "../mediaquery/device";
import { fonts } from "../styled/fonts";

export const Container = styled.div`
  width: 100%;
  height: 250px;
  padding-left: 1rem;
  padding-right: 1rem;
  @media ${device.tabletL} {
    display: grid;
    grid-template-columns: 250px 1fr;
    grid-template-rows: 250px;
    place-content: center;
    place-items: center;
    padding-left:2.5rem;
    padding-right:2.5rem;
  }
`;
export const Divcover1 = styled.div`
  width: 100%;
  height: 250px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  @media ${device.tabletL}{
     width:250px;
  }
`;
export const Divcover2 = styled.div`
  width: 100%;
  height: 250px;
  position: relative;
  background: linear-gradient(0deg, rgba(167, 0, 0, 0.5), rgba(167, 0, 0, 1)),
    url("https://wallpaperaccess.com/full/1695845.jpg") no-repeat;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
  transform: scaleX(-1);
  opacity: 0.5;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, 1fr);
  gap:5px;
  padding-left:32px;
  padding-right:32px;
  padding-bottom:25px;
  padding-top:15px;

 @media ${device.tablet}{
  padding-left:32px;
  padding-right:32px;
  padding-bottom:25px;
  padding-top:35px;
 }

 @media ${device.mobileL}{
  padding-left:15px;
  padding-right:15px;
 }

`;
export const Imgcover1 = styled.img`
  width: 100%;
  height: 250px;
  display: block;
  @media ${device.tabletL}{
    width:250px;
  }
`;
export const Iconplay = styled.img`
  position: absolute;
  cursor: pointer;
  width: 63px;
  height: 63px;
  :hover {
    transform: scale(1.2);
  }
`;
/*cover segundario*/
export const Button = styled.button`
  width: 117px;
  height:31px;
  font-size:14px;
  text-align:center;
  border-radius: 100px;
  color: #E86060;
  border: 1px solid #EB5757;
  border-radius: 100px;
  background:transparent;
  :hover{
      cursor:pointer;
      background:#e86060;
      color:#fff;
      
  }
`
export const Divpuntos = styled.div`
  width: 30px;
  height:31px;
  opacity: 0.7;
  display:flex;
  justify-content:center;
  align-items:center;
  gap:5px;
  :hover{
    cursor:pointer;
  }
`
export const Imgpuntos = styled.img`
width:3.91px;
height:4px;
`

export const NameArtist= styled.h1`
 font-family: ${fonts.Quicksand};
 font-size:22px;
 color:#fff;
 line-height:27.5px;
 font-weight:bold;
`
export const Subtitule = styled.h2`
  font-size:14px;
  font-family:${fonts.Quicksand};
  line-height:17.5px;
  color:#ffff;
`
export const Fans = styled.p`
  font-family:${fonts.Quicksand};
  font-size:10px;
  line-height:12.5px;
  font-weight:400;
  color:black;
`
export const Description = styled.div`
  width: 100%;
  height:31px;
  font-size:12px;
  font-weight:400;
  font-family: ${fonts.Quicksand};
  line-height:20.19px;
  max-width:589px;
  color:#ffff;
  text-align:justify;
`;

export const Coversection1 = styled.div`
  transform: scaleX(-1);
  width: 100%;
  display:flex;
  flex-direction:column;
  justify-content:flex-end;

  div{
      display:flex;
      flex-direction:row;
      gap:10px;
      align-items:center;
  }
`;
export const Coversection2 = styled.div`
  width:100%;
  transform: scaleX(-1);
  width: 100%;
  display:flex;
  align-items:center;
`;
export const Coversection3 = styled.div`
  transform: scaleX(-1);
  width: 100%;
  display:flex;
  justify-content:flex-star;
  align-items:flex-end;
  gap:20px;
`;
