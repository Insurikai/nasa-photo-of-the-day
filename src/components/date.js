import React from "react";
import styled from 'styled-components'

export default function Date(props){
    const Styled = styled.p`
        font-size: 1.2rem;
        margin: 5px 0;
    `;
    return ( <Styled>{props.date}</Styled> )
}