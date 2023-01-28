import styled from "styled-components";
import Header from "../Components/Header/Header";

export default function MyBooksPage(){
    return (
        <Wrapper>
            <Header/>
            <EmBreve>
                Em breve você poderá ver seus livros aqui!
            </EmBreve>
        </Wrapper>
    )
}

const Wrapper = styled.div``;

const EmBreve=styled.div`
    margin-top: 50px;
    display: flex;
    justify-content: center;
    font-family: 'Roboto';
    font-size: 20px;
`;