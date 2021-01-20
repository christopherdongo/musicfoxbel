import React from 'react';
import logo from '../../assets/foxbel-music@3x.png'
import styled from 'styled-components'

const Divimg = styled.div`
  width:100%;
  height:120px;
`
const Img = styled.img`
  width:100%;
  max-width:250px;
  height:59px;
  margin-top:50px;
  margin-left:40px;
  margin-right:40px;
`
const Logo =()=>{
    return(
        <Divimg>
         <Img src={logo} alt="logo"/>
        </Divimg>
    )
}

export default Logo