import LogoHeader from "../Logo/LogoHeader";
import Sidebar from "./Sidebar/Sidebar";
import { Wrapper, Left, Margin, Middle, Right, Menu } from "./HeaderStyle";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Header(){
    const [show,setShow]=useState(false); 
    
    return (
        <Wrapper>
            <Left>
                <Menu onClick={()=>setShow(!show)}><ion-icon name="menu-outline"></ion-icon></Menu>
                <Sidebar show={show}/>
                <Margin/>
                <Link to="/mybooks" style={{color: '#ffffff'}}><ion-icon name="library-outline"></ion-icon></Link>
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

