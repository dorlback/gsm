'use client'
import React, { useState, useEffect } from 'react'
import tw from 'tailwind-styled-components'
import DailySchedule from './DailySchedule'
import WeeklySchedule from './WeeklySchedule'

const ScheduleContainer = tw.div`
    flex flex-col w-full h-full px-4 
`

const ScheduleSelectContainer = tw.div`
    relative flex w-full border border-slate-500 rounded-md overflow-hidden
`

const ScheduleGraphContainer = tw.div`
    w-full flex-1 overflow-hidden
`

const ScheduleState = {
    Today: 'today',
    Week: 'week'
}

export default function SchedulePage() {
    const [scheduleState, setScheduleState] = useState(ScheduleState.Today)

    return (
        <ScheduleContainer>
            <ScheduleSelectContainer>
                <div className={`absolute top-0 left-0 w-1/2 h-full bg-slate-500 rounded transition-transform duration-500 ${scheduleState == ScheduleState.Week ? "translate-x-full" : ""}`} />
                <button
                    className={`flex-1 p-2 text-sm font-semibold ${scheduleState === ScheduleState.Today ? "text-slate-50" : "text-slate-500"} duration-500 z-10`}
                    onClick={() => setScheduleState(ScheduleState.Today)}
                >
                    일일 일정
                </button>
                <button
                    className={`flex-1 p-2 text-sm font-semibold ${scheduleState === ScheduleState.Week ? "text-slate-50" : "text-slate-500"} duration-500 z-10`}
                    onClick={() => setScheduleState(ScheduleState.Week)}
                >
                    주간 일정
                </button>
            </ScheduleSelectContainer>

            <ScheduleGraphContainer>
                {scheduleState === ScheduleState.Today ? (
                    <DailySchedule />
                ) : (
                    <WeeklySchedule />
                )}
            </ScheduleGraphContainer>


        </ScheduleContainer>
    )
}
