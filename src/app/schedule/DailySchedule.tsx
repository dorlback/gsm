'use client'
import tw from 'tailwind-styled-components'
import TimeStick from './components/TimeStick'
import DateToday from './components/DateToday'
import WorkerToday from './components/WorkerToday'
import { useEffect, useState } from 'react'

const DailyScheduleContainer = tw.div`
    h-full py-4
`

const DailyScheduleLayout = tw.div`
    relative h-full overflow-scroll bg-white rounded-lg
`

const NoneScrollGraphTopDateContainer = tw.div`
    sticky top-0 left-0 z-20 bg-white flex flex-col pl-14 h-8
`

const NoneScrollGraphTopWorkerContainer = tw.div`
    sticky top-8 z-20  flex flex-col pl-14 h-8 
`

const NoneScrollGraphSideContainer = tw.div`
    flex z-10 bg-white
`

const ScrollAbleGraphContainer = tw.div`
    w-full h-full
`
interface IScrollAbleGraphTopDateContainer {
    timeRange: {},
    top: number,
    stickHeight: number,
    color: string
}

const ScrollAbleGraphTopDateContainer = ({ timeRange, top, stickHeight, color }: IScrollAbleGraphTopDateContainer) => {
    // 시간당 7rem
    // 복수로 생기는 경우도 생각 해야함
    // 지금 top 으로 주는데, 이걸 시간 으로 받아서 내부적으로 top 과 stickHeight 를 계산해서 주는게 좋을듯

    // 고려할점: 타임레인지가 00시를 넘어가는 경우, 2개의 그래프가 생김
    // 하루에 2번 근무 하는경우도 있음

    useEffect(() => {
        // 일단 반복문은 나중에 생각 하고,
        // 시작시간을 00시부터 몇 시간 떨어져 있는지 구하고
        // 근무시간을 시작 시간부터 끝시간까지 몇시간 떨어져 있는지 구하기


    }, [])

    return (
        <>
            <div className={`flex-1 min-w-20 px-3.5`} style={{ marginTop: `calc(7rem*${top})`, height: `calc(7rem*${stickHeight})` }}>
                <div className={`h-full w-full ${color} rounded-full`}>
                </div>
            </div>
        </>
    )
}

export default function DailySchedule() {
    return (
        <>
            <DailyScheduleContainer>
                <DailyScheduleLayout className="no-bounce">
                    <NoneScrollGraphTopDateContainer>
                        <DateToday />
                    </NoneScrollGraphTopDateContainer>
                    <NoneScrollGraphTopWorkerContainer>
                        <WorkerToday />
                    </NoneScrollGraphTopWorkerContainer>
                    <NoneScrollGraphSideContainer>
                        <TimeStick />

                        <ScrollAbleGraphTopDateContainer top={0} stickHeight={1} color={"bg-green-200"} />

                        <ScrollAbleGraphTopDateContainer top={1} stickHeight={2} color={"bg-red-200"} />

                        <ScrollAbleGraphTopDateContainer top={7} stickHeight={3} color={"bg-blue-200"} />

                        <ScrollAbleGraphTopDateContainer top={3} stickHeight={4} color={"bg-amber-200"} />

                        <ScrollAbleGraphTopDateContainer top={10} stickHeight={5} color={"bg-green-200"} />

                    </NoneScrollGraphSideContainer>

                </DailyScheduleLayout>
            </DailyScheduleContainer >
        </>
    )
}