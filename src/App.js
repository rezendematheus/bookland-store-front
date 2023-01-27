import Homepage from "./Pages/Homepage/Homepage";
import { CartPage } from "./Pages/CartPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CategoryPage from "./Pages/Categorypage/CategoryPage";
import AuthProvider from "./Context/auth";
import LoginPage from "./Pages/LoginPage/LoginPage";

function App() {
  return (
    <AuthProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />}/>
        <Route path="/category" element={<CategoryPage/>}/>
        <Route path="/cart" element={<CartPage/>} /> 
        <Route path="/login" element={<LoginPage/>}/>
      </Routes>
    </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
