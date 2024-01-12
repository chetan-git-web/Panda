import React from 'react'
import mainfg from "../miscelenous/Frame 57.png"
import mainbg from "../miscelenous/empty-floor-front-modern-building 1.png"

const MainComp = () => {
    return (
        <div className="mx-[73px] mt-[34px]">
            <div>
                <h1 className="text-[65px]  text-center font-medium">
                    Nous réunissons experts du monde
                </h1>
                <h1 className="text-[65px]  text-center font-medium" >
                    entier et organisations en Afrique
                </h1>
            </div>
            <div className="flex justify-between mt-[42px]" >
                <div className="w-[300px] mt-[80px]">
                    <h1 className="text-[40px] font-medium text-[#A95454] opacity-20">Organisation en Afrique</h1>
                    <p className="text-base opacity-20 font-semibold">
                        Vous êtes une entreprise privée ou publique basée en Afrique et
                        vous avez du mal à recruter des profils expérimentés? Vous êtes
                        une start-up africaine et vous souhaitez faire appel aux
                        services d'un prestataire externe? Vous recherchez une expertise
                        spécifique pour réaliser un futur projet?
                    </p>
                    <p className='opacity-20 font-semibold'>
                        Grâce à son réseau, PANDA vous aide à trouver les experts dont
                        vous avez besoin!
                    </p>
                </div>
                <div >
                    <img src={mainfg} className="absolute ml-20 mt-20  h-[579px]"></img>
                    <img src={mainbg} className="h-[590px] -ml-2  overflow-hidden "></img>
                </div>
                <div className="w-[300px] mt-[150px]">
                    <h1 className="text-[40px] font-medium text-[#A95454] opacity-20">Experts</h1>
                    <p className="text-base opacity-20 font-semibold" >
                        Vous êtes un professionnel expérimenté et vous planifiez de
                        partir travailler en Afrique? Vous vous rendez souvent sur le
                        continent africain pour des raisons professionnelles et vous
                        souhaitez étendre votre réseau? Vous souhaitez partager votre
                        expertise avec des organisations africaines sans vous déplacer?
                    </p>
                    <p className='opacity-20 font-semibold'>
                        PANDA est la plateforme de networking des experts pour la
                        réalisation de leurs projets professionnels sur le continent
                        africain!
                    </p>
                </div>
            </div>
        </div>
    )
}

export default MainComp