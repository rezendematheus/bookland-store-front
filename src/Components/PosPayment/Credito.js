import styled from "styled-components";

export default function Credito(){
    return(
        <Wrapper>
            <Title>Compra finalizada</Title>
            <p>Obrigada por comprar conosco.</p>
            <p>Para mais informações consulte seu banco.</p>
        </Wrapper>
    )
}

const Wrapper=styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    p{
        margin-top: 5px;
        font-size: 20px;
        font-weight: 400;
        line-height: 28px;
        font-family: Roboto;
    }
`;

const Title=styled.div`
    font-family: Roboto;
    font-size: 24px;
    font-weight: 400;
    line-height: 28px;
    letter-spacing: 0.08em;
    margin-bottom: 20px;
`;