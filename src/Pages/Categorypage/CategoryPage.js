import axios from "axios";
import { useContext, useEffect, useState } from "react";
import Book from "../../Components/Book/Book";
import { AuthContext } from "../../Context/auth";
import { ScreenContainer, Title,BookContainer } from "./CategoryPageStyle";

export default function CategoryPage(){
    const [booklist, setBooklist] = useState(undefined)
    const {userInfo,category, cartItems, setCartItems} = useContext(AuthContext)

    useEffect(()=>{
        axios.get(`http://127.0.0.1:5000/${category}`)
        .then((res)=>{
            const list = res.data
            list.sort(() => Math.random()-0.5)
            setBooklist(list)
        })
        .catch((err)=> console.log(err.response.data))
    },[])


    return (
        <ScreenContainer>
            <Title>
                <p>Aventura</p>
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
            />
        ))}
            </BookContainer>
        </ScreenContainer>
    )
}