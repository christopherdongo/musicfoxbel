import imagen from '../../assets/foxbel-music@3x.png'

import {ContainerIMG, Imglogo} from '../../styled/float'
const LogoFloat =()=>{

    return(
        <>
         <ContainerIMG>
             <Imglogo src={imagen}  alt="logo" />
         </ContainerIMG>
        </>
    )
}

export default LogoFloat;