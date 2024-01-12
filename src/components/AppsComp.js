import React from 'react'
import appsfirst from "../miscelenous/alex-perri-At__EKm5PGE-unsplash.png"
import appssecond from "../miscelenous/alex-perri-At__EKm5PGE-unsplash (1).png"
import appsthird from "../miscelenous/alex-perri-At__EKm5PGE-unsplash (2).png"
import appsfourth from "../miscelenous/ava.png"

const AppsComp = () => {
    return (
        < div className="flex justify-between w-full px-20 mt-[14rem]">
            <div className="w-[360px]">
                <div className="flex flex-col justify-between h-full">
                    <h1 className="text-[65px] font-medium">Offres d'emploi</h1>
                    <div className="">
                        <p className="text-[15px] w-[271px]">Connectez-vous avec des organisations africaines, postulez au job de vos rêves en Afrique ou partagez votre expertise même à distance!   </p>
                        <button className="flex justify-center items-center border border-black px-6 py-3 text-[15px] rounded-[50px]  mt-12">Publier ou postuler à une offre d'emploi</button>
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap  gap-y-[20px] w-[820px] justify-between">
                <div className="w-[398px] h-[352px]  border-solid border-2 border-[#E0E0E0] rounded-[112px] flex flex-col justify-between py-6 ">
                    <div className=" flex flex-col">
                        <h1 className="text-[30px] text-center">Lead Software Engineer</h1>
                        <h1 className="text-[15px] text-center text-[#A95454]">Madagascar </h1>
                    </div>
                    <div className="flex justify-between items-center px-4">
                        <div>
                            <h1 className=" text-[15px] text-[#A95454]">Full-time</h1>
                            <h1 className="underline text-[15px]">+Favourites</h1>
                        </div>
                        <div>
                            <img src={appsfirst} className='rounded-full'></img>
                            <h1 className="text-[13px]">Tubik Studio</h1>
                        </div>
                        <div>
                            <h1 className="text-[15px]">1 day ago</h1>
                        </div>
                    </div>
                    <div className="flex justify-center items-center">
                        <button className="flex justify-center items-center border-2 border-black px-20 py-3 text-[15px] rounded-[50px]  mt-12">Voir</button>
                    </div>

                </div>
                <div className="w-[398px] h-[352px]  border-solid border-2 border-[#E0E0E0] rounded-[112px] flex flex-col justify-between py-6 ">
                    <div className=" flex flex-col">
                        <h1 className="text-[30px] text-center">Risk Analyst</h1>
                        <h1 className="text-[15px] text-center text-[#A95454]">Madagascar </h1>
                    </div>
                    <div className="flex justify-between items-center px-4">
                        <div>
                            <h1 className=" text-[15px] text-[#A95454]">Full-time</h1>
                            <h1 className="underline text-[15px]">+Favourites</h1>
                        </div>
                        <div>
                            <img src={appssecond} className='rounded-full'></img>
                            <h1 className="text-[13px]">Tubik Studio</h1>
                        </div>
                        <div>
                            <h1 className="text-[15px]">1 day ago</h1>
                        </div>
                    </div>
                    <div className="flex justify-center items-center">
                        <button className="flex justify-center items-center border-2 border-black px-20 py-3 text-[15px] rounded-[50px]  mt-12">Voir</button>
                    </div>

                </div>
                <div className="w-[398px] h-[352px]  border-solid border-2 border-[#E0E0E0] rounded-[112px] flex flex-col justify-between py-6 ">
                    <div className=" flex flex-col">
                        <h1 className="text-[30px] text-center">Financial Analyst</h1>
                        <h1 className="text-[15px] text-center text-[#A95454]">Madagascar </h1>
                    </div>
                    <div className="flex justify-between items-center px-4">
                        <div>
                            <h1 className=" text-[15px] text-[#A95454]">Full-time</h1>
                            <h1 className="underline text-[15px]">+Favourites</h1>
                        </div>
                        <div>
                            <img src={appsthird} className='rounded-full'></img>
                            <h1 className="text-[13px]">SP-holding</h1>
                        </div>
                        <div>
                            <h1 className="text-[15px]">1 day ago</h1>
                        </div>
                    </div>
                    <div className="flex justify-center items-center">
                        <button className="flex justify-center items-center border-2 border-black px-20 py-3 text-[15px] rounded-[50px]  mt-12">Voir</button>
                    </div>

                </div>
                <div className="w-[398px] h-[352px]  border-solid border-2 border-[#E0E0E0] rounded-[112px] flex flex-col justify-between py-6 ">
                    <div className=" flex flex-col">
                        <h1 className="text-[30px] text-center">Data Engineer</h1>
                        <h1 className="text-[15px] text-center text-[#A95454]">Madagascar </h1>
                    </div>
                    <div className="flex justify-between items-center px-4">
                        <div>
                            <h1 className=" text-[15px] text-[#A95454]">Full-time</h1>
                            <h1 className="underline text-[15px]">+Favourites</h1>
                        </div>
                        <div>
                            <img src={appsfourth} className='rounded-full'></img>
                            <h1 className="text-[13px] ">Vehement   </h1>
                        </div>
                        <div>
                            <h1 className="text-[15px]">1 day ago</h1>
                        </div>
                    </div>
                    <div className="flex justify-center items-center">
                        <button className="flex justify-center items-center border-2 border-black px-20 py-3 text-[15px] rounded-[50px]  mt-12">Voir</button>
                    </div>

                </div>
            </div>
        </div >
    )
}

export default AppsComp