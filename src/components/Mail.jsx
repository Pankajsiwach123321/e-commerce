import React, { useContext, useRef } from "react";
import emailjs from "@emailjs/browser";
import CartContext from "../context/CartContext";

export const ContactUs = () => {
  const form = useRef();
  const {
    CartItem,
    palceorder,
    setpalceorder,
    setCartItem,
    setPrize,
    setkidcart,
    setwomencart,
    setmencart,
    confirm,
    setconfirm,
  } = useContext(CartContext);
  const [fromdata, setFromdata] = React.useState({
    name: "",
    useremail: "",
    message: "",
  });
  const [Fromerror, setFromerror] = React.useState({
    name: "",
    useremail: "",
    message: "",
  });
  const inputCon = (e) => {
    const { name, value } = e.target;
    setFromdata({ ...fromdata, [name]: value });
  };
  const sendEmail = (e) => {
    e.preventDefault();

    const messageBody = CartItem.map((item) => {
      return `Item: ${item.brand}\nPrize: ${item.prize}\nQuantity: ${item.qt}\n\n`;
    }).join("");

    const messageInput = document.createElement("input");
    messageInput.type = "hidden";
    messageInput.name = "message";
    messageInput.value = messageBody;
    form.current.appendChild(messageInput);
    const regex = {
      name: /^[a-zA-Z\s]+$/,
      email:
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      message: /^[a-zA-Z\s]+$/,
    };
    const error = {};
    if (!regex.name.test(fromdata.name)) {
      error.name = "invaild name";
    }
    if (!regex.email.test(fromdata.useremail)) {
      error.useremail = "invaild email";
    }
    if (!regex.message.test(fromdata.message)) {
      error.message = "message not be empty";
    }
    setFromerror(error);
    if (Object.keys(error).length === 0) {
      emailjs
        .sendForm(
          "service_k2uzfhb",
          "template_kv6d7xq",
          form.current,
          "qN_3TJV48NGiMwDpX"
        )
        .then(
          () => {
            console.log("SUCCESS!");
          },
          (error) => {
            console.log("FAILED...", error);
          }
        );
      setCartItem([]);
      setmencart([]);
      setkidcart([]);
      setwomencart([]);
      setpalceorder(false);
      setPrize(0);
    }
  };

  return (
    <div className={`${confirm ? "" : "scale-0"} duration-300 `}>
      <div className="  fixed top-20 z-20 left-[50%] translate-x-[-50%] bg-orange-500 text-center rounded-2xl border-2 border-white outline outline-orange-500 flex  flex-col justify-center items-center  w-[50%] p-10">
        <span className=" text-white text-2xl py-2">
          ENTER Details for order
        </span>
        {palceorder ? (
          <div>
            <form
              ref={form}
              onSubmit={sendEmail}
              className=" flex flex-col justify-start items-start gap-5"
            >
              <label className=" text-white font-mono font-semibold text-xl">
                Name
              </label>
              <input
                onChange={inputCon}
                className="p-[18px] border-white rounded-xl border-2 bg-transparent outline-0  font-mono text-black placeholder:text-black text-xl w-full max-w-[400px]"
                type="text"
                name="name"
              />
              {Fromerror.name && (
                <p className=" text-red-700 text-base font-medium font-mono">
                  {Fromerror.name}
                </p>
              )}
              <label>Email</label>
              <input
                onChange={inputCon}
                className="p-[18px] border-white rounded-xl border-2 bg-transparent outline-0  font-mono text-black placeholder:text-black text-xl w-full max-w-[400px]"
                type="email"
                name="useremail"
              />
              {Fromerror.useremail && (
                <p className=" text-red-700 text-base font-medium font-mono">
                  {Fromerror.useremail}
                </p>
              )}
              <label>Message</label>
              <textarea
                onChange={inputCon}
                className="p-[18px] border-white rounded-xl border-2 bg-transparent outline-0  font-mono text-black placeholder:text-black text-xl w-full max-w-[400px]"
                name="message"
              />
              {Fromerror.message && (
                <p className=" text-red-700 text-base font-medium font-mono">
                  {Fromerror.message}
                </p>
              )}
              <input
                className="p-[18px] cursor-pointer border-white rounded-xl border-2 bg-transparent outline-0  font-mono text-black placeholder:text-black text-xl w-full max-w-[400px]"
                type="submit"
                value="confirm order"
              />
            </form>
          </div>
        ) : (
          <div className=" w-full min-h-screen backdrop-blur-md fixed  flex justify-center items-center inset-0   z-[60]">
            <div className="  bg-orange-500 text-center rounded-2xl border-2 border-white outline outline-orange-500 flex  flex-col justify-center items-center  w-[50%] h-[450px]">
              <span className=" text-white text-2xl py-2">
                Order is confirmed
              </span>
              <button
                onClick={() => setconfirm(false)}
                className=" bg-white hover:bg-transparent  mt-3   px-4 py-1 text-orange-500 hover:text-white   border-white border duration-300 rounded-2xl text-xl font-medium font-mono"
              >
                <span className=" block relative z-[1]">Submit</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
