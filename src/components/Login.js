import image from "../miscelenous/group-afro-americans-working-together (1).jpg";
import union from "../miscelenous/Union.svg";
import LoginHeader from "./LoginHeader";
import { useNavigate } from "react-router-dom";
import { useState, useRef } from "react";
import { validateUser } from "../utils/validate";


const Login = () => {
  const navigate = useNavigate();
  const email = useRef();
  const password = useRef();
  const [showpassword, setshowpassword] = useState(false);
  const [passwordError, setpasswordError] = useState("");
  const [emailError, setemailError] = useState("");
  
  const onclicklogin = ()=>{
    const error = validateUser(email.current.value, password.current.value);
    if(error=="email is invalid"){
      setemailError(error);
      setpasswordError("");
      return;
    }

    else if(error=="password is invalid"){
      setpasswordError(error)
      setemailError("");
      return;
    }
    else{
      setemailError("")
      setpasswordError("")
    }
    navigate("/home")

    
  }

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
              <h1
                className="text-[16px] font-semibold cursor-pointer"
                onClick={() => {
                  navigate("/");
                }}
              >
                join PANDA
              </h1>
              <h1 className="text-[#ACB5BD]">or</h1>
              <div>
                <h1 className="text-[16px] font-semibold cursor-pointer">
                  Sign in
                </h1>
                <div className="h-[5px] bg-[#A95454] mt-3"></div>
              </div>
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
            <h1 className="text-3xl font-bold flex justify-center mt-10">
              Signin
            </h1>

            {/* email  */}

            <input
            ref={email}
              type="email"
              placeholder="example@gmail.com"
              className="p-2 w-[306.6px] h-[31.62px] outline-none mx-20 text-[#a95454] mt-20"
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
              type={showpassword ? "text" : "password"}
                placeholder="password"
                className="px-6 w-[306.6px] h-[31.62px] outline-none text-[#a95454]"
              />
              <a
                className="cursor-pointer underline"
                onClick={() => {
                  setshowpassword(!showpassword);
                }}
              >
                {showpassword ? "hide" : "show"}
              </a>
            </div>

            <div className="mb-6">
              <div className="bg-gray-200 w-[306px] h-[0.48px] mx-20 "></div>
              <h1 className=" w-[306.6px] h-[11.62px] outline-none mx-20 text-xs">
                {passwordError}
              </h1>
            </div>
            {/* forgot password  */}
            <h1 className="p-2 smartphone:p-4 smartphone:my-4 w-[306.6px] h-[31.62px] outline-none mx-20 underline font-semibold cursor-pointer" onClick={()=>{
              navigate("/forgotpassword")
            }}>
              Forgot Password?
            </h1>

            <button className="flex justify-center items-center border border-black px-20 py-3 text-[15px] rounded-[50px] mx-[7.5rem] mt-32"
              onClick={(e) => {
                e.preventDefault();
                onclicklogin();
              }}
              >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
