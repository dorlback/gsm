'use client'
import { MenuIcon } from '@/icons/Icons'
import React, { useState } from 'react'
import OffCanvas from './OffCanvas'


export default function Navigation() {
    const [isOffCanvasOpen, setIsOffCanvasOpen] = useState(false)


    return (
        <>
            <nav className='flex text-slate-700 items-center justify-between w-full px-4 py-3 h-12'>
                <a href='/' className='font-bold text-blue-400'>JumpoM</a>
                <button className='h-full' onClick={() => { setIsOffCanvasOpen(true) }}>
                    <MenuIcon />
                </button>
            </nav>
            <OffCanvas isOpen={isOffCanvasOpen} setIsOpen={setIsOffCanvasOpen} />
        </>
    )
}
