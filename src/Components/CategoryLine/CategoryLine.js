import { useEffect, useState } from "react";
import Book from "../Book/Book";
import { Container, Title, BookBox } from "./CategoryLineStyles";
import axios from "axios";

export default function CategoryLine({titulo}) {
  const [products, setProducts] = useState(undefined);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:5000")
      .then((res) => {
        const list = res.data
        list.sort(() => Math.random()-0.5)
        setProducts(list);
      })
      .catch((err) => console.log(err.response.data));
  }, []);



  return (
    <>
    <Container>
      <Title>{titulo}</Title>
      <BookBox>
        {products !== undefined &&
          products.map((item) => (
            <Book
              key={item._id}
              id={item._id}
              titulo={item.titulo}
              valor={item.valor}
              img={item.img}
            />
        ))}
      </BookBox>
    </Container>
    </>
  );
}
