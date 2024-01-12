import React, { useRef, useState } from "react";

import image from "../miscelenous/group-afro-americans-working-together (1).jpg";
import union from "../miscelenous/Union.svg";
import LoginHeader from "./LoginHeader";
import { useNavigate } from "react-router-dom";
import { validateUser } from "../utils/validate";
const Signup = () => {
  const navigate = useNavigate();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const [showpassword1, setshowpassword1] = useState(false);
  const [showpassword2, setshowpassword2] = useState(false);
  const [passwordError, setpasswordError] = useState("");
  const [emailError, setemailError] = useState("");
  // email password error handler on button click
  const onclicklogin = () => {
    if (password.current.value != passwordAgain.current.value) {
      setpasswordError("Password is not matching")
      return;
    }
    else {
      setpasswordError("")
    }

    const error = validateUser(email.current.value, password.current.value);
    if (error == "password is invalid") {
      setpasswordError(error)
      setemailError("");
      return;
    }
    else if (error == "email is invalid") {
      setemailError(error);
      setpasswordError("");
      return;
    }
    else {
      setemailError("");
      setpasswordError("")
    }
    navigate("/home")

  };

  return (
    <div className="flex">
      <h1 className="text-white text-2xl absolute mt-[27.76px] ml-[42.25px] w-[450px] h-[31px] text-[45px]">
        Welcome to PANDA
      </h1>
      <img src={image} className="w-[950px] h-[1043px]"></img>
      <div>
        <div className="flex h-[156px] justify-center item-center py-10 ">
          <div>
            <div className="flex gap-10">
              <div>
                <h1 className="text-[16px] font-semibold cursor-pointer">
                  join PANDA
                </h1>
                <div className="h-[5px] bg-[#A95454] mt-3"></div>
              </div>
              <h1 className="text-[#ACB5BD]">or</h1>

              <h1
                className="text-[16px] font-semibold cursor-pointer"
                onClick={() => {
                  navigate("/login");
                }}
              >
                Sign in
              </h1>
            </div>
            <div className="w-[234px] h-[1px] bg-[#ACB5BD] "></div>
          </div>
        </div>
        {/* <LoginHeader/> */}
        <form>
          <div className="w-[463px] h-[492px] border rounded-t-[463px] mx-28  flex flex-col items-center">
            <img
              src={union}
              className="flex justify-center  items-center mx-auto mt-14"
            ></img>
            <h1 className="text-3xl font-bold flex justify-center mt-14">
              Create your free account
            </h1>
            <h1 className="text-2xl font-semibold flex justify-center ">
              Takes less than<span className="text-[#a95454]"> 5 minutes</span>
              ...
            </h1>

            {/* email */}
            <input
              ref={email}
              type="email"
              placeholder="example@gmail.com"
              className="p-2 w-[306.6px] h-[31.62px] outline-none mx-20 text-[#a95454] mt-14"
            />
            <div className="mb-6">
              <div className="bg-gray-200 w-[306px] h-[0.48px] mx-20 "></div>
              <h1 className=" w-[306.6px] h-[11.62px] outline-none mx-20 text-xs">
                {emailError}
              </h1>
            </div>
            {/* password  */}
            <div className="flex ">
              <input
                ref={password}
                type={showpassword1 ? "text" : "password"}
                placeholder="password"
                className="px-6 w-[306.6px] h-[31.62px] outline-none text-[#a95454]"
              />
              <a
                className="cursor-pointer underline"
                onClick={() => {
                  setshowpassword1(!showpassword1);
                }}
              >
                {showpassword1 ? "hide" : "show"}
              </a>
            </div>

            <div className="mb-10">
              <div className="bg-gray-200 w-[306px] h-[0.48px] mx-20 "></div>

            </div>
            {/* password  */}
            <div className="flex ">
              <input
                ref={passwordAgain}
                type={showpassword2 ? "text" : "password"}
                placeholder="password"
                className="px-6 w-[306.6px] h-[31.62px] outline-none text-[#a95454]"
              />
              <a
                className="cursor-pointer underline"
                onClick={() => {
                  setshowpassword2(!showpassword2);
                }}
              >
                {showpassword2 ? "hide" : "show"}
              </a>
            </div>

            <div className="mb-6">
              <div className="bg-gray-200 w-[306px] h-[0.48px] mx-20 "></div>
              <h1 className=" w-[306.6px] h-[11.62px] outline-none mx-20 text-xs">
                {passwordError}
              </h1>
            </div>
            {/* checkbox  */}
            <div className="mt-20 mx-20">
              <input
                type="checkbox"
                id="checkbox1"
                name="vehicle1"
                className="text-2xl "
              />
              <label className="text-xl " for="checkbox1">
                {" "}
                I'm an Expert
              </label>
              <br />
              <br />
              <input
                type="checkbox"
                id="checkbox2"
                name="vehicle1"
                className="text-2xl "
              />
              <label className="text-xl " for="checkbox1">
                {" "}
                I'm an Organization in Africa
              </label>
            </div>
            <button
              className="flex justify-center items-center border border-black px-10 py-3 text-[15px] rounded-[50px] mx-[9rem] mt-10"
              onClick={(e) => {
                e.preventDefault();
                onclicklogin();
              }}
            >
              join PANDA
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
