import {  Title, Margin, Names } from "./SidebarStyle";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Sidebar(props){
    const {show}=props;

    return (
        <Wrapper show={show}>
            <Title>Categorias</Title>
            <Margin/>
            <Names>
                <Link to={"/category"} state={{categoria: "Aventura"}}>
                <p>Aventura</p>
                </Link>

                <Link to={"/category"} state={{categoria: "Fantasia"}}>
                <p>Fantasia</p>
                </Link>

                <Link to={"/category"} state={{categoria: "Negocios"}}>
                <p>Negocios</p>
                </Link>

                <Link to={"/category"} state={{categoria: "Terror"}}>
                <p>Terror</p>
                </Link>

                <Link to={"/category"} state={{categoria: "Tecnologia"}}>
                <p>Tecnologia</p>
                </Link>

                <Link to={"/category"} state={{categoria: "Poesia"}}>
                <p>Poesia</p>
                </Link>

                <Link to={"/category"} state={{categoria: "Romance"}}>
                <p>Romance</p>
                </Link>

            </Names>
        </Wrapper>
    );
}

const Wrapper=styled.div`
    visibility: ${(props)=> props.show? "visible": "hidden"};
    position: absolute;
    width: auto;
    height: auto;
    left: 42px;
    top: 45px;
    color: #000000;
    background: #FFFFFF;
    border: 1px solid #000000;
    border-radius: 0px 10px 10px 10px;
    z-index: 1;
    padding: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: 8px 8px 4px rgba(0, 0, 0, 0.5);
    a{
        text-decoration:none;
    }
`;

