import { XmarkIcon } from '@/icons/Icons'
import React, { useState, useRef, useEffect } from 'react';
import tw from 'tailwind-styled-components'

interface iOffCanvas {
    isOpen: boolean
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

interface IUserInformation {
    title: string
    content: string
}

const OffCanvasContainer = tw.div`
    fixed top-0 right-0 z-50 
    w-screen h-full 
    bg-slate-200 
    transform transition-transform duration-500 ease-in-out
`

const OffCanvasContentContainer = tw.div`
    flex flex-col w-full h-full relative
`

const OffCanvasCloseButton = tw.button`
    z-50 absolute top-2 right-2 h-8 text-slate-600
`

const UserIconContainer = tw.div`
    relative flex-center
    px-6 pb-12 pt-6 mb-4 rounded-b-xl
    bg-slate-100
    shadow-md
`

const UserInfoContainer = tw.div`
    flex-1 w-full px-4 mb-4 overflow-auto
`

const ButtonContainer = tw.div`
    px-4 space-y-4 mb-4
`

const UserInformation = ({ title, content }: IUserInformation) => {
    return (
        <div className='w-full h-12'>
            <p className='text-slate-400 text-sm'>{title}</p>
            <p className='text-slate-600 text-lg'>{content}</p>
        </div>
    )
}

export default function OffCanvas({ isOpen, setIsOpen }: iOffCanvas) {

    const offCanvasClasses = isOpen ? 'translate-x-0' : 'translate-x-full'

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }, [isOpen]);

    return (
        <OffCanvasContainer className={`${offCanvasClasses}`}>
            <OffCanvasContentContainer>
                <OffCanvasCloseButton onClick={() => setIsOpen(false)}>
                    <XmarkIcon />
                </OffCanvasCloseButton>

                <UserIconContainer>
                    <div className='bg-slate-500 h-24 mb-6 aspect-square rounded-full' />
                    <div className='absolute bottom-4 flex flex-col items-center'>
                        <p className='text-slate-500 text-lg font-semibold'>백승헌</p>
                        <p className='bg-red-200 rounded-md px-2 text-slate-500 text-xs font-semibold'>스토어 매니저</p>
                    </div>
                </UserIconContainer>

                <UserInfoContainer>
                    <div className='w-full h-full space-y-6'>
                        <UserInformation title={"이름"} content={"백승헌"} />
                        <UserInformation title={"전화번호"} content={"010-5577-7810"} />
                        <UserInformation title={"이메일"} content={"bsh7829@gmail.com"} />
                    </div>
                </UserInfoContainer>

                <ButtonContainer>
                    <button className='w-full h-12 bg-slate-400 text-slate-50 rounded-xl'>설정</button>
                    <button className='w-full h-12 bg-red-400 text-slate-50 rounded-xl'>로그아웃</button>
                </ButtonContainer>

            </OffCanvasContentContainer>
        </OffCanvasContainer>
    )
}