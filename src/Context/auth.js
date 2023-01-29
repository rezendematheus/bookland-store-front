import React, { createContext, useState } from "react";

export const AuthContext = createContext({});

export default function AuthProvider({ children }) {
  const [userInfo, setUserInfo] = useState({});
  const [cartItems, setCartItems] = useState([]);
  const [bookId, setBookId] = useState("");

  return (
    <AuthContext.Provider
      value={{
        userInfo,
        setUserInfo,
        cartItems,
        setCartItems,
        bookId,
        setBookId,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
