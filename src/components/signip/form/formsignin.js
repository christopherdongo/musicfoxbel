import React, { useContext, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useHistory } from "react-router-dom";
import { Error } from "../../../styled/form";
/*componentes*/
import {
  Section,
  Formulario,
  Formcontrol,
  Title,
  Submit,
  Input,
  Containerlink,
  Enlace,
  Li,
} from "../../../styled/formregister";
import {Messageerror} from '../../../styled/form'
/*context*/
import UserContext from "../../../context/user/UserContext";


const FormSignin = () => {
  /*context*/
  const userContext = useContext(UserContext);
  const { FunctionLogin, user, authenticate,message, errorCode} = userContext;

  //histori
  const history = useHistory();

  //state de formik
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("El email no es valido")
        .required("el email es obligatorio"),
      password: Yup.string().required("el password es oblgigatorio"),
    }),
    onSubmit: (valores) => {
      FunctionLogin(valores);
      
    },
  });

  //useEfect
  useEffect(() => {
    if (authenticate) {
      history.push("/");
    }
  }, [authenticate, user, history]);

  //funcion clear

  return (
    <Section>
      <Title>Iniciar Sessión</Title>
      <Formulario onSubmit={formik.handleSubmit}>
        <Formcontrol>
          <Input
            id="email"
            type="email"
            placeholder="Correo"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            color={formik.touched.email && formik.errors.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <Error>{formik.errors.email}</Error>
          ) : null}
        </Formcontrol>
        <Formcontrol>
          <Input
            id="password"
            type="password"
            placeholder="Contraseña"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            color={formik.touched.password && formik.errors.password}
          />
          {formik.touched.password && formik.errors.password ? (
            <Error>{formik.errors.password}</Error>
          ) : null}
        </Formcontrol>

        <Submit type="submit" value="Iniciar Sesion" />
        {
          message? <Messageerror code={errorCode}>{message}</Messageerror> : null
        }
        <Containerlink>
          <Li>
            <Enlace to="/signup">Registrarse</Enlace>
          </Li>
          <Li>
            <Enlace to="/recovery" disabled>
              recuperar contraseña
            </Enlace>
          </Li>
        </Containerlink>
      </Formulario>
  
    </Section>
  );
};

export default FormSignin;
