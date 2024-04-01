import React, { useContext, useState } from "react";
import shoes1 from "../assets/image/shoes1.jpg";
import shoes2 from "../assets/image/shoes2.jpg";
import shoes3 from "../assets/image/shoes3.jpg";
import CartContext from "../context/CartContext";
const Store = () => {
  const storedata = [
    {
      id: 1,
      img: shoes1,
      prize: 300,
      brand: `NIKE`,
      para: ` Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laudantium totam unde itaque iusto nesciunt dolor, quisquam
                  tenetur aliquam in ullam.`,
      qt: 1,
    },
    {
      id: 2,
      img: shoes2,
      prize: 400,
      brand: `PUMA`,
      para: ` Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  n ullam.`,
      qt: 1,
    },
    {
      id: 3,
      img: shoes3,
      prize: 300,
      brand: `ADIDAS`,
      para: ` Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  nesciunt dolor, quisquam
                  tenetur aliquam in ullam.`,
      qt: 1,
    },
    {
      id: 4,
      img: shoes1,
      prize: 300,
      brand: `NIKE`,
      para: ` Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laudantium totam unde itaque iusto nesciunt dolor, quisquam
                  tenetur aliquam in ullam.`,
      qt: 1,
    },
    {
      id: 5,
      img: shoes2,
      prize: 400,
      brand: `PUMA`,
      para: ` Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  n ullam.`,
      qt: 1,
    },
    {
      id: 6,
      img: shoes3,
      prize: 300,
      brand: `ADIDAS`,
      para: ` Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  nesciunt dolor, quisquam
                  tenetur aliquam in ullam.`,
      qt: 1,
    },
  ];
  const { CartItem, setCartItem, setmencart, mencart, setPrize, Prize } =
    useContext(CartContext);
  function add(obj, i) {
    const productInCart = mencart.find((product) => product.id === obj.id);
    if (productInCart) {
      setmencart(
        mencart.map((product) =>
          product.id === obj.id ? { ...product, obj } : product
        )
      );
    } else {
      setmencart([...mencart, { ...obj, qty: 1 }]);
      setPrize(Prize + obj.prize);
    }
    setCartItem((prevCartItem) => [...prevCartItem, { ...obj, qty: 1 }]);
  }
  function removecart(e) {
    const cartItemIndex = CartItem.findIndex((item) => item.id === e.id);
    if (cartItemIndex !== -1) {
      const updatedCartItem = [...CartItem];
      updatedCartItem.splice(cartItemIndex, 1);
      setCartItem(updatedCartItem);
      setmencart(mencart.filter((product) => product.id !== e.id));
      setPrize(Prize - e.prize * (e.qty || 1));
    }
  }
  console.log(CartItem);
  return (
    <section>
      <div className="max-w-[1140px] mx-auto px-3">
        <div className="row">
          {storedata.map((e, i) => (
            <div key={i} className="lg:w-4/12 sm:w-1/2 w-full px-3 mt-6">
              <div className="h-full overflow-hidden flex flex-col border rounded-2xl">
                <img
                  src={e.img}
                  alt="shoes"
                  width={200}
                  height={200}
                  className=" hover:scale-110 cursor-pointer duration-300 overflow-hidden rounded-2xl h-[300px] w-full"
                />
                <div className="p-5 flex-grow flex flex-col justify-between">
                  <div className="block">
                    <div className=" flex justify-between">
                      <p className=" flex items-center gap-2">
                        <span className=" text-red-500">Prize</span>
                        <span className=" font-mono text-2xl">${e.prize}</span>
                      </p>
                      <p className=" flex items-center gap-2">
                        <span className=" text-red-500">Brand</span>
                        <span className=" font-mono text-2xl">{e.brand}</span>
                      </p>
                    </div>
                    <p>{e.para}</p>
                  </div>
                  {mencart.some((product) => product.id === e.id) ? (
                    <button
                      onClick={() => removecart(e)}
                      href="#"
                      className=" bg-orange-500  mt-3  Mainhover px-4 py-1 text-white hover:text-orange-500   border-orange-500 border duration-300 rounded-2xl text-xl font-medium font-mono"
                    >
                      <span className=" block relative z-[1]">
                        remove from cart
                      </span>
                    </button>
                  ) : (
                    <button
                      onClick={() => add(e)}
                      href="#"
                      className=" bg-orange-500  mt-3  Mainhover px-4 py-1 text-white hover:text-orange-500   border-orange-500 border duration-300 rounded-2xl text-xl font-medium font-mono"
                    >
                      <span className=" block relative z-[1]">Add To Cart</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Store;
