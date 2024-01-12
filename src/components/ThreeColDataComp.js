import React from 'react'
import bigimage2 from "../miscelenous/img.png"

const ThreeColDataComp = () => {
    return (
        <div className="flex justify-between w-full px-20 mt-[14rem]">
            <div className="w-[360px]">
                <div className="flex flex-col  h-full gap-y-20 ">
                    <div className="space-y-4">
                        <h1 className="text-[65px] font-medium">Témoignages</h1>
                        <div>
                            <h1 className="font-bold text-[13px]">Diaspora Member: </h1>
                            <h1 className="font-bold text-[13px] text-[#A95454]">Artur Luison</h1>
                        </div>
                        <div>
                            <h1 className="font-bold text-[13px]">Job Position: </h1>
                            <h1 className="font-bold text-[13px] text-[#A95454]">Manager</h1>

                        </div>

                    </div>
                    <div className="">
                        <p className="text-[15px] w-[271px] font-medium">“ Risus, sed venenatis sed morbi lectus nunc tincidunt quam. Eget volutpat elementum cum turpis feugiat imperdiet auctor accumsan. Ut pulvinar orci. “ </p>
                    </div>
                </div>
            </div>
            <img src={bigimage2} className="w-[540px] h-[536px] rounded-full"></img>
            <div className="w-[340px] space-y-10">
                <h1 className="font-bold">Very Nice Atmosphere and experience with “Welcome to PANDA”</h1>
                <h1 className="">Risus, sed venenatis sed morbi lectus nunc tincidunt quam. Eget volutpat elementum cum turpis feugiat imperdiet auctor accumsan. Ut pulvinar orci.</h1>
                <h1>Risus, sed venenatis sed morbi lectus nunc tincidunt quam. Eget volutpat elementum cum turpis feugiat imperdiet auctor accumsan. Ut pulvinar orci.</h1>
            </div>
        </div>
    )
}

export default ThreeColDataComp