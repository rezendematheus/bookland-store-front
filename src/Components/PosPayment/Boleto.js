import styled from "styled-components";
import image from "../../assets/cobBarras.png";

export default function Boleto(){
    return(
        <Wrapper>
            <Title>Seu Boleto</Title>
            <img src={image}/>
            81770000000 0   01093659970 2   41131079703 9   00143370831 8
        </Wrapper>
    );
}

const Wrapper=styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Title=styled.div`
    font-family: Roboto;
    font-size: 24px;
    font-weight: 400;
    line-height: 28px;
    letter-spacing: 0.08em;
    margin-bottom: 20px;
`;