import React from 'react'

const CardsComp = () => {
    return (
        <div className="mt-[16rem]  px-20">
            <h1 className="text-[65px] font-medium">Missions de PANDA</h1>
            <div className="flex justify-between gap-4 mt-10">
                <div className="w-[292px] h-[318px] border-solid border-2 border-[#A95454] rounded-t-[108px] flex flex-col space-y-4">
                    <h2 className="mx-auto mt-4">01</h2>
                    <h1 className="mx-auto text-[40px] font-medium">Networking</h1>
                    <p className=" text-center mx-3">Faciliter la mise en réseau “networking” entre les organisations situées en Afrique et les experts et entrepreneurs africains et internationaux.</p>
                </div>
                <div className="w-[292px] h-[318px] border-solid border-2 border-[#A95454] rounded-t-[108px] flex flex-col space-y-4">
                    <h2 className="mx-auto mt-4">01</h2>
                    <h1 className="mx-auto text-[40px] font-medium">Partage</h1>
                    <p className=" text-center mx-3">Promouvoir le partage de connaissances et d’expertises.</p>
                </div>
                <div className="w-[292px] h-[318px] border-solid border-2 border-[#A95454] rounded-t-[108px] flex flex-col space-y-4">
                    <h2 className="mx-auto mt-4">01</h2>
                    <h1 className="mx-auto text-[40px] font-medium">Recrutement</h1>
                    <p className=" text-center mx-3">Augmenter la visibilité des offres d’emploi en Afrique et faciliter le recrutement de professionnels  qualifiés.</p>
                </div>
                <div className="w-[292px] h-[318px] border-solid border-2 border-[#A95454] rounded-t-[108px] flex flex-col space-y-4">
                    <h2 className="mx-auto mt-4">01</h2>
                    <h1 className="mx-auto text-[40px] font-medium">Collaborations</h1>
                    <p className=" text-center mx-3"> Créer des opportunités de collaborations en Afrique.</p>
                </div>
                <div className="w-[292px] h-[318px] border-solid border-2 border-[#A95454] rounded-t-[108px] flex flex-col space-y-4">
                    <h2 className="mx-auto mt-4">01</h2>
                    <h1 className="mx-auto text-[40px] font-medium">Evénements</h1>
                    <p className=" text-center mx-3">Augmenter la visibilité des évenements autour du “Business in Africa”.</p>
                </div>

            </div>
        </div>
    )
}

export default CardsComp