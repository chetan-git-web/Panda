import { Typography } from "@material-tailwind/react";
import union from "../miscelenous/Union.svg";


const SITEMAP = [
    {
        title: "Page d'accueil",
        links: ["Missions de PANDA", "Fonctionnalités", "Découvrez les experts", "Découvrez les organisations en Afrique", "Offres d'emploi", "Evénements à venir", "Témoignages", "Les fondateurs"],
    },
    {
        title: "pour les EXPERTS",
        links: ["Découvrez les organisations en Afrique", "Offres d'emploi", "Travel Map", "Evénements à venir"],
    },
    {
        title: "pour les organisations en Afrique",
        links: ["Découvrez les experts", "Travel Map", "Evénements à venir"],
    },
    {
        title: "Contact ",
        links: ["Nous contacter"],
    },
];


export function FooterWithSitemap() {
    return (
        <footer className="relative w-full">
            <div className="w-full   px-20">
                <div className="mx-auto grid w-full grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:grid-cols-4">
                    {SITEMAP.map(({ title, links }, key) => (
                        <div key={key} className="w-full justify-between flex">


                            <ul className="space-y-1">
                                <Typography
                                    variant="small"
                                    color="blue-gray"
                                    className="mb-4 font-bold text-[15px] uppercase opacity-50"
                                >
                                    {title}
                                </Typography>
                                {links.map((link, key) => (
                                    <Typography key={key} as="li" color="blue-gray" className="font-normal">
                                        <a
                                            href="#"
                                            className="inline-block py-1 pr-2 transition-transform hover:scale-105 text-[13px] "
                                        >
                                            · {link}
                                        </a>
                                    </Typography>
                                ))}
                            </ul>

                        </div>
                    ))}
                </div>
                <div className="flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between">
                    <h1 className="  text-[39.23px]  flex items-center">
                        P
                        <div className="w-[24.85px] h-[27.95px] border-4 border-solid border-black  rounded-t-2xl flex items-center">
                            <img src={union} className="w-9 h-9"></img>
                        </div>
                        NDA
                    </h1>
                    <Typography
                        variant="small"
                        className="mb-4 text-center font-normal text-blue-gray-900 md:mb-0"
                    >
                        <a href="https://material-tailwind.com/">© 2022 </a>. Tous droits réservés
                    </Typography>

                    <div className="flex gap-10 text-blue-gray-900 sm:justify-center">

                        <Typography as="a" href="#" className="opacity-80 transition-opacity hover:opacity-100">
                            <svg width="7" height="16" viewBox="0 0 7 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M1.55073 15.0352V7.53457H0V4.94973H1.55073V3.3978C1.55073 1.28908 2.42638 0.0351562 4.91418 0.0351562H6.98534V2.62029H5.69072C4.72228 2.62029 4.65821 2.98153 4.65821 3.65569L4.65469 4.94943H7L6.72556 7.53428H4.65469V15.0352H1.55073Z" fill="#1F1F1F" />
                            </svg>

                        </Typography>

                        <Typography as="a" href="#" className="opacity-80 transition-opacity hover:opacity-100">
                            <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M3 14.0352H0V5.03516H3V14.0352Z" fill="#1F1F1F" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M1.49108 3.03516H1.47404C0.578773 3.03516 0 2.36818 0 1.53464C0 0.683462 0.5964 0.0351562 1.50865 0.0351562C2.42091 0.0351562 2.98269 0.683462 3 1.53464C3 2.36818 2.42091 3.03516 1.49108 3.03516Z" fill="#1F1F1F" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.9999 14.0349H11.0519V9.33051C11.0519 8.14886 10.6253 7.34254 9.55814 7.34254C8.74368 7.34254 8.25855 7.88612 8.04549 8.41114C7.96754 8.5993 7.94841 8.86146 7.94841 9.12426V14.0352H5C5 14.0352 5.03886 6.06699 5 5.24187H7.94841V6.48737C8.33968 5.88864 9.04046 5.03516 10.6057 5.03516C12.5456 5.03516 14 6.29221 14 8.99312L13.9999 14.0349Z" fill="#1F1F1F" />
                            </svg>

                        </Typography>

                        <Typography as="a" href="#" className="opacity-80 transition-opacity hover:opacity-100 mt-1">
                            <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M6.31224 2.96133L6.34042 3.43711L5.87076 3.37885C4.16119 3.15552 2.66767 2.39816 1.39959 1.12617L0.779637 0.495035L0.619952 0.961106C0.281797 2.00006 0.497841 3.09727 1.20233 3.83521C1.57806 4.24302 1.49352 4.30128 0.84539 4.05854C0.619952 3.98086 0.422695 3.9226 0.403908 3.95173C0.338156 4.0197 0.563593 4.90329 0.742064 5.25285C0.986288 5.73834 1.48413 6.21412 2.02893 6.4957L2.4892 6.71903L1.9444 6.72874C1.41838 6.72874 1.39959 6.73845 1.45595 6.94235C1.64381 7.57349 2.38588 8.24347 3.21248 8.53476L3.79486 8.73867L3.28763 9.04938C2.53617 9.49604 1.65321 9.74849 0.770244 9.76791C0.347549 9.77762 0 9.81646 0 9.84559C0 9.94269 1.14597 10.4864 1.81289 10.7001C3.81365 11.3312 6.19013 11.0593 7.97484 9.98153C9.24293 9.21445 10.511 7.69001 11.1028 6.21412C11.4222 5.42762 11.7415 3.99057 11.7415 3.30117C11.7415 2.85452 11.7697 2.79626 12.2957 2.26222C12.6057 1.95151 12.8969 1.61166 12.9532 1.51457C13.0472 1.33008 13.0378 1.33008 12.5587 1.49515C11.7603 1.78644 11.6476 1.7476 12.0421 1.31066C12.3333 0.999946 12.6808 0.436776 12.6808 0.271709C12.6808 0.24258 12.5399 0.291129 12.3803 0.378517C12.2112 0.475616 11.8355 0.621263 11.5537 0.708651L11.0464 0.873718L10.5862 0.553294C10.3325 0.378517 9.9756 0.184321 9.78773 0.126062C9.30868 -0.0098753 8.57601 0.00954437 8.14392 0.164902C6.96977 0.601844 6.2277 1.72818 6.31224 2.96133Z" fill="#1F1F1F" />
                            </svg>

                        </Typography>
                    </div>
                </div>
            </div>
        </footer>
    );
}