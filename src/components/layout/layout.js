import React from "react";
/*styled componentes*/
import { GlobalLayout, Container } from "../../styled/layout";
import LogoFloat from "../float/floatlogo";

const Layout = ({ children }) => {
  return (
    <>
      <GlobalLayout />
      <LogoFloat />
      <Container>{children}</Container>
    </>
  );
};

export default Layout;
