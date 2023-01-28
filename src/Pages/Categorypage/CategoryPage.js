import axios from "axios";
import { useContext, useEffect, useState } from "react";
import Book from "../../Components/Book/Book";
import Header from "../../Components/Header/Header";
import { AuthContext } from "../../Context/auth";
import { ScreenContainer, Title,BookContainer, Margin } from "./CategoryPageStyle";

export default function CategoryPage(){
    const [booklist, setBooklist] = useState(undefined)
    const {userInfo,category, cartItems, setCartItems, setBookId} = useContext(AuthContext)

    useEffect(()=>{
        axios.get(`${process.env.REACT_APP_API_BASE_URL}/${category}`)
        .then((res)=>{
            const list = res.data
            list.sort(() => Math.random()-0.5)
            setBooklist(list)
        })
        .catch((err)=> console.log(err.response.data))
    },[])


    return (
        <ScreenContainer>
            <Header/>
            <Margin/>
            <Title>
                <p>{category}</p>
            </Title>
            <BookContainer>
            {category !== "" && booklist !== undefined &&
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
            </BookContainer>
        </ScreenContainer>
    )
}