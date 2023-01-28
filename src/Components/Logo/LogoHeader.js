import styled from "styled-components";
import image from "../../assets/Logo.png";

export default function LogoHeader(){
    return (
        <Img>
            <img src={image}/>
        </Img>
    );
}

const Img=styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    img{
        height: auto;
        width: 60px;
    }
`;