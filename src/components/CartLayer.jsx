import React, { useContext, useState } from "react";
import CartContext from "../context/CartContext";

const CartLayer = () => {
  const {
    Show,
    setShow,
    CartItem,
    setCartItem,
    Prize,
    setPrize,
    mencart,
    womencart,
    setwomencart,
    setmencart,
    kidcart,
    setkidcart,
    setconfirm,
  } = useContext(CartContext);

  function increaseQt(e, i) {
    const updatedCartItem = CartItem.map((item, index) =>
      index === i ? { ...item, qt: item.qt + 1 } : item
    );
    setCartItem(updatedCartItem);
    setPrize(Prize + e.prize);
  }
  function decrement(e, i) {
    if (CartItem[i].qt > 1) {
      const updatedCartItem = CartItem.map((item, index) =>
        index === i ? { ...item, qt: item.qt - 1 } : item
      );
      setCartItem(updatedCartItem);
      setPrize(Prize - e.prize);
    }
  }
  function removecart(e, i) {
    const updatedCartItem = CartItem.filter((item, index) => index !== i);
    const updatedMencart = mencart.filter((item) => item.id !== e.id);
    const updatedWomencart = womencart.filter((item) => item.id !== e.id);
    const updatedKidcart = kidcart.filter((item) => item.id !== e.id);
    setCartItem(updatedCartItem);
    setmencart(updatedMencart);
    setwomencart(updatedWomencart);
    setkidcart(updatedKidcart);
    setPrize(Prize - e.prize * e.qt);
  }

  return (
    <div
      className={`${
        Show ? "right-0" : "right-[-100%]"
      } fixed z-40 bg-orange-500 duration-300 w-full overflow-y-scroll overflow-hidden h-full  top-0  `}
    >
      <button
        onClick={() => setShow(false)}
        className=" ms-auto flex bg-white hover:bg-transparent  px-4 py-1 text-orange-500 m-2 hover:text-white  border-white   border duration-300 rounded-2xl text-xl font-medium font-mono"
      >
        <span className=" block relative z-[1]">Close</span>
      </button>
      {CartItem.map((e, i) => (
        <div key={i} className="px-3 pb-[55px] mt-4 ">
          <div className="h-full flex flex-col sm:flex-row  border rounded-2xl">
            <img
              src={e.img}
              alt="shoes"
              // width={200}
              height={200}
              className=" rounded-2xl h-[200px] sm:w-[300px]"
            />
            <div className="p-5 flex-grow flex flex-col justify-between">
              <div className="block">
                <div className=" flex flex-wrap gap-4 justify-between">
                  <p className=" flex items-center gap-2">
                    <span className=" text-white">Prize</span>
                    <span className=" font-mono text-2xl">{e.prize}</span>
                  </p>
                  <div className="font-mono text-2xl flex items-center gap-4">
                    {"qt "}
                    <button
                      onClick={() => decrement(e, i)}
                      className="px-3 py-1 bg-white rounded-2xl border-2 border-orange-500 outline-2 outline-white"
                    >
                      -
                    </button>
                    {e.qt}
                    <button
                      className="px-3 py-1 bg-white rounded-2xl border-2 border-orange-500 outline-2 outline-white"
                      onClick={() => increaseQt(e, i)}
                    >
                      +
                    </button>
                  </div>
                  <p className=" flex items-center gap-2">
                    <span className=" text-white">Brand</span>
                    <span className=" font-mono text-2xl">{e.brand}</span>
                  </p>
                </div>
              </div>
              <button
                onClick={() => removecart(e, i)}
                className=" bg-white hover:bg-transparent  mt-3   px-4 py-1 text-orange-500 hover:text-white   border-white border duration-300 rounded-2xl text-xl font-medium font-mono"
              >
                <span className=" block relative z-[1]">Remove from cart</span>
              </button>
            </div>
          </div>
        </div>
      ))}
      <div
        className={`${
          Show ? "block" : "hidden"
        } bg-white w-[300px] fixed p-2 bottom-0 right-0`}
      >
        <p className=" text-orange-500 text-2xl ">Total-Amount:{Prize}</p>
      </div>
      <button
        onClick={() => setconfirm(true, setShow(false))}
        className=" absolute  bottom-3 left-3 bg-white hover:bg-transparent  mt-3   px-4 py-1 text-orange-500 hover:text-white   border-white border duration-300 rounded-2xl text-xl font-medium font-mono"
      >
        <span className=" block relative z-[1]">place-order</span>
      </button>
    </div>
  );
};

export default CartLayer;
