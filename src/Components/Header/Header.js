import styled from "styled-components"
import LogoHeader from "../Logo/LogoHeader";
import Sidebar from "./Sidebar/Sidebar";

export default function Header(){
    function callSidebar(){
        return <Sidebar/>;
    }    

    return (
        <Wrapper>
            <Left>
                <ion-icon name="menu-outline"></ion-icon>
                <Margin/>
                <ion-icon name="library-outline"></ion-icon>
            </Left>
            <Middle>
                <LogoHeader/>
            </Middle>
            <Right>
                <ion-icon name="person-circle-outline"></ion-icon>
                <Margin/>
                <ion-icon name="bag-handle-outline"></ion-icon>
            </Right>
        </Wrapper>
    );
}

const Wrapper= styled.div`
    width: 100vw;
    color: white;
    height: 90px;
    background-color: #AC7BD2;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 10px;
`;

const Left= styled.div`
    font-size: 30px;
    padding: 20px;
    display: flex;
`;

const Margin= styled.div`
    margin-left: 10px;
`;

const Middle=styled.div``;

const Right= styled.div`
    font-size: 30px;
    padding: 20px;
    display: flex;
`;