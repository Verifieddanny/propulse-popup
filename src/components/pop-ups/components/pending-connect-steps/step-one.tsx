"use client"
import React, { useState } from 'react'
import { CheckActive, CheckInactive, EngageIcon, Followers, GrowthIcons } from '../icons';

function StepOne() {
    const [selected, setSelected] = useState<string>('');
    
    const handleSelect = (option: string) => {
        setSelected(selected === option ? '' : option);
    };

    return (
        <>
            <p className="font-black text-white text-[1.75rem] text-center mb-[0.46rem]">Configurons votre compte</p>
            <p className="text-[#CBD5E1] text-center mb-[1.75rem]">Cela ne prend qu&apos;une minute pour commencer<br /> la croissance de vos abonnés Instagram avec<br /> Gainsty.</p>

            <p className='font-semibold mb-[0.75rem]'>Qu&apos;est-ce que vous préférez le plus obtenir?</p>

            <div className='flex flex-col'>
                <div className={`w-full ${selected === 'engagement' ? "bg-gradient-to-r from-[#B36AE9] via-[#EC6189] to-[#FCA74B]" : "bg-[#334155]"} p-[1px] h-[4.875rem] my-[0.5rem] text-white duration-300 hover:bg-gradient-to-l ease-in-out cursor-pointer rounded-[0.75rem] group`}>
                    <div 
                        className="h-full px-[1.375rem] py-[0.75rem] rounded-[0.75rem] bg-gray-900 transition duration-300 ease-in-out group-hover:bg-gradient-to-br group-hover:from-gray-700 group-hover:to-gray-900 group-hover:transition group-hover:duration-300 group-hover:ease-in-out flex justify-between items-center" 
                        onClick={() => handleSelect('engagement')}
                    >
                        <div className='flex items-center gap-x-2'>
                            <EngageIcon />
                            <div className='flex flex-col'>
                                <p className='font-semibold'>Engagement</p>
                                <p className='text-xs text-[#CBD5E1]'>Plus de likes, de commentaires et de portée sur<br /> vos publications</p>
                            </div>
                        </div>
                        {selected === 'engagement' ? <CheckActive /> : <CheckInactive />}
                    </div>
                </div>
                
                <div className={`w-full ${selected === 'followers' ? "bg-gradient-to-r from-[#B36AE9] via-[#EC6189] to-[#FCA74B]" : "bg-[#334155]"} p-[1px] my-[0.5rem] h-[4.875rem] text-white duration-300 hover:bg-gradient-to-l ease-in-out cursor-pointer rounded-[0.75rem] group`}>
                    <div 
                        className="h-full  px-[1.375rem] py-[0.75rem] rounded-[0.75rem] bg-gray-900 transition duration-300 ease-in-out group-hover:bg-gradient-to-br group-hover:from-gray-700 group-hover:to-gray-900 group-hover:transition group-hover:duration-300 group-hover:ease-in-out flex justify-between items-center" 
                        onClick={() => handleSelect('followers')}
                    >
                        <div className='flex items-center gap-x-2'>
                            <Followers />
                            <div className='flex flex-col'>
                                <p className='font-semibold'>Abonnés</p>
                                <p className='text-xs text-[#CBD5E1]'>Plus d&apos;abonnés authentiques et ciblés</p>
                            </div>
                        </div>
                        {selected === 'followers' ? <CheckActive /> : <CheckInactive />}
                    </div>
                </div>
                
                <div className={`w-full ${selected === 'growth' ? "bg-gradient-to-r from-[#B36AE9] via-[#EC6189] to-[#FCA74B]" : "bg-[#334155]"} p-[1px] my-[0.5rem] h-[4.875rem] text-white duration-300 hover:bg-gradient-to-l ease-in-out cursor-pointer rounded-[0.75rem] group`}>
                    <div 
                        className="h-full  px-[1.375rem] py-[0.75rem] rounded-[0.75rem] bg-gray-900 transition duration-300 ease-in-out group-hover:bg-gradient-to-br group-hover:from-gray-700 group-hover:to-gray-900 group-hover:transition group-hover:duration-300 group-hover:ease-in-out flex justify-between items-center" 
                        onClick={() => handleSelect('growth')}
                    >
                        <div className='flex items-center gap-x-2'>
                            <GrowthIcons />
                            <div className='flex flex-col'>
                                <p className='font-semibold'>Abonnés & Engagement</p>
                                <p className='text-xs text-[#CBD5E1]'>À la fois des likes, de la portée et des abonnés</p>
                            </div>
                        </div>
                        {selected === 'growth' ? <CheckActive /> : <CheckInactive />}
                    </div>
                </div>
            </div>
        </>
    )
}

export default StepOne