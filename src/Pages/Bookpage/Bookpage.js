import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/auth";
import { ScreenContainer, InfoContainer, ImgBox, Title,Line, Description, Author, Button} from "./BookpageStyle";

export default function Bookpage() {
    const {bookId, userInfo, cartItems, setCartItems} = useContext(AuthContext)
    const [bookInfo, setBookInfo] = useState({})

    const config = {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    };


    useEffect(()=>{
        axios.get(`${process.env.REACT_APP_API_BASE_URL}/book/${bookId}`)
        .then((res)=> setBookInfo(res.data))
        .catch((err) => console.log(err.message));
    },[])


    
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

  return (
    <ScreenContainer>
      <ImgBox>
        <img src={bookInfo.img} />
      </ImgBox>
      <InfoContainer>
        <Title>
            <p>{bookInfo.titulo} </p>
        </Title>
        <Author>
            <p>Por: {bookInfo.autor} </p>
        </Author>
        <Line></Line>
    
        <Description>
            <p>{bookInfo.descricao} </p>
        </Description>
        <Line></Line>

        <Title>
            <p>R$ {bookInfo.valor} </p>
        </Title>
        <Line></Line>

        <Button>
        <button onClick={()=> addToCart(bookId)}>Comprar</button>
        </Button>
        


    </InfoContainer>
    </ScreenContainer>
  );
}
