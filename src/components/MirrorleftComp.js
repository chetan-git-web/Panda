import React from 'react'
import bottomfirst from "../miscelenous/images.jpg"
import bottomsecond from "../miscelenous/images (1).jpg"
import bottomthird from "../miscelenous/images (2).jpg"

const MirrorleftComp = () => {
    return (
        < div className="flex justify-center gap-x-44 mx-20 mt-[14rem]">
            <div className="w-[887px]">
                <h1 className="text-[40px] font-medium">“PANDA nous donne accès aux meilleurs talents dans leur domaine d'activité et à de réelles perspectives de collaboration!  ”</h1>
                <div className="flex justify-center gap-x-10 mt-14">
                    <img src={bottomfirst} className="h-[287px] mt-[229px] rounded-t-full"></img>
                    <img src={bottomsecond} className="h-[409px] mt-[107px] rounded-t-full"></img>
                    <img src={bottomthird} className="rounded-t-full"></img>
                </div>
            </div>
            <div className="w-[420px]">
                <div className='overflow-scroll no-scrollbar flex space-x-[52px]'>
                    <div className="flex flex-col justify-between h-full gap-y-40">
                        <h1 className="text-[60px] font-medium">Découvrez les organisations en Afrique</h1>
                        <div className="">
                            <p className="text-[15px] w-[271px]">Trouvez les experts que vous recherchez, publiez vos offres d'emploi et d'autres contenus exclusifs sur votre organisation!</p>
                            <button className="flex justify-center items-center border border-black px-20 py-3 text-[15px] rounded-[50px]  mt-12">Voir tout</button>
                        </div>
                    </div>
                    <div className="flex flex-col justify-between h-full gap-y-40">
                        <h1 className="text-[60px] font-medium">Découvrez les organisations en Afrique</h1>
                        <div className="">
                            <p className="text-[15px] w-[271px]">Trouvez les experts que vous recherchez, publiez vos offres d'emploi et d'autres contenus exclusifs sur votre organisation!</p>
                            <button className="flex justify-center items-center border border-black px-20 py-3 text-[15px] rounded-[50px]  mt-12">Voir tout</button>
                        </div>
                    </div>
                    <div className="flex flex-col justify-between h-full gap-y-40">
                        <h1 className="text-[60px] font-medium">Découvrez les organisations en Afrique</h1>
                        <div className="">
                            <p className="text-[15px] w-[271px]">Trouvez les experts que vous recherchez, publiez vos offres d'emploi et d'autres contenus exclusifs sur votre organisation!</p>
                            <button className="flex justify-center items-center border border-black px-20 py-3 text-[15px] rounded-[50px]  mt-12">Voir tout</button>
                        </div>
                    </div>
                </div>
            </div>

        </div >
    )
}

export default MirrorleftComp