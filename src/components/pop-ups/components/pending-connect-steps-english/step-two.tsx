import React, { useState } from 'react'
import { Clock, Ig, Lock, Next, Tiktok } from '../icons';



function StepTwo({ onHide }: { onHide: (bool: boolean) => void }) {
    const [isConnected, setIsConnected] = useState<boolean>(false);
    const [isConfirmed, setIsConfirmed] = useState<boolean>(false);
    const [emailSent, setEmailSent] = useState<boolean>(false);
    const [password, setPassword] = useState("");
    return (
        <>
            <p className="font-black text-white text-[1.75rem] text-center mb-[0.46rem]">Let&apos;s connect<br />
                your accounts</p>
            <p className="text-[#CBD5E1] text-center mb-[2.5rem]">In order to start growing your Instagram account<br /> you need to connect your profile to our growth<br /> system.</p>

            <div className='w-full rounded-[0.75rem] p-[0.625rem] bg-[#1E293B] border-[0.5px] border-[#334155] flex flex-col justify-between transition-all duration-300 ease-in-out'>
                <div className={`w-full flex justify-between transition-all duration-300 ease-in-out ${isConnected ? "flex-col" : "flex-row items-center "}`}>
                    <div className="flex gap-x-2 items-center">
                        <Ig />
                        <div className="flex flex-col">
                            <p className="font-semibold text-white">@username</p>
                            <p className="text-[#CBD5E1] font-sm transition-all duration-300 ease-in-out">{isConnected ? "Enter your password" : "Link your Instagram"}</p>
                        </div>
                    </div>
                    {isConfirmed ? (<>
                        <div className="w-full h-[0.5px] bg-[#334155] my-[0.75rem] transition-all duration-300 ease-in-out" />
                        <div className="rounded-[0.625rem] border-[0.5px] border-[#FFBB5B] py-[0.625rem] px-[0.75rem] bg-[#34383E] flex gap-x-2">
                            <Clock />
                            <div>
                                <p className="font-semibold">You will be notified by email</p>
                                <p className="text-sm">Our system is under heavy load. The<br /> connection may take up to 1 hour.</p>
                            </div>
                        </div>
                    </>) : (<>
                        {isConnected && (
                            <>
                                <div className="w-full h-[0.5px] bg-[#334155] my-[0.75rem] transition-all duration-300 ease-in-out" />
                                <div className="w-full relative mb-[0.75rem] transition-all duration-300 ease-in-out">
                                    <input onChange={(e) => setPassword(e.target.value)} type="password" id="password" className="w-full h-[2.5rem] bg-[#020617] rounded-[0.5rem] border border-[#334155] placeholder:text-[#64748B] text-sm pl-[2.5rem] outline-none" placeholder="Password" />
                                    <Lock className="absolute top-[0.75rem] left-[1rem]" />
                                </div>

                            </>
                        )}

                        {isConnected ? (
                            <div className="px-[1.25rem] py-[0.625rem] rounded-[0.5rem] cursor-pointer text-sm font-semibold bg-gradient-to-r from-[#B36AE9] via-[#EC6189] to-[#FCA74B] flex justify-center items-center full" onClick={() => { setIsConfirmed(true); setEmailSent(true) }}>
                                {password.length > 0 ? (<p className="bg-clip-text text-transparent bg-[linear-gradient(90deg,#FFFFFF33_0%,#FFFFFFB3_25%,#FFFFFF_50%,#FFFFFFB3_75%,#FFFFFF33_100%)]">Connecting...</p>) : "Confirm"}
                            </div>
                        ) : (!emailSent && (
                            <div className="px-[1.25rem] py-[0.625rem] h-[2.5rem] rounded-[0.5rem] cursor-pointer text-sm font-semibold bg-gradient-to-r from-[#B36AE9] via-[#EC6189] to-[#FCA74B] flex justify-center items-center" onClick={() => { setIsConnected(true); onHide(true) }}>
                                Connect
                            </div>
                        ))}
                    </>)}

                </div>
                {!isConnected && (
                    <>
                        <div className="w-full h-[0.5px] bg-[#334155] my-[0.75rem] transition-all duration-300 ease-in-out" />
                        <div className="w-full flex justify-between transition-all duration-300 ease-in-out">
                            <div className="flex gap-x-2 items-center">
                                <Tiktok />
                                <div className="flex flex-col">
                                    <p className="font-semibold text-white">@username</p>
                                    <p className="text-[#CBD5E1] font-sm transition-all duration-300 ease-in-out">Request beta access</p>
                                </div>

                            </div>


                            <div className="px-[1.25rem] py-[0.625rem] h-[2.5rem] rounded-[0.5rem] cursor-pointer text-sm font-semibold bg-gradient-to-r from-[#B36AE9] via-[#EC6189] to-[#FCA74B] flex justify-center items-center">
                                Request
                            </div>
                        </div>
                    </>
                )}
            </div>

            {isConnected && (<div className='mt-[0.75rem] w-full flex justify-center items-center gap-x-2 cursor-pointer' onClick={() => {
                setIsConnected(false)
                setIsConfirmed(false) // Add this line to reset confirmation state
                setPassword("") // Also clear the password for good measure
                onHide(false)
            }}>
                <Next className='w-[12px] h-[9.33px] rotate-180' />
                <p className='text-sm font-medium'>Go back</p>
            </div>)}
        </>
    )
}

export default StepTwo
