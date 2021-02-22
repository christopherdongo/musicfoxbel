import styled, {css} from "styled-components";
import { fonts } from "../styled/fonts";
import { device } from "../mediaquery/device";

export const Container = styled.div`
  display: grid;
  padding-left: 1rem;
  padding-right: 1rem;
  grid-template-columns: 1fr;
  @media ${device.tabletL} {
    padding-left: 2.5rem;
    padding-right: 2.5rem;
    grid-template-columns: 1fr 40%;
    place-content: center;
    place-items: center;
  }
`;
export const Divform = styled.form`
  width: 100%;
  display: flex;
  margin-top: 30px;
  margin-bottom: 40px;
  position: relative;
  grid-row: 2/3;
  @media ${device.tabletL} {
    justify-content: space-between;
    grid-row: 1/2;
  }
`;
export const Input = styled.input`
  width: 100%;
  height: 36px;
  border-radius: 100px;
  font-size: 18px;
  font-family: ${fonts.Quicksand};
  border: 1px solid #828282;
  padding-left: 16px;
  line-height: 22.5px;

  :placeholder {
    padding-left: 0px;
    color: #bdbdbd;
    background-color:red;
    line-height: 22px;
    font-weight: 400;
    font-size:${ fonts.Quicksand};
    display:flex;
    justify-content:center;
    align-items:center;
  }
  @media ${device.desktopL} {
    max-width: 524px;
  }
`;
export const Divusers = styled.div`
  flex-direction: row;
  display: flex;
  gap: 8px;
  justify-content: center;
  align-items: center;
  padding-top: 30px;
  @media ${device.tabletL} {
    justify-content: flex-end;
    gap:1rem;
    width: 100%;
    padding-top: 0px;
  }
`;
export const User = styled.p`
  color: #4f4f4f;
  font-family: ${fonts.Quicksand};
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
`;
export const Imguser = styled.img`
  width: 18px;
  height: 22px;
  padding-bottom: 3px;
`;
export const Imgsearch = styled.img`
  position: absolute;
  width: 18px;
  height: 18px;
  right: 2rem;
  margin-top: 9px;
  cursor: pointer;

  @media ${device.desktopL} {
  }

  ::hover {
    transform: scale(1.01);
  }
`;
/*cerrar session*/
export const Logout = styled.span`
    width: 32px;
  height: 36px;
  z-index: 1000;
  cursor: pointer;
  svg:hover{
    transform:scale(1.02);
  }
` 

/*mensaje de error para los formularios*/ 
export const Error =styled.span`
margin-top:0.5rem;
 color:red;
 font-size:14px;
 font-weight:500;
 font-family:${fonts.Quicksand}
`

export const Messageerror = styled.span`
padding:0.5rem;
font-family:${fonts.Quicksand};
font-size:14px;
font-weight:700;
text-align:center;
color:white;
${ ({code}) => {
  switch (code){
    case 200 : 
    return css`
     background-color: green;
    `
    case 201 :
      return css`
     background-color: green;
    `
    case 400:
      return css`
     background-color: red;
    `
    case 500 :
      return css`
     background-color: green;
    `
    default:
  }
}}
 
`