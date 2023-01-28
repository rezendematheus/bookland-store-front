import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/auth";
import { ScreenContainer, InfoContainer, ImgBox, Title,Line, Description, Author, Button} from "./BookpageStyle";

export default function Bookpage() {
    const {bookId} = useContext(AuthContext)
    const [bookInfo, setBookInfo] = useState({})

    useEffect(()=>{
        axios.get(`http://127.0.0.1:5000/book/${bookId}`)
        .then((res)=> setBookInfo(res.data))
        .catch((err) => console.log(err.message));
    },[])

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
        <button>Comprar</button>
        </Button>
        


    </InfoContainer>
    </ScreenContainer>
  );
}
