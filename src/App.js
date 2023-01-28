import Homepage from "./Pages/Homepage/Homepage";
import { CartPage } from "./Pages/CartPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CategoryPage from "./Pages/Categorypage/CategoryPage";
import AuthProvider from "./Context/auth";
import LoginPage from "./Pages/LoginPage/LoginPage";
import CadastroPage from "./Pages/CadastroPage/CadastroPage";
import Bookpage from "./Pages/Bookpage/Bookpage";

function App() {
  return (
    <AuthProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />}/>
        <Route path="/category" element={<CategoryPage/>}/>
        <Route path="/cart" element={<CartPage/>} /> 
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/cadastro" element={<CadastroPage/>}/>
        <Route path="/book" element={<Bookpage/>}/>
      </Routes>
    </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
