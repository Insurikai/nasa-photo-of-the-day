import React from "react";
import styled from 'styled-components'

export default function Explanation(props){
    const Styled = styled.p`
        font-size: 1.3rem;
        text-align: left;
    `;
    return ( <Styled>{props.explanation}</Styled> )
}