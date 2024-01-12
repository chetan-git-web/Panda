import React from 'react'
import cofounder1 from "../miscelenous/ava (2).png"
import cofounder2 from "../miscelenous/ava (3).png"

const ThreeBlocksComp = () => {
    return (
        <div className=" w-full px-20 mt-[14rem] ">
            <h1 className="text-[65px] font-medium">Les fondateurs</h1>
            <div className="flex justify-between w-full mt-20">
                <div>
                    <div className="flex gap-x-10">
                        <div>
                            <img src={cofounder1} className=""></img>
                            <h1 className="text-[13px] font-bold">Co-fondateur PANDA:</h1>
                            <h1 className="text-[13px] font-bold text-[#A95454]">Sarah Walu Onya</h1>
                        </div>
                        <div>
                            <img src={cofounder2} className=""></img>
                            <h1 className="text-[13px] font-bold"> Co-fondateur PANDA:</h1>
                            <h1 className="text-[13px] font-bold text-[#A95454]">Abdoulaye Ba</h1>
                        </div>
                    </div>
                </div>
                <div className="w-[310px] h-[516px]  border-solid border-2 border-[#CECBC8] rounded-t-[162.5px] px-[35px] space-y-4">

                    <h1 className="text-[13px] mt-[80px] font-medium">“ <span className="text-[#A95454]">Sarah</span> et <span className="text-[#A95454]">Abdoulaye</span> sont tous deux consultants et managers dans un groupe international de conseil en stratégie et management. Ils se sont rencontrés au Luxembourg et ont beaucoup échangé sur leur expérience commune dans l'entrepreneuriat. Tout au long de leurs discussions, une chose très claire est vite apparue : leur passion pour l'entrepreneuriat et leur amour de l'Afrique, le continent dont ils sont tous deux originaires. “</h1>
                    <h1 className="text-[13px] font-medium">Ils sont alors convaincus qu'ils peuvent répondre à un besoin critique en Afrique et avoir un réel impact en réunissant des experts de premier plan du monde entier pour collaborer avec des acteurs africains sur des projets visant à faire croître l'écosystème de l'innovation en <span className="text-[#A95454]">Afrique</span>.</h1>
                </div>
            </div>
        </div>
    )
}

export default ThreeBlocksComp