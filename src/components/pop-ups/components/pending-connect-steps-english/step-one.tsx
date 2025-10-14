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
            <p className="font-black text-white text-[1.75rem] text-center mb-[0.46rem]">Let&apos;s setup<br />
                your account</p>
            <p className="text-[#CBD5E1] text-center mb-[1rem]">It takes you just a minute to start your<br />
                Instagram followers growth with Gainsty.</p>

            <p className='font-semibold mb-[0.25rem]'>What do you more prefer to get?</p>

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
                                <p className='text-xs text-[#CBD5E1]'>More likes, comments and reach on posts</p>
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
                                <p className='font-semibold'>Followers</p>
                                <p className='text-xs text-[#CBD5E1]'>More genuine, targeted followers</p>
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
                                <p className='font-semibold'>Followers & Engagement</p>
                                <p className='text-xs text-[#CBD5E1]'>Both likes, reach and followers</p>
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