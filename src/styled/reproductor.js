import styled from "styled-components";
import { fonts } from "../styled/fonts";
import { device } from "../mediaquery/device";

export const Sectiondiv = styled.section`
  position: fixed;
  bottom: 0;
  height: 165px;
  background-color: red;
  width: 100%;
  z-index: 1000;
  background: #eb5757;
  display: ${(display) => (display ? `${display.display}` : null)};
  transition: all 0.5s ease-in-out;
  @media ${device.tablet} {
    height: 100px;
    transition: all 0.5s ease-in-out;
  }
  @media ${device.tabletL}{
    z-index: 2000;
  }
`;
export const Container = styled.div`
  display: grid;
  height: 100px;
  grid-template-columns: repeat(2, 1fr);
  @media ${device.tablet} {
    height: 100px;
    grid-template-columns: repeat(3, 1fr);
  }
`;
/*artista*/
export const ContainerArtist = styled.div`
  height: 100px;
  flex-direction: row;
  display: flex;
`;
export const ImgArtist = styled.img`
  width: 100px;
  height: 100px;
`;
export const InfoArtist = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 20px;
  gap: 8px;
`;
export const TitleSong = styled.p`
  font-size: 14px;
  font-weight: 700;
  font-family: ${fonts.Quicksand};
  line-height: 17.5px;
  color: #ffffff;
`;
export const Artistep = styled.p`
  font-size: 12px;
  font-family: ${fonts.Quicksand};
  line-height: 15px;
  font-weight: 400;
  color: #828282;
`;

/*constroloes*/
export const ContainerControls = styled.div`
  height: 65px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  grid-column: 1/3;
  grid-row: 2/3;
  @media ${device.tablet} {
    grid-row: 1/2;
    grid-column: 2/3;
    gap: 24.8px;
    height:100px;
  }
`;
export const Button = styled.span`
  display: flex;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  justify-items: center;
  background: #ff7676;
  cursor: pointer;
`;
export const ButtonNext = styled.span`
  cursor: pointer;
`;
export const ButtonPrev = styled.span`
  cursor: pointer;
`;

export const ContainerVolumen = styled.div`
  height: 100px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 40px;
`;

export const InputVol = styled.input`
  cursor: pointer;
    -webkit-appearance: none;
    width: 100px;
    height: 6px;
    outline: none;
    background: #ffff;
    border-radius: 20px;
  
  ::-webkit-slider-thumb {
    -webkit-appearance: none;
    border-radius: 20px;
    appearance: none;
    width: 20px;
    height: 20px;
    background: #ffff;
    cursor: pointer;
  }
`;
export const IconVol = styled.span`
  padding-right: 24px;
  cursor: pointer;
`;
