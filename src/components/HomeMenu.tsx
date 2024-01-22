import { BroomIcon, CalendarIcon, CheckIcon, UserGroupIcon } from '@/icons/Icons'
import React from 'react'
import tw from 'tailwind-styled-components'

const HomeMenyContainer = tw.div`
    grid grid-cols-2 grid-flow-row gap-4
`

const HomeMenuCardContainer = tw.a`
    flex-center
    w-full h-full
`

const HomeMenuCard = tw.div`
    relative
    flex-center
    w-full aspect-square
    bg-white
    rounded-xl
    hover:shadow
     text-slate-500
`

const IconContainer = tw.div`
    h-full max-h-[60px] mb-4
`

const HomeMenuCardText = tw.p`
    absolute bottom-4 left-0 right-0 text-center font-semibold text-sm
`

export default function HomeMenu() {
    return (
        <HomeMenyContainer>
            <HomeMenuCardContainer href='schedule'>
                <HomeMenuCard >
                    <IconContainer>
                        <CalendarIcon />
                    </IconContainer>
                    <HomeMenuCardText>일정 관리</HomeMenuCardText>
                </HomeMenuCard>
            </HomeMenuCardContainer>
            <HomeMenuCardContainer href='members'>
                <HomeMenuCard >
                    <IconContainer>
                        <UserGroupIcon />
                    </IconContainer>
                    <HomeMenuCardText>인사 관리</HomeMenuCardText>
                </HomeMenuCard>
            </HomeMenuCardContainer>
            <HomeMenuCardContainer href='territory'>
                <HomeMenuCard >
                    <IconContainer>
                        <BroomIcon />
                    </IconContainer>
                    <HomeMenuCardText>담당구역 관리</HomeMenuCardText>
                </HomeMenuCard>
            </HomeMenuCardContainer>
            <HomeMenuCardContainer href='worklist'>
                <HomeMenuCard >
                    <IconContainer>
                        <CheckIcon />
                    </IconContainer>
                    <HomeMenuCardText>업무 관리</HomeMenuCardText>
                </HomeMenuCard>
            </HomeMenuCardContainer>
        </HomeMenyContainer>
    )
}
