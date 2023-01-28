import LogoHeader from "../Logo/LogoHeader";
import Sidebar from "./Sidebar/Sidebar";
import { Wrapper, Left, Margin, Middle, Right } from "./HeaderStyle";
import { Link } from "react-router-dom";

export default function Header(){
    function callSidebar(){
        return <Sidebar/>;
    }    

    return (
        <Wrapper>
            <Left>
                <ion-icon name="menu-outline"></ion-icon>
                <Margin/>
                <Link to="mybooks" style={{color: '#ffffff'}}><ion-icon name="library-outline"></ion-icon></Link>
            </Left>
            <Middle>
                <Link to="/"><LogoHeader/></Link>
            </Middle>
            <Right>
                <Link to="/login" style={{color: '#ffffff'}}><ion-icon name="person-circle-outline"></ion-icon></Link>
                <Margin/>
                <Link to="/cart" style={{color: '#ffffff'}}><ion-icon name="bag-handle-outline"></ion-icon></Link>
            </Right>
        </Wrapper>
    );
}
