import React from 'react';
import styled from 'styled-components'
import './spinner.css'


const DivSpinner=styled.section`
 display:grid;
 place-content:center;
 place-items:center;
 height:200px;
`

const Spinner =()=>{

    return(
        
        <DivSpinner>
            <div className="loader">Loading...</div>
        </DivSpinner>
    )
}

export default Spinner;