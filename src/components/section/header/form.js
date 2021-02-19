import React, {useState, useContext} from "react";
import {
  Container,
  Divform,
  Input,
  Divusers,
  User,
  Imguser,
  Imgsearch,
  Logout
} from "../../../styled/form";
import Avatar from "../../../assets/user.svg";
import search from '../../../assets/search.svg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
 faSignOutAlt
} from "@fortawesome/free-solid-svg-icons";

/*context*/
import SoundContext from '../../../context/sound/SoundContext'
import UserContext from '../../../context/user/UserContext'
/*router*/
import {useHistory} from 'react-router-dom'
const Form = () => {
  //user context
  const usercontext = useContext(UserContext);
  const {user, LogoutUser} = usercontext;
  //sound context
 const soundContext = useContext(SoundContext);
 const {SearchSound, SpinnerAdd,ClearSound } = soundContext;

 const history = useHistory();
  //state
  const [inputSearch, setInputSearch] = useState();

const HandlerSubmit=(e)=>{
  e.preventDefault();
  SearchSound(inputSearch,false);
  SpinnerAdd(!false)
}
/*cerrar sesion*/
const LogoutSession =()=>{
  LogoutUser();
  ClearSound();
  history.push('/signin')
}

return (
    <Container>
      <Divform onSubmit={HandlerSubmit}>
        <Input 
        type="type"
        name="search"
        placeholder="Buscar"
        onChange={(e)=>setInputSearch(e.target.value)}
        />
        <Imgsearch src={search}  alt="search"/>
      </Divform>
      <Divusers>
        <Imguser src={Avatar} alt="user" />
       {
         user? <User>{user.name}</User> : null
       }
        
        <Logout>
          <FontAwesomeIcon 
            icon={faSignOutAlt}
            size="2x"
            onClick={LogoutSession}
          />
        </Logout>
      </Divusers>
    </Container>
  );
};

export default Form;
