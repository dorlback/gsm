import Image from "next/image";
import tw from 'tailwind-styled-components'
import HomeMenu from "../components/HomeMenu";

const PageContainer = tw.div`
  px-4 space-y-4 h-full
`

const WorkerContainer = tw.div`
  relative
  flex-center
  h-28 rounded-xl
bg-white
`

const UserCardContainer = tw.div`
  w-full flex space-x-4 px-4
`

const UserCardIcon = tw.div`
  w-12 aspect-square rounded-full bg-gray-500
`

const UserInfoContainer = tw.div`
  flex-1 flex justify-center flex-col space-y-1
`

const UserWorkTimeContainer = tw.div`
  flex justify-center flex-col space-y-2
`

export default function Home() {
  return (
    <>
      <PageContainer>
        <WorkerContainer>
          <p className="absolute left-4 top-2 text-slate-500 font-semibold text-xs">근무자</p>
          <UserCardContainer>

            <UserCardIcon></UserCardIcon>

            <UserInfoContainer>
              <p className="text-sm text-slate-900 font-semibold">백승헌</p>
              <p className="text-sm text-slate-600">010-5577-7810</p>
            </UserInfoContainer>

            <UserWorkTimeContainer>
              <p className="bg-blue-100 px-2 rounded-lg text-sm text-slate-600">AM 09:00</p>
              <p className="bg-red-100 px-2 rounded-lg text-sm text-slate-6000">PM 15:00</p>
            </UserWorkTimeContainer>

          </UserCardContainer>
          {/* <p className="text-blue-600 font-bold">백승헌</p> */}
        </WorkerContainer>
        <HomeMenu />
      </PageContainer>
    </>
  );
}
