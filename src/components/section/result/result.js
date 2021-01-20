import React, { useContext } from "react";

/*componentes*/
import Card from "./card";
import { Container, TitleResult, DivCard} from "../../../styled/result";
import Spinner from "../../../spinner/spinner";

/*context*/
import SoundContext from "../../../context/SoundContext";

const Result = () => {
  /*context*/
  const soundContext = useContext(SoundContext);
  const { sound, loading} = soundContext;
  return (
    <>

          <Container>
            { sound.length>=1 ? <TitleResult >Resultados</TitleResult> : null}
           
          {
            loading? <Spinner /> 
            :
            
            <DivCard>
              
            {sound.map((item, index) => (
              <Card key={index} item={item} />
            ))}
          </DivCard>
          }
        </Container>

    </>
  );
};

export default Result;
