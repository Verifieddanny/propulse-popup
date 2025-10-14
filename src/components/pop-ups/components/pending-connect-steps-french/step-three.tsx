"use client"
import React, { useEffect, useState } from 'react'
import { CrossAdd, IGInputIcon } from '../icons'
import Image from 'next/image'

function StepThree({setFinished}: {setFinished: (value: boolean) => void}) {
    const [accounts, setAccounts] = useState<string[]>([])
    const [user, setUser] = useState<string>("")

    useEffect(() => {
            if(accounts.length > 0) {
                setFinished(true)
            } else{
                setFinished(false)
            }
        }, [accounts])
    

    const handleAddAccount = () => {
        if (!user.trim()) return; // Prevent empty strings

        const normalizedUser = user.startsWith("@") ? user : `@${user}`;

        // Prevent duplicates
        if (!accounts.includes(normalizedUser)) {
            setAccounts(prevAccounts => [...prevAccounts, normalizedUser]);
        }

        setUser(""); // Clear input after adding
    }

    const handleRemoveAccount = (accountToRemove: string) => {
        setAccounts(prevAccounts => prevAccounts.filter(account => account !== accountToRemove));
    }

    const getAvatarSrc = (account: string) => {
        // Use a consistent avatar based on the account name
        const avatarIndex = account.length % 4; // 0-3 based on string length
        return `/images/avatar/${avatarIndex !== 0 ? avatarIndex : 1}.png`;
    }

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            handleAddAccount();
        }
    }

    return (
        <>
            <p className="font-black text-white text-[1.75rem] text-center mb-[0.46rem]">Notez les concurrents<br /> & profils similaires</p>
            <p className="text-[#CBD5E1] text-center mb-[1.75rem]">Veuillez ajouter entre 2 et 5 comptes concurrents<br /> ou similaires au vôtre.</p>

            <p className='font-semibold mb-[0.75rem]'>Quels comptes Instagram sont similaires au vôtre?</p>

            {accounts.length > 0 && (
                <div className={`max-h-[8.75rem] overflow-y-auto no-scroll ${accounts.length > 3 ? 'pr-2' : ''}`}>
                    {accounts.map(account => (
                        <div
                            key={account}
                            className='bg-[#1E293B] w-full h-[2.5rem] rounded-[0.5rem] flex justify-between items-center px-[0.625rem] py-[0.375rem] mb-[0.25rem]'
                        >
                            <div className='flex items-center gap-2'>
                                <Image
                                    src={getAvatarSrc(account)}
                                    alt={account}
                                    width={30}
                                    height={34}
                                    quality={90}
                                    className='rounded-full'
                                />
                                <p className="truncate">{account}</p>
                            </div>

                            <CrossAdd
                                className='rotate-45 cursor-pointer'
                                color='#EF4444'
                                onClick={() => handleRemoveAccount(account)}
                            />
                        </div>
                    ))}
                </div>
            )}

            <div className="w-full relative mb-[0.25rem] transition-all duration-300 ease-in-out">
                <input
                    value={user}
                    onChange={(e) => setUser(e.target.value)}
                    onKeyDown={handleKeyPress}
                    type="text"
                    id="username"
                    className="w-full h-[2.5rem] bg-[#020617] rounded-[0.5rem] border border-[#334155] placeholder:text-[#64748B] text-sm pl-[2.5rem] outline-none"
                    placeholder="@nomdutilisateur..."
                />
                <IGInputIcon className="absolute top-[0.45rem] left-[0.75rem]" />
            </div>

            <div
                className={`w-full cursor-pointer duration-300 transition-colors ease-in-out h-[2.5rem] rounded-[0.5rem] flex justify-center items-center gap-x-2 ${user.trim()
                        ? 'bg-[#334155] hover:bg-[#33415533]'
                        : 'bg-[#33415533] cursor-not-allowed opacity-50'
                    }`}
                onClick={handleAddAccount}
            >
                <CrossAdd color='white' />
                <p className='text-sm font-medium'>Ajouter un compte</p>
            </div>


        </>
    )
}

export default StepThree;