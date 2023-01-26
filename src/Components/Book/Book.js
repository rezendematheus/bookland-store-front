import axios from "axios"
import { Container, Upside, Middleside, Lowside } from "./BookStyles"

export default function Book({id,titulo,valor,img,cartItems,setCartItems,userInfo}){

    const config = {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      };

    function addToCart(id){
        if(!userInfo.token){
            setCartItems([...cartItems, id])
            localStorage.setItem("cartItem", [...cartItems, id])
        } else{
            const info = {itemId: id}
            axios.post("http://127.0.0.1:5000/into-cart",info, config)
            .then((res)=> console.log(res))
            .catch((err)=> console.log(err.response.data) )
        }
       
    }

    console.log(cartItems)

    return(
        <Container>
            <Upside>
                <img src={img} alt="livro"/>
            </Upside>
            <Middleside>
                <p>{titulo}</p>
            </Middleside>
            <Lowside>
                <p>R${valor}</p>
                <button onClick={()=> addToCart(id)}>comprar</button>
            </Lowside>
        
        </Container>
    )
}