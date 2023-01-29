import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Book from "../../Components/Book/Book";
import Header from "../../Components/Header/Header";
import { AuthContext } from "../../Context/auth";
import {
  ScreenContainer,
  Title,
  BookContainer,
  Margin,
  Message
} from "./CategoryPageStyle";

export default function CategoryPage() {
  const [booklist, setBooklist] = useState(undefined);
  const { userInfo, cartItems, setCartItems, setBookId } =
    useContext(AuthContext);
  const [categoryFound, setCategoryFound] = useState(false);
  let { state } = useLocation();

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_BASE_URL}/${state.categoria}`)
      .then((res) => {
        const list = res.data;
        list.sort(() => Math.random() - 0.5);
        setBooklist(list);

        if (list.length !== 0) {
          setCategoryFound(true);
        } else {
          setCategoryFound(false);
        }
      })
      .catch((err) => console.log(err.response.data));
  }, [state]);

  return (
    <ScreenContainer>
      <Header />
      <Margin />
      <Title>
        <p>{state.categoria}</p>
      </Title>
      <BookContainer>
        {categoryFound === true &&
          booklist !== undefined &&
          booklist.map((item) => (
            <Book
              key={item._id}
              id={item._id}
              titulo={item.titulo}
              valor={item.valor}
              img={item.img}
              cartItems={cartItems}
              setCartItems={setCartItems}
              userInfo={userInfo}
              setBookId={setBookId}
            />
          ))}

        {categoryFound === false && <Message>Livros indisponiveis no momento.</Message>}
      </BookContainer>
    </ScreenContainer>
  );
}
