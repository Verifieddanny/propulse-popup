"use client"
import React, { useEffect, useState } from 'react'
import { Clock, Ig, Lock } from '../icons';

function StepOne({ setNext }: { setNext: (value: boolean) => void }) {
    const [isConnected, setIsConnected] = useState<boolean>(false);
    const [isConfirmed, setIsConfirmed] = useState<boolean>(false);
    const [password, setPassword] = useState("");

    useEffect(() => {
        if (password.length > 0) {
            setNext(true)
        } else {
            setNext(false)
        }
    }, [password])

    return (
        <>
            <p className="font-black text-white text-[1.75rem] text-center mb-[0.46rem]">Connecte ton<br /> Instagram</p>
            <p className="text-[#CBD5E1] text-center mb-[2.5rem]">Pour commencer à développer ton compte<br /> Instagram, tu dois connecter ton profil à notre<br /> système de croissance.</p>

            <div className={`w-full rounded-[0.75rem] p-[0.625rem] bg-[#1E293B] border-[0.5px] border-[#334155] flex justify-between transition-all duration-300 ease-in-out ${isConnected ? "flex-col" : "flex-row items-center "}`}>
                <div className="flex gap-x-2 items-center">
                    <Ig />
                    <div className="flex flex-col">
                        <p className="font-semibold text-white">@nomdutilisateur</p>
                        <p className="text-[#CBD5E1] font-sm transition-all duration-300 ease-in-out">{isConnected ? "Entrez votre mot de passe" : "Lier ton Instagram"}</p>
                    </div>
                </div>
                {isConfirmed ? (<>
                    <div className="w-full h-[0.5px] bg-[#334155] my-[0.75rem] transition-all duration-300 ease-in-out" />
                    <div className="rounded-[0.625rem] border-[0.5px] border-[#FFBB5B] py-[0.625rem] px-[0.75rem] bg-[#34383E] flex gap-x-2">
                        <Clock />
                        <div>
                            <p className="font-semibold">Vous serez notifié par e-mail</p>
                            <p className="text-sm">Notre système est fortement sollicité. La<br /> connexion peut prendre jusqu&apos;à 1 heure.</p>
                        </div>
                    </div>
                </>) : (<>
                    {isConnected && (
                        <>
                            <div className="w-full h-[0.5px] bg-[#334155] my-[0.75rem] transition-all duration-300 ease-in-out" />
                            <div className="w-full relative mb-[0.75rem] transition-all duration-300 ease-in-out">
                                <input onChange={(e) => setPassword(e.target.value)} type="password" id="password" className="w-full h-[2.5rem] bg-[#020617] rounded-[0.5rem] border border-[#334155] placeholder:text-[#64748B] text-sm pl-[2.5rem] outline-none" placeholder="Mot de passe" />
                                <Lock className="absolute top-[0.75rem] left-[1rem]" />
                            </div>

                        </>
                    )}

                    {isConnected ? (
                        <div className="px-[1.25rem] py-[0.625rem] rounded-[0.5rem] cursor-pointer text-sm font-semibold bg-gradient-to-r from-[#B36AE9] via-[#EC6189] to-[#FCA74B] flex justify-center items-center full" onClick={() => { setIsConfirmed(true) }}>
                            {password.length > 0 ? (<p className="bg-clip-text text-transparent bg-[linear-gradient(90deg,#FFFFFF33_0%,#FFFFFFB3_25%,#FFFFFF_50%,#FFFFFFB3_75%,#FFFFFF33_100%)]">Connexion en cours...</p>) : "Confirmer"}
                        </div>
                    ) : (
                        <div className="px-[1.25rem] py-[0.625rem] rounded-[0.5rem] cursor-pointer text-sm font-semibold bg-gradient-to-r from-[#B36AE9] via-[#EC6189] to-[#FCA74B] flex justify-center items-center" onClick={() => { setIsConnected(true) }}>
                            Connector
                        </div>
                    )}
                </>)}
            </div>

        </>
    )
}

export default StepOne


