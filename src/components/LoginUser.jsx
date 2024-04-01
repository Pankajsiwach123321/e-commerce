import React, { useContext, useEffect, useState } from "react";
import CartContext from "../context/CartContext";

const LoginUser = () => {
  const { setLogin, Login, user, setUser } = useContext(CartContext);
  const [textup, settextup] = useState(false);

  const handel = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    localStorage.setItem("user", user.name);

    if (e.target.value == "") {
      settextup(false);
    }
    settextup(true);
  };
  const submit = () => {
    if (user.name.length <= 0) {
      alert("add your name first");
    } else {
      alert(`welcome ${user.name}`);
      setLogin(true);
      localStorage.setItem("login", true);
    }
  };
  useEffect(() => {
    const storelogin = localStorage.getItem("login");
    const storeuser = localStorage.getItem("user");
    // if (storelogin !== Login && storeuser !== user) {
    //   setLogin(storelogin);
    //   setUser(storeuser);
    // } else {
    //   setLogin(false);
    // }
  }, []);
  // localStorage.clear();
  return (
    <div
      className={`${
        Login ? "hidden" : "block"
      } w-full min-h-screen backdrop-blur-md fixed  flex justify-center items-center inset-0   z-[60]`}
    >
      <div className="  bg-orange-500 text-center rounded-2xl border-2 border-white outline outline-orange-500 flex  flex-col justify-center items-center  w-[50%] h-[450px]">
        <span className=" text-white text-2xl py-2">ENTER YOUR NAME</span>
        <div className=" relative bg-white rounded-2xl  z-[1]">
          <input
            onChange={handel}
            value={user.name}
            name="name"
            className="p-[18px] bg-transparent outline-0  font-mono text-black placeholder:text-black text-xl w-full max-w-[400px]"
            type="Name"
          />
          <span
            className={`${
              textup ? "top-[3px] text-xs" : "top-[18px] text-lg"
            } absolute text-nowrap left-[18px] z-[-1]  duration-300  text-black `}
          >
            Your Name
          </span>
        </div>
        <button
          onClick={submit}
          className=" bg-white hover:bg-transparent  mt-3   px-4 py-1 text-orange-500 hover:text-white   border-white border duration-300 rounded-2xl text-xl font-medium font-mono"
        >
          <span className=" block relative z-[1]">Submit</span>
        </button>
      </div>
    </div>
  );
};

export default LoginUser;
