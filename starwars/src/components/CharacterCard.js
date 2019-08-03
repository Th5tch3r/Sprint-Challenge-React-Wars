import React from "react";
import styled from "styled-components";

const WrapperDiv = styled.div`
    text-align: center;
    width: 60%;
    margin-top: 60px;
    margin-bottom: 30px;
    margin-left: 18%;
    border: 2px solid black;
    border-radius: 10px;
    color: white;
    background: #000000;
    box-shadow: 0 0 10px #9ecaed, 0 0 15px #0000FF;
`;

const WrapperH3 = styled.h3`
    text-align: center;
    text-shadow: 0 0 5px #ff1a8c, 0 0 8px #0000FF;  
`;

const WrappedUl = styled.ul`
    text-align: center;
    margin-left: -12%;

    ${props => (props.type === 'height' ? `text-shadow: 0 0 10px #99ff66, 0 0 8px #33cccc;` : null)}
    ${props => (props.type === 'gender' ? `text-shadow: 0 0 10px #b380ff, 0 0 8px #5c00e6` : null)}
`;

export default function CharacterCard({name, height, gender}) {
    return (
        <WrapperDiv>
            <WrapperH3> {name} </WrapperH3>
            <WrappedUl type='height'>Height: {height}</WrappedUl> 
            <WrappedUl type ='gender'>Gender: {gender}</WrappedUl>
        </WrapperDiv>
    )
}