import { useContext } from "react"
import CategoryLine from "../../Components/CategoryLine/CategoryLine"
import { AuthContext } from "../../Context/auth"
import { ScreenContainer } from "./HomepageStyle"

export default function Homepage(){
    const {userInfo, cartItems, setCartItems, setBookId}=useContext(AuthContext)
    return (
        <ScreenContainer>
            <CategoryLine 
            cartItems={cartItems}
            setCartItems={setCartItems}
            titulo={"Adicionados recentemente"}
            userInfo={userInfo}
            setBookId={setBookId}
            />
            <CategoryLine 
            cartItems={cartItems}
            setCartItems={setCartItems}
            titulo={"Os mais vendidos"}
            userInfo={userInfo}
            setBookId={setBookId}
            />
            <CategoryLine 
            cartItems={cartItems}
            setCartItems={setCartItems}
            titulo={"Livros para ler em 2023"}
            userInfo={userInfo}
            setBookId={setBookId}
            />
            <CategoryLine 
            cartItems={cartItems}
            setCartItems={setCartItems}
            titulo={"Descubra Novas Histórias"}
            userInfo={userInfo}
            setBookId={setBookId}
            />

        </ScreenContainer>
    )
}