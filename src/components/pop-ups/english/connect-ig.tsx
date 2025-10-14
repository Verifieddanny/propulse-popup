"use client"
import Image from "next/image";
import React, { useState } from "react";
import { ABeeZee } from "next/font/google";

import { Chart, Client, Next, Star, Verification } from "../components/icons";
import StepOne from "../components/connect-ig-steps-english/step-one";

const abbezee = ABeeZee({
    variable: "--font-abeezee",
    subsets: ["latin"],
    weight: ["400"],
});

function ConnectIGEnglish({ onClose }: { onClose: () => void }) {
    const [next, setNext] = useState<boolean>(false);
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
                    <StepOne setNext={setNext} />

                    <div className="w-full flex justify-center items-center gap-x-[0.5rem] absolute bottom-[5rem] left-0">
                        <div className="w-[3.375rem] h-[0.25rem] rounded-[0.25rem] cursor-pointer transition-colors duration-300 ease-in-out bg-white" />
                        <div className="w-[3.375rem] h-[0.25rem] rounded-[0.25rem] cursor-pointer transition-colors duration-300 ease-in-out bg-[#334155]" />
                        <div className="w-[3.375rem] h-[0.25rem] rounded-[0.25rem] cursor-pointer transition-colors duration-300 ease-in-out bg-[#334155]" />
                    </div>

                    <div className="w-full absolute bottom-[2.75rem] left-0 flex justify-center items-center gap-x-[0.5rem] transition-all duration-300 ease-in-out cursor-pointer">
                        <p>{next ? "Next" : "I'll do it later"}</p>
                        <Next />
                    </div>
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
                        <p className={`${abbezee.variable} font-bold`}>4.9 rating on Trustpilot</p>
                    </div>

                    <Chart className="z-[100] absolute top-[9rem] left-[6rem]" />

                    <div className="absolute top-[29rem] left-[4rem] flex gap-x-2 items-center px-[1rem] py-[0.8125rem] bg-[#1E293B] rounded-[0.75rem]">
                        <Client />
                        <p className={`${abbezee.variable} font-bold`}>3,500+ clients since 2017</p>
                    </div>

                    <div className="absolute top-[35rem] left-[6rem] flex gap-x-[1rem] items-center">
                        <div className="flex items-center gap-x-2">
                            <Verification />
                            <p className="font-medium text-sm">No bots</p>
                        </div>
                        <div className="flex items-center gap-x-2">
                            <Verification />
                            <p className="font-medium text-sm">No fake followers</p>
                        </div>
                        <div className="flex items-center gap-x-2">
                            <Verification />
                            <p className="font-medium text-sm">No risk</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default ConnectIGEnglish;







