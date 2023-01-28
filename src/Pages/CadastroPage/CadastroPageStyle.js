import styled from "styled-components";


export const Wrapper=styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #AC7BD2;
    height: 100vh;
    width: 100vw;
    button{
        color: white;
        background-color: #6F4292;
        width: 343px;
        height: 46px;
        border-radius: 10px;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 23px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

export const Input=styled.input`
    width: 326px;
    height: 46px;
    background: #ffffff;
    border-radius: 10px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    color: #756161;
    margin-bottom: 15px;
    padding-left: 10px;
`;

export const Logar=styled.div`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;
    color: #FFFFFF;
    margin-top: 50px;
`;
