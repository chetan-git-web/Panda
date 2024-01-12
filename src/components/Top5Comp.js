import React from 'react'
import top5 from "../miscelenous/all img.jpg"
import union from "../miscelenous/Union.svg";



const Top5Comp = () => {
    return (
        <div className="px-20 mt-[14rem]">
            <h1 className="font-semibold text-[65px] w-[1012px] ">Top 5 des domaines d’activités porteurs en Afrique </h1>
            <div className="flex justify-center gap-x-[20rem] mt-24">
                <img src={top5} className="rounded-full"></img>
                <div>
                    <div className="flex flex-col justify-center">
                        <div>
                            <h1 className="text-[40px] font-medium flex" ><img src={union} />Les énergies renouvelables</h1>
                            <h1 className="text-[40px] font-medium flex text-[#A95454]"><img src={union} />L'agro-alimentaire</h1>
                            <h1 className="text-[40px] font-medium flex"><img src={union} />Les technologies</h1>
                            <h1 className="text-[40px] font-medium flex"><img src={union} />Le e-commerce</h1>
                            <h1 className="text-[40px] font-medium flex"><img src={union} />Les solutions de paiement</h1>
                        </div>
                        <button className="flex justify-center items-center border border-black px-20 py-3 text-[15px] rounded-[50px] mx-auto  mt-12">Suivant </button>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Top5Comp