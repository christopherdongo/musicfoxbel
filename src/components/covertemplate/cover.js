import React from 'react';
/*imagen*/
import imagen from '../../assets/img/adelleportada.jpg' 

/*componentes*/
import {Section, Img} from '../../styled/template'

const CoverTemplate=()=>{

    return(
        <Section>
         <Img src={imagen} alt="image de protada" />
        </Section>
    )
}

export default CoverTemplate