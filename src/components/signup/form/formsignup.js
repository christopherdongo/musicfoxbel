import React, {useContext, useState} from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import UserContext from '../../../context/user/UserContext'; 
import {
  Section,
  Formulario,
  Formcontrol,
  Title,
  Input,
  Containerlink,
  Enlace,
  Submit,
  Li
} from "../../../styled/formregister";
import {Messageerror, Error} from '../../../styled/form'
const FormSignup = () => {

    /*context*/
    const usercontext = useContext(UserContext);
    const {UserRegister, message, errorCode} = usercontext;

    const [error, setError] = useState(false)

    /*password*/
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      repeatpassword: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("el nombre es obligatorio"),
      email: Yup.string()
        .email("El correo no es valido")
        .required("el correo es obligatorio"),
      password: Yup.string().required("el password es ogligatorio"),
      repeatpassword: Yup.string().required('repita el password'),
    }),
    onSubmit: (values, actions) =>{
        const data = {
            name:values.name,
            email:values.email,
            password:values.password
        }
        if(values.password !== values.repeatpassword){
           setError(true)
            setTimeout( ()=>{
              setError(false)
            }, 2000)
        }else{
        UserRegister(data);
        if(errorCode === 201){
          actions.resetForm();
        }
        setError(false)

      }
    },
  
  });


 

  return (

    <>
    <Section>
      <Title>Registrarse</Title>
      <Formulario onSubmit={formik.handleSubmit}>
        <Formcontrol>
          <Input
            id="name"
            type="text"
            placeholder="Nombre"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            color={formik.touched.name && formik.errors.name}
          />
          {
            formik.touched.name && formik.errors.name ? <Error>{formik.errors.name}</Error> : null
                      }
        </Formcontrol>
        <Formcontrol>
          <Input
            id="email"
            type="email"
            placeholder="Correo"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            color={formik.touched.email && formik.errors.email}
          />
          {
            formik.touched.email && formik.errors.email? <Error>{formik.errors.email}</Error> : null
          }
        </Formcontrol>
        <Formcontrol>
          <Input
            id="password"
            type="password"
            placeholder="Contraseña"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            color={formik.touched.password && formik.errors.password}
          />
          {
            formik.touched.password && formik.errors.password? <Error>{formik.errors.password}</Error> : null
          }
        </Formcontrol>
        <Formcontrol>
          <Input
            id="repeatpassword"
            type="password"
            placeholder="Repita la Contraseña"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.repeatpassword}
            color={formik.touched.repeatpassword && formik.errors.repeatpassword}
          />
        </Formcontrol>
        <Submit type="submit" value="Registrar" />
        {
          message? <Messageerror code={errorCode}>{message}</Messageerror> : null
        }
        {
           error? <Error>La contraseñas no son iguales</Error> : null
        }
       <Containerlink>
         <Li>
        <Enlace 
        to="signin"
        pading={formik.touched.repeatpassword && formik.errors.repeatpassword }
        >Iniciar sesion</Enlace>
        </Li>
        </Containerlink>
      </Formulario>
    
    </Section>

    </>
  );
};

export default FormSignup;
