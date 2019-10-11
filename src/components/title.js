import React from "react";
import styled from 'styled-components'

export default function Title(props){
    const Styled = styled.h1`
        font-size: 2.4rem;
        font-weight: bold;
        margin-top: 10px;
        color: moccasin;
    `;
    return (<Styled>{props.title}</Styled>);
}