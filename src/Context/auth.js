import React, { createContext, useState } from 'react';

export const AuthContext = createContext({})

export default function AuthProvider({children}){
    const [userInfo, setUserInfo] = useState({})
    const [category, setCategory] = useState("Tecnologia")
    const [cartItems, setCartItems] = useState([])
    const [bookId, setBookId] = useState("")


    
    return (
        <AuthContext.Provider value={{userInfo, setUserInfo, category, setCategory,cartItems, setCartItems,bookId, setBookId}}>

            {children}
        </AuthContext.Provider>
    )
}