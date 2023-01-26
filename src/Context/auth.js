import React, { createContext, useState } from 'react';

export const AuthContext = createContext({})

export default function AuthProvider({children}){
    const [userInfo, setUserInfo] = useState({})
    const [category, setCategory] = useState("")
    const [cartItems, setCartItems] = useState([])


    
    return (
        <AuthContext.Provider value={{userInfo, setUserInfo, category, setCategory,cartItems, setCartItems}}>

            {children}
        </AuthContext.Provider>
    )
}