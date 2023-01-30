import styled from "styled-components";
import image from "../../assets/QRcode.png";

export default function Pix(){
    return(
        <Wrapper>
            <Title>Escaneie o QRCode ou copie a chave aleatória <br/>para concluir o pagamento via PIX</Title>
            <img src={image}/>
            41226f99-2f4f-486d-b515-b0be7308cad
        </Wrapper>
    )
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
    display: flex;
    flex-direction: column;
    align-items: center;
`;