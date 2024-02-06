'use client'
import React, { useEffect, useState } from 'react'
import tw from 'tailwind-styled-components'
import { BroomIcon, CalendarIcon, CheckIcon, HomeIcon, UserGroupIcon, UserIcon } from '@/icons/Icons'

const BottomNavigationContainer = tw.div`
    z-50
    fixed flex bottom-0 left-0 right-0
    w-full h-14
    border-t
    rounded-t-xl
    bg-white
`

const BottomNavigationButton = tw.a`
    flex-center h-full flex-1 p-4 text-slate-400
`

export default function BottomNavigation() {

    const [currentPath, setCurrentPath] = useState('');

    useEffect(() => {
        // 현재 경로를 클라이언트 사이드에서 업데이트
        setCurrentPath(window.location.pathname);
    }, []);

    return (
        <BottomNavigationContainer>
            <BottomNavigationButton href='/' className={` ${currentPath === '/' ? "text-blue-400" : ""}`}><HomeIcon /></BottomNavigationButton>
            <BottomNavigationButton href='/schedule' className={` ${currentPath === '/schedule' ? "text-blue-400" : ""}`}><CalendarIcon /></BottomNavigationButton>
            <BottomNavigationButton href='/members' className={` ${currentPath === '/members' ? "text-blue-400" : ""}`}><UserGroupIcon /></BottomNavigationButton>
            <BottomNavigationButton href='/territory' className={` ${currentPath === '/territory' ? "text-blue-400" : ""}`} ><BroomIcon /></BottomNavigationButton>
            <BottomNavigationButton href='/worklist' className={` ${currentPath === '/worklist' ? "text-blue-400" : ""}`}><CheckIcon /></BottomNavigationButton>
        </BottomNavigationContainer>
    )
}
