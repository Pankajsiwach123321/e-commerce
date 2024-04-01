import "./App.css";
import Cart from "./context/Cart";
import NavBar from "./components/NavBar";
import Store from "./components/Store";
import CartLayer from "./components/CartLayer";
import Kids from "./components/Kids";
import LoginUser from "./components/LoginUser";
import { Route, Routes } from "react-router-dom";
import Women from "./components/Women";
import { ContactUs } from "./components/Mail";

function App() {
  return (
    <Cart>
      <NavBar />
      <CartLayer />
      <Routes>
        <Route path="/" element={<Store />} />
        <Route path="/kids" element={<Kids />} />
        <Route path="/women" element={<Women />} />
      </Routes>
      <LoginUser />
      <ContactUs/>
    </Cart>
  );
}

export default App;
