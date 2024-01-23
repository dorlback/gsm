import tw from 'tailwind-styled-components'
import TimeStick from './components/TimeStick'
import DateToday from './components/DateToday'
import WorkerToday from './components/WorkerToday'

const DailyScheduleContainer = tw.div`
    h-full py-4
`

const DailyScheduleLayout = tw.div`
    relative pt-16 pl-14 h-full overflow-scroll bg-white rounded-lg
`

const NoneScrollGraphTopContainer = tw.div`
    absolute top-0 left-0 z-20 flex flex-col pl-14 w-full h-16 border-b
`

const NoneScrollGraphSideContainer = tw.div`
    absolute top-0 left-0 z-10 h-full w-14 
`

const ScrollAbleGraphContainer = tw.div`
    w-full h-full bg-green-200
`

export default function DailySchedule() {
    return(
        <>
            <DailyScheduleContainer>
                <DailyScheduleLayout>
                    <NoneScrollGraphTopContainer>
                        <DateToday>
                            
                        </DateToday>
                        <WorkerToday>

                        </WorkerToday>
                    </NoneScrollGraphTopContainer>

                    <NoneScrollGraphSideContainer>
                        <TimeStick/>
                    </NoneScrollGraphSideContainer>

                    <ScrollAbleGraphContainer>

                    </ScrollAbleGraphContainer>
                </DailyScheduleLayout>
            </DailyScheduleContainer>
        </>
    )
}