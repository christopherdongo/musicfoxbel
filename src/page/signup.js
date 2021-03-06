import React from "react";
/*layout*/
import Layout from "../components/layout/layout";
/*component*/
import CoverTemplate from "../components/covertemplate/cover";
import FormSignup from "../components/signup/form/formsignup";

const Signup = () => {
  return (
    <Layout>
        <CoverTemplate />
      <FormSignup />
    </Layout>
  );
};

export default Signup;
