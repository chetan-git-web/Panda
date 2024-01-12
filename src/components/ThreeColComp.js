import React from 'react'
import minipic from "../miscelenous/ava (1).png"
import bigimage from "../miscelenous/image 75.jpg"

const ThreeColComp = () => {
    return (
        <div className="flex justify-between w-full px-20 mt-[14rem]">
            <div className="w-[360px]">
                <div className="flex flex-col justify-between h-full gap-y-20 ">
                    <div className="space-y-4">
                        <h1 className="text-[65px] font-medium">Evénements à venir</h1>
                        <h1 className="font-bold">Publié par: Pablo Diahuno</h1>
                        <img src={minipic}></img>
                    </div>
                    <div className="">
                        <p className="text-[15px] w-[271px]">Sortez votre carnet d'adresses! Restez informés de tous les événements à venir autour du business en Afrique organisés en Afrique ou à l'étranger.   </p>
                        <button className="flex justify-center items-center border border-black px-6 py-3 text-[15px] rounded-[50px]  mt-12">Publier ou voir les événements </button>
                    </div>
                </div>
            </div>
            <img src={bigimage} className="w-[482px] h-[479px] rounded-full"></img>
            <div>
                <h1 className="font-bold">L'événement: <span className="font-bold text-[#A95454]">The Nancy party’s </span></h1>
                <h1 className="font-bold">Date: <span className="font-bold text-[#A95454]">10/07/22</span></h1>
                <h1 className="font-bold">Lieu: <span className="font-bold text-[#A95454]">Senegal</span></h1>
            </div>
        </div>
    )
}

export default ThreeColComp