import React from 'react'
import topfirst from "../miscelenous/image.jpg"
import topsecond from "../miscelenous/image (1).jpg"
import topthird from "../miscelenous/image (2).jpg"

const MirrorRightComp = () => {
    return (
        < div className="flex justify-center gap-x-44 mx-20 mt-[14rem]">
            <div className='w-[360px] overflow-scroll no-scrollbar pt-12'>
                <div className="w-[360px] flex space-x-[32px]">
                    <div className="flex flex-col justify-between h-full gap-y-80 " >
                        <h1 className="text-[65px] font-medium">Découvrez les expert</h1>
                        <div className="">
                            <p className="text-[15px] w-[271px]">Connectez-vous avec des organisations africaines, postulez au job de vos rêves en Afrique ou partagez votre expertise même à distance!   </p>
                            <button className="flex justify-center items-center border border-black px-20 py-3 text-[15px] rounded-[50px]  mt-12">Voir tout</button>
                        </div>
                    </div>
                    <div className="flex flex-col justify-between h-full gap-y-80 " >
                        <h1 className="text-[65px] font-medium">Découvrez les expert</h1>
                        <div className="">
                            <p className="text-[15px] w-[271px]">Connectez-vous avec des organisations africaines, postulez au job de vos rêves en Afrique ou partagez votre expertise même à distance!   </p>
                            <button className="flex justify-center items-center border border-black px-20 py-3 text-[15px] rounded-[50px]  mt-12">Voir tout</button>
                        </div>
                    </div>
                    <div className="flex flex-col justify-between h-full gap-y-80 duration-700 ease-in-out" >
                        <h1 className="text-[65px] font-medium">Découvrez les expert</h1>
                        <div className="">
                            <p className="text-[15px] w-[271px]">Connectez-vous avec des organisations africaines, postulez au job de vos rêves en Afrique ou partagez votre expertise même à distance!   </p>
                            <button className="flex justify-center items-center border border-black px-20 py-3 text-[15px] rounded-[50px]  mt-12">Voir tout</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-[887px]">
                <h1 className="text-[40px] font-medium">“ Mon rêve était d’aller vivre en Afrique. j'ai postulé à une offre d'emploi pour le poste de web developer publiée sur PANDA et le mois suivant je commençais à travailler à Dakar! ”</h1>
                <div className="flex justify-center gap-x-10 mt-20">
                    <img src={topfirst} className='rounded-t-full'></img>
                    <img src={topsecond} className="h-[409px] mt-[107px] rounded-t-full"></img>
                    <img src={topthird} className="h-[287px] mt-[229px] rounded-t-full"></img>
                </div>
            </div>
        </div >
    )
}

export default MirrorRightComp