import React from 'react';
/*layout*/
import Layout from '../components/layout/layout'
/*component*/
import CoverTemplate from '../components/covertemplate/cover' 
import FormSignin from '../components/signip/form/formsignin'
import { toast } from "react-toastify";

const Signin =()=>{
    
    return(
        <Layout>
            <CoverTemplate />
            <FormSignin />
        </Layout>
    )
}

export default Signin;