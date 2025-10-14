"use client"
import Image from "next/image";
import React, { useState } from "react";
import { ABeeZee } from "next/font/google";
import StepOne from "./components/pending-connect-steps-french/step-one";
import StepTwo from "./components/pending-connect-steps-french/step-two";
import StepThree from "./components/pending-connect-steps-french/step-three";
import { Chart, Client, Next, Star, Verification } from "./components/icons";

const abbezee = ABeeZee({
    variable: "--font-abeezee",
    subsets: ["latin"],
    weight: ["400"],
});

function PendingConnectFrench({ onClose }: { onClose: () => void }) {
    const [step, setStep] = useState<number>(1);
    const [isHidden, setIsHidden] = useState<boolean>(false);
        const [finished, setFinished] = useState<boolean>(false);
    
    return (
        <div className="fixed top-0 left-0 w-screen h-screen bg-[#000000c0] backdrop-blur-[14px] flex justify-center items-center">
            <div className="md:w-[57.5rem] w-full md:h-[38.75rem] h-full md:rounded-[1.25rem] bg-secondary flex relative overflow-hidden">
                <Image
                    src="/icons/close.svg"
                    alt="close"
                    width={12}
                    height={12}
                    className="absolute top-[1.8rem] right-[2rem] z-50 cursor-pointer"
                    onClick={onClose}
                />
                <div className="md:w-1/2 w-full h-full p-[1.5rem] md:p-[2.5rem] relative">
                    {step === 1 && (<StepOne />)}
                    {step === 2 && (<StepTwo onHide={setIsHidden} />)}
                    {step === 3 && (<StepThree setFinished={setFinished} />)}

                    {!isHidden && (<><div className="w-full flex justify-center items-center gap-x-[0.5rem] absolute bottom-[6rem] left-0">
                        <div className={`w-[3.375rem] h-[0.25rem] rounded-[0.25rem] cursor-pointer transition-colors duration-300 ease-in-out ${step === 1 ? "bg-white" : "bg-[#334155]"}`} onClick={() => setStep(1)}></div>
                        <div className={`w-[3.375rem] h-[0.25rem] rounded-[0.25rem] cursor-pointer transition-colors duration-300 ease-in-out ${step === 2 ? "bg-white" : "bg-[#334155]"}`} onClick={() => setStep(2)}></div>
                        <div className={`w-[3.375rem] h-[0.25rem] rounded-[0.25rem] cursor-pointer transition-colors duration-300 ease-in-out ${step === 3 ? "bg-white" : "bg-[#334155]"}`} onClick={() => setStep(3)}></div>
                    </div>

                        <div className="w-full absolute bottom-[3rem] md:px-[2.5rem] px-[1.5rem] left-0 flex justify-center items-center transition-all duration-300 ease-in-out cursor-pointer" onClick={() => {
                            if (step <= 3) {
                                setStep((step) => step + 1)

                            }
                        }}>
                            <div className={`w-full h-[2.5rem] rounded-[0.5rem] ${step===3? "bg-gradient-to-br opacity-35" : "bg-gradient-to-r"} ${finished && step === 3 ? "opacity-100" : ""} from-[#B36AE9] via-[#EC6189] to-[#FCA74B] flex justify-center items-center gap-x-[0.5rem]`}>

                                <p>{step===3 ? "Terminer la configuration":"Suivant"}</p>
                                {step !== 3 && <Next className="w-[12px] h-[9.33px]" />}
                            </div>
                        </div>

                        <div className={`w-full absolute bottom-[1.2rem] left-0 flex transition-all duration-300 ease-in-out ${step === 2 ? "justify-between" : "justify-center"} items-center  transition-all duration-300 ease-in-out cursor-pointer md:px-[2.5rem] px-[1.5rem]`}>
                            {step > 1 && (
                                <div className="flex gap-x-[0.5rem] items-center cursor-pointer" onClick={() => {
                                    if (step >= 1) {
                                        setStep((step) => step - 1)

                                    }
                                }}>

                                    <Next className="w-[12px] h-[9.33px] rotate-180" />
                                    <p className="font-medium text-sm text-[#CBD5E1]">Retour</p>
                                </div>
                            )}
                            {step < 3 && (
                                <div className="flex gap-x-[0.5rem] items-center cursor-pointer" onClick={() => {
                                    if (step <= 3) {
                                        setStep((step) => step + 1)

                                    }
                                }}>

                                    <p className="font-medium text-sm text-[#CBD5E1]">Passer pour le moment</p>
                                    <Next className="w-[12px] h-[9.33px]" />
                                </div>)}
                        </div></>)}
                </div>
                <div className="w-1/2 h-full relative md:block hidden">
                    <div className="absolute inset-0 overflow-hidden">
                        <Image
                            src="/images/grain-gradients/left-gradient-modal.svg"
                            alt="grainy-gradient"
                            fill
                            className="object-contain scale-170 -translate-y-[55%] -translate-x-[70%]"
                        />
                    </div>
                    <div className="absolute inset-0 overflow-hidden">
                        <Image
                            src="/images/grain-gradients/right-gradient-modal.svg"
                            alt="grainy-gradient"
                            fill
                            className="object-contain scale-200 translate-y-[20%] translate-x-[55%]"
                        />
                    </div>

                    <div className="absolute inset-0 flex justify-center items-center">
                        <Image src="/icons/chain-background.svg" alt="chain" fill className="object-contain translate-x-[55%]" />
                    </div>

                    <div className="absolute top-[4rem] right-[1.5rem] flex gap-x-2 items-center px-[1rem] py-[0.8125rem] bg-[#1E293B] rounded-[0.75rem]">
                        <Star />
                        <p className={`${abbezee.variable} font-bold`}>Note de 4,9 sur Trustpilot</p>
                    </div>

                    <Chart className="z-[100] absolute top-[9rem] left-[6rem]" />

                    <div className="absolute top-[29rem] left-[4rem] flex gap-x-2 items-center px-[1rem] py-[0.8125rem] bg-[#1E293B] rounded-[0.75rem]">
                        <Client />
                        <p className={`${abbezee.variable} font-bold`}>3 500+ clients depuis 2017</p>
                    </div>

                    <div className="absolute top-[35rem] left-[2rem] flex gap-x-[1rem] items-center">
                        <div className="flex items-center gap-x-2">
                            <Verification />
                            <p className="font-medium text-sm">Pas de bots</p>
                        </div>
                        <div className="flex items-center gap-x-2">
                            <Verification />
                            <p className="font-medium text-sm">Pas de faux abonnés</p>
                        </div>
                        <div className="flex items-center gap-x-2">
                            <Verification />
                            <p className="font-medium text-sm">Aucun risque</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default PendingConnectFrench;