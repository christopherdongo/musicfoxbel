import React, {useState, useContext} from "react";
import {
  Container,
  Divform,
  Input,
  Divusers,
  User,
  Imguser,
  Imgsearch
} from "../../../styled/form";
import user from "../../../assets/user.svg";
import search from '../../../assets/search.svg'

/*context*/
import SoundContext from '../../../context/SoundContext'

const Form = () => {
 //use context
 const soundContext = useContext(SoundContext);
 const {SearchSound, SpinnerAdd} = soundContext;
  //state
  const [inputSearch, setInputSearch] = useState();

const HandlerSubmit=(e)=>{
  e.preventDefault();
  SearchSound(inputSearch,false);
  SpinnerAdd(!false)
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
        <Imguser src={user} alt="user" />
        <User>Fransico M.</User>
      </Divusers>
    </Container>
  );
};

export default Form;
