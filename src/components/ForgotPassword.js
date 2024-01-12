import React, { useState , useRef} from "react";
import image from "../miscelenous/group-afro-americans-working-together (1).jpg";
import union from "../miscelenous/Union.svg";
import { useNavigate } from "react-router-dom";
import { validateUser } from "../utils/validate";

const ForgotPassword = () => {
  const [switcher, setswitcher] = useState(true);
  const navigate = useNavigate();
  const email = useRef();
  const [emailError, setemailError] = useState("");

  const onclcikForgot = () => {
    const error = validateUser(email.current.value, null);
    if (error) {
      setemailError(error);
      return;
    }
    else{
      setemailError("");
    }
    if(switcher){
      setswitcher(!switcher);
    }
    else{

    }
  };
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
              }}>
                join PANDA
              </h1>
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
            <div className="w-[234px] h-[1px] bg-[#ACB5BD] mt-3"></div>
          </div>
        </div>
        <form>
          <div className="w-[463px] h-[408px] border rounded-t-[463px] mx-28">
            <img
              src={union}
              className="flex justify-center  items-center mx-auto mt-14"
            ></img>
            <h1 className="text-3xl font-bold flex justify-center mt-10">
              Forgot password
            </h1>

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

            {switcher ? (
              <h1 className="text-xs flex justify-center mx-16 text-[#ACB5BD]">
                Please enter your login email address to receive your password
                reset link.
              </h1>
            ) : (
              <h1 className=" flex justify-center  text-xs mx-16 text-[#ACB5BD]">
                Your password reset link has been sent to your email address.
                Check your email and click on the link to reset your password.
              </h1>
            )}
            <div className="mt-32 ">
              {switcher ? (
                <></>
              ) : (
                <h1 className=" flex justify-center cursor-pointer mx-16 text-[#ACB5BD]">
                  Don't get the password reset link?
                </h1>
              )}
              <button
                className="flex justify-center items-center border border-black px-14 py-3 text-[15px] rounded-[50px] mx-[8rem] mt-6"
                onClick={(e) => {
                  e.preventDefault();
                  onclcikForgot();
                }}
              >
                {switcher ? "Get the link" : "Resend link"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
