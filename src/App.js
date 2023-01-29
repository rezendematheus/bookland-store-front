import Homepage from "./Pages/Homepage/Homepage";
import { CartPage } from "./Pages/CartPage/CartPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CategoryPage from "./Pages/Categorypage/CategoryPage";
import AuthProvider from "./Context/auth";
import LoginPage from "./Pages/LoginPage/LoginPage";
import CadastroPage from "./Pages/CadastroPage/CadastroPage";
import Bookpage from "./Pages/Bookpage/Bookpage";
import MyBooksPage from "./Pages/MyBooksPage";
import CheckoutPage from "./Pages/CheckoutPage/CheckoutPage";

function App() {
  return (
    <AuthProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />}/>
        <Route path="/category" element={<CategoryPage/>}/>
        <Route path="/cart" element={<CartPage/>} /> 
        <Route path="/checkout" element={<CheckoutPage/>} />
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/cadastro" element={<CadastroPage/>}/>
        <Route path="/book" element={<Bookpage/>}/>
        <Route path="/mybooks" element={<MyBooksPage/>}/>
      </Routes>
    </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
