import { useEffect, useState } from "react";
import Book from "../Book/Book";
import { Container, Title, BookBox, Wrapper } from "./CategoryLineStyles";
import axios from "axios";

export default function CategoryLine({cartItems, setCartItems,titulo, userInfo,setBookId}) {
  const [products, setProducts] = useState(undefined);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_BASE_URL}`)
      .then((res) => {
        const list = res.data
        list.sort(() => Math.random()-0.5)
        setProducts(list);
      })
      .catch((err) => console.log(err.response));
  }, []);



  return (
    <Wrapper>
    <Container>
      <Title>{titulo}</Title>
      <BookBox>
        {products !== undefined &&
          products.map((item) => (
            <Book
              key={item._id}
              id={item.id}
              titulo={item.titulo}
              valor={item.valor}
              img={item.img}
              cartItems={cartItems}
              setCartItems={setCartItems}
              userInfo={userInfo}
              setBookId={setBookId}
            />
        ))}
      </BookBox>
    </Container>
    </Wrapper>
  );
}
