import React, { useState } from "react";
import CartContext from "./CartContext";

const Cart = ({ children }) => {
  const [Show, setShow] = useState(false);
  const [navBar, setnavBar] = useState(false);
  const [palceorder, setpalceorder] = useState(true);
  const [confirm, setconfirm] = useState(false);
  const [CartItem, setCartItem] = useState([]);
  const [womencart, setwomencart] = useState([]);
  const [mencart, setmencart] = useState([]);
  const [kidcart, setkidcart] = useState([]);
  const [Prize, setPrize] = useState(0);
  const [Login, setLogin] = useState(true);
  const [user, setUser] = useState({
    name: "",
  });
  return (
    <div>
      <CartContext.Provider
        value={{
          Show,
          setShow,
          CartItem,
          setCartItem,
          Prize,
          setPrize,
          user,
          setUser,
          Login,
          setLogin,
          kidcart,
          setkidcart,
          setwomencart,
          setmencart,
          womencart,
          mencart,
          navBar,
          setnavBar,
          palceorder,
          setpalceorder,
          confirm,
          setconfirm,
        }}
      >
        {children}
      </CartContext.Provider>
    </div>
  );
};

export default Cart;
