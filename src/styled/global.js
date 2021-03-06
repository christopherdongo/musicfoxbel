import styled, {createGlobalStyle} from 'styled-components'; 
import {device} from '../mediaquery/device'; 

export const Global = createGlobalStyle`
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
     min-height:100vh;
     background-color:white;
     overflow:hidden;
   }
`;
export const ContainerPrincipal = styled.main`
position:relative;
  display: grid;
  grid-template-columns: 1fr;

  @media ${device.tabletL} {
    grid-template-columns: 330px 1fr;
  }

  
`;
