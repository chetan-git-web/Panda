import React, { useRef, useState } from "react";
import image from "../miscelenous/group-afro-americans-working-together (1).jpg";
import union from "../miscelenous/Union.svg";
import { validateUser } from "../utils/validate";
import { useNavigate } from "react-router-dom";
const ResetPassword = () => {
  const navigate = useNavigate();
  const password = useRef();
  const passwordAgain = useRef();
  const [switcher, setswitcher] = useState(true);
  const [showpassword1, setshowpassword1] = useState(false);
  const [showpassword2, setshowpassword2] = useState(false);
  const [passwordError,setpasswordError] = useState("");
  const onclickReset = () => { 
    if(password.current.value!=passwordAgain.current.value){
      setpasswordError("Password is not matching")
      return;
    }
    else{
      setpasswordError("")
    }

    const error = validateUser(null, password.current.value);
    if(error=="password is invalid"){
      setpasswordError(error)
      return;
    }
    else{
      setpasswordError("")
    }
    if(switcher){
      setswitcher(!switcher);
    }
    else{
      navigate("/login");
    }

  }

  return (
    <div className="flex">
      <h1 className="text-white text-2xl absolute mt-[27.76px] ml-[42.25px] w-[450px] h-[31px] text-[45px]">
        Welcome to PANDA
      </h1>
      <img src={image} className="w-[950px] h-[1043px]"></img>
      <div>
        {/* <LoginHeader/> */}
        <div className="flex h-[156px] justify-center item-center py-10 ">
          <div>
            <div className="flex gap-10">
              <h1 className="text-[16px] font-semibold cursor-pointer" onClick={()=>{
                navigate("/")
              }}>join PANDA</h1>
              <h1 className="text-[#ACB5BD]">or</h1>
              <h1 className="text-[16px] font-semibold cursor-pointer" onClick={()=>{
                navigate("/login")
              }}>Sign in</h1>
            </div>
            <div className="w-[234px] h-[1px] bg-[#ACB5BD] mt-3"></div>
          </div>

        </div>

        <form>

          <div className="w-[463px] h-[408px] border rounded-t-[463px] mx-28  flex flex-col items-center">
            <img
              src={union}
              className="flex justify-center  items-center mx-auto mt-14"
            ></img>
            <h1 className="text-3xl font-bold flex justify-center mt-10">
              Reset password
            </h1>
            {/* password  */}
            <div className="flex justify-between mt-20">
              <input
              ref={password}
              type={showpassword1 ? "text" : "password"}
                placeholder="Enter New password"
                className="p-2 w-[306.6px] h-[31.62px] outline-none  text-[#a95454]"
              />
              <a className="cursor-pointer underline" onClick={() => {
                  setshowpassword1(!showpassword1);
                }}>{showpassword1 ? "hide" : "show"}</a>
            </div>
            <div className="mb-6">
              <div className="bg-gray-200 w-[336px] h-[0.48px] mx-20 "></div>
              <h1 className=" w-[306.6px] h-[11.62px] outline-none mx-20 text-xs">
                {" "}
              </h1>
            </div>
            {/* password again  */}

            <div className="flex justify-between ">
              <input
              ref={passwordAgain}
              type={showpassword2 ? "text" : "password"}
                placeholder="Re-Enter New password"
                className="p-2 smartphone:p-4 smartphone:my-4 w-[306.6px] h-[31.62px] outline-none  text-[#a95454]"
              />
              <a className="cursor-pointer underline" onClick={() => {
                  setshowpassword2(!showpassword2);
                }}>{showpassword2 ? "hide" : "show"}</a>
            </div>
            <div className="mb-6">
              <div className="bg-gray-200 w-[336px] h-[0.48px] mx-20 "></div>
              <h1 className=" w-[306.6px] h-[11.62px] outline-none mx-20 text-xs">
                {passwordError}
              </h1>
            </div>

            <div className=" ">
              {switcher ? (
                <></>
              ) : (
                <h1 className=" flex justify-center cursor-pointer mx-16 text-[#ACB5BD]">
                  Your password has been reset
                </h1>
              )}
            </div>
            <button className="flex justify-center items-center border  border-black px-14 py-3 text-[15px] rounded-[50px]  mt-20" onClick={(e)=>{
                e.preventDefault();
                onclickReset();
            }}>
              {switcher ? "Reset my password" : "Signin"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
