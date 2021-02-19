import styled from 'styled-components'
import {device} from '../mediaquery/device'


export const DivFloat = styled.div`
  display: block;
  position: absolute;
  cursor: pointer;
  padding-top: 20px;
  padding-left: ${props => props.val? '270px' : '30px'};
  z-index: 2000;
  transition: all 0.5s ease-in-out;
  @media ${device.tabletL} {
    display: none;
    z-index: -9999;
    transition: all 0.5s ease-in-out;
  }
`;

export const ContainerIMG =styled.div`
position:absolute;
width:250px;
height:80px;
margin-left:1.8rem;
z-index:2000;

`

export const Imglogo = styled.img`
width:100%;
height:100%;
`