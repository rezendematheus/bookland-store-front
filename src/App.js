import Homepage from "./Pages/Homepage/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />}/>
        <Route path="/checkout" element={<CheckoutPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
