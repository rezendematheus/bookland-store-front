import axios from "axios"
import { useNavigate } from "react-router-dom";
import { Container, Upside, Middleside, Lowside } from "./BookStyles"

export default function Book({id,titulo,valor,img,cartItems,setCartItems,userInfo,setBookId}){
    const navigate = useNavigate();
    const config = {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      };

    function addToCart(id){
        if(!userInfo.token){
            setCartItems([...cartItems, id])
            localStorage.setItem("cartItem", [...cartItems, id])
        } else{
            const info = {itemId: id}
            axios.post(`${process.env.REACT_APP_API_BASE_URL}/into-cart`,info, config)
            .then((res)=> console.log(res))
            .catch((err)=> console.log(err.response.data) )
        }
       
    }

    function toBookPage(id){
        setBookId(id)
        navigate("/book")
    }

    

    return(
        <Container onClick={()=> toBookPage(id)}>
            <Upside>
                <img src={img} alt="livro"/>
            </Upside>
            <Middleside>
                <p>{titulo}</p>
            </Middleside>
            <Lowside>
                <p>R${valor}</p>
                <button onClick={(event)=> {
                    event.stopPropagation()
                    addToCart(id)}}>comprar</button>
            </Lowside>
        
        </Container>
    )
}