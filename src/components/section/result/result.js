import React, { useContext, lazy, Suspense } from "react";

/*componentes*/
import { Container, TitleResult, DivCard} from "../../../styled/result";
import Spinner from '../../../spinner/spinner'

/*context*/
import SoundContext from "../../../context/sound/SoundContext";

const OtherComponent = lazy( () => import('./card'))

const Result = () => {
  /*context*/
  const soundContext = useContext(SoundContext);
  const { sound, loading} = soundContext;

  return (
    <>

          <Container>
            { sound.length>=0 ? <TitleResult >Resultados</TitleResult> : null}
           
          {
            loading? <Spinner /> 
            :
            <DivCard>
            {sound.map((item, index) => (
             <Suspense key={index} fallback={<Spinner />}>
              <OtherComponent key={index} item={item} />
              </Suspense>
              
            ))}
          </DivCard>
          }
        </Container>

    </>
  );
};

export default Result;
