import Homepage from "./Pages/Homepage/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CategoryPage from "./Pages/Categorypage/CategoryPage";
import AuthProvider from "./Context/auth";

function App() {
  return (
    <AuthProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />}/>
        <Route path="/category" element={<CategoryPage/>}/>
        {/* <Route path="/checkout" element={<CheckoutPage/>} /> */}
      </Routes>
    </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
