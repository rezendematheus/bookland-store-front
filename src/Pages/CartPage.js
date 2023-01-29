import axios from "axios"
import { useContext, useEffect, useState } from "react"
import ButtomComponent from "../Components/Cart/ButtomComponent.js"
import { Container, TitleCompontent } from "../Components/Cart/CartStyles.js"
import CartTableComponent from "../Components/Cart/CartTable/CartTable"
import Header from "../Components/Header/Header.js"
import { AuthContext } from "../Context/auth.js"

export function CartPage() {
    const {userInfo} = useContext(AuthContext)
    //const cartItem = localStorage.getItem("cartItem")
    const token = JSON.parse(localStorage.getItem("user"))
    const [books, setBooks] = useState([])
    console.log(token.token)
    

    const config = {
        headers: { Authorization: `Bearer ${userInfo.token}` },
    };
    
    useEffect(()=>{
        axios.get(`${process.env.REACT_APP_API_BASE_URL}/get-cart`,config)
        .then((res)=> setBooks(res.data))
        .catch((err)=> console.log(err))

    },[])

    console.log(books)
   

    return (
        <Container>
            <Header/>
            <TitleCompontent>Sua sacola</TitleCompontent>
            <CartTableComponent books={books} />
            <ButtomComponent>
                Prosseguir
            </ButtomComponent>
        </Container>
    )
}








