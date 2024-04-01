import React, { useContext } from "react";
import kid1 from "../assets/image/kid1.jpg";
import kid2 from "../assets/image/kid2.jpg";
import kid3 from "../assets/image/kid3.jpg";
import CartContext from "../context/CartContext";
const Kids = () => {
  const storedata = [
    {
      id: 1,
      img: kid1,
      prize: 20,
      brand: `lacoste`,
      para: ` Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laue iusto nein ullam.`,
      qt: 1,
    },
    {
      id: 2,
      img: kid2,
      prize: 40,
      brand: `AMO`,
      para: ` Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  n ullam.`,
      qt: 1,
    },
    {
      id: 3,
      img: kid3,
      prize: 35,
      brand: `LOOKS`,
      para: ` Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  nesciunt dolor, quisquam
                  tenetur aliquam in ullam.`,
      qt: 1,
    },
  ];
  const { CartItem, setCartItem, setPrize, Prize, kidcart, setkidcart } =
    useContext(CartContext);
  function add(obj, i) {
    const productInCart = kidcart.find((product) => product.id === obj.id);
    if (productInCart) {
      setkidcart(
        kidcart.map((product) =>
          product.id === obj.id ? { ...product, obj } : product
        )
      );
    } else {
      setkidcart([...kidcart, { ...obj, qty: 1 }]);
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
      setkidcart(kidcart.filter((product) => product.id !== e.id));
      setPrize(Prize - e.prize * (e.qty || 1));
    }
  }
  return (
    <section>
      <div className="max-w-[1140px] mx-auto px-3">
        <div className="row">
          {storedata.map((e, i) => (
            <div key={i} className="lg:w-4/12 sm:w-1/2 w-full px-3">
              <div className="h-full overflow-hidden flex flex-col border rounded-2xl">
                <img
                  src={e.img}
                  alt="shoes"
                  width={200}
                  height={200}
                  className=" hover:scale-110 cursor-pointer duration-300 overflow-hidden rounded-2xl h-[300px] w-full "
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
                  {kidcart.some((product) => product.id === e.id) ? (
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

export default Kids;
