import React from 'react'
import globe from "../miscelenous/Rectangle 111.jpg"
import union from "../miscelenous/Union.svg";



const CardsWithEarthComp = () => {
    return (
        <div className="flex w-full justify-between item center px-16 mt-[16rem]">
            <div className=" space-y-12">
                <h1 className="text-[65px] font-medium">Fonctionnalités</h1>
                <div className=" space-y-4">
                    {/* cards  */}
                    <div className="flex gap-x-4">
                        <div>
                            <div className="w-[237px] h-[81px] rounded-t-[81px] border-t-2 border-l-2 border-r-2 border-[#A95454] flex justify-center items-center"><img src={union} className="w-[22px] h-[22px]"></img></div>
                            <div className="w-[237px] h-[208px] border-b-2 border-l-2 border-r-2 flax flex-col space-y-4">
                                <h1 className="text-[18px] font-semibold text-center">Sélection de profils</h1>
                                <p className=" text-[15px] mx-2 text-center">Sélectionnez les meilleurs profils d'experts ou organisations qui vous intéressent et entrez en contact avec eux! </p>
                            </div>
                        </div>
                        <div>
                            <div className="w-[237px] h-[81px] rounded-t-[81px] border-t-2 border-l-2 border-r-2 border-[#A95454] flex justify-center items-center"><img src={union} className="w-[22px] h-[22px]"></img></div>
                            <div className="w-[237px] h-[208px] border-b-2 border-l-2 border-r-2 flax flex-col space-y-4">
                                <h1 className="text-[18px] font-semibold text-center"> Publication</h1>
                                <p className=" text-[15px] mx-2 text-center">Offres d’emploi, annonces, collaborations, événements, etc. Publiez du contenu exclusif sur votre page privée ! </p>
                            </div>
                        </div>
                        <div>
                            <div className="w-[237px] h-[81px] rounded-t-[81px] border-t-2 border-l-2 border-r-2 border-[#A95454] flex justify-center items-center"><img src={union} className="w-[22px] h-[22px]"></img></div>
                            <div className="w-[237px] h-[208px] border-b-2 border-l-2 border-r-2 flax flex-col space-y-4">
                                <h1 className="text-[18px] font-semibold text-center">TRAVEL MAP</h1>
                                <p className=" text-[15px] mx-2 text-center">Rencontrez-vous grâce à notre Travel Map! Cette fonctionnalité permet aux experts de notifier leurs déplacements sur le continent africain. Il ne reste plus qu'à planifier la rencontre! </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-x-4">
                        <div>
                            <div className="w-[237px] h-[208px] border-t-2 border-l-2 border-r-2 flax flex-col space-y-4">
                                <img src={union} className="w-[22px] h-[22px] mx-auto mt-[29px]"></img>
                                <h1 className="text-[18px] font-semibold text-center">Filtres & recherche avancée</h1>
                                <p className=" text-[15px] mx-2 text-center">Ciblez vos recherches par secteur d'activité, pays et plus encore.  </p>
                            </div>
                            <div className="w-[237px] h-[81px] rounded-b-[81px] border-b-2 border-l-2 border-r-2 border-[#A95454] flex justify-center items-center"></div>

                        </div>
                        <div>
                            <div className="w-[237px] h-[208px] border-t-2 border-l-2 border-r-2 flax flex-col space-y-4">
                                <img src={union} className="w-[22px] h-[22px] mx-auto mt-[29px]"></img>
                                <h1 className="text-[18px] font-semibold text-center">Notifications</h1>
                                <p className=" text-[15px] mx-2 text-center">Soyez directement avertis des nouvelles publications et mises à jour grâce aux notifications.</p>
                            </div>
                            <div className="w-[237px] h-[81px] rounded-b-[81px] border-b-2 border-l-2 border-r-2 border-[#A95454] flex justify-center items-center"></div>

                        </div>
                    </div>

                </div>
            </div>
            <div className="flex flex-col justify-center items-center">
                <img src={globe} className="relative mt-24 rounded-full">
                </img>

                <button className="flex justify-center items-center border border-black px-20 py-3 text-[15px] rounded-[50px] mx-[7.5rem] mt-20">Explorer la Travel Map</button>
            </div>
        </div >
    )
}

export default CardsWithEarthComp