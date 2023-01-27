import styled from "styled-components";
import image from "../assets/Logo.png";

export default function Logo(){
    return (
        <Img>
            <img src={image}/>
        </Img>
    );
}

const Img=styled.div`
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    img{
        height: auto;
        width: 300px;
    }
`;