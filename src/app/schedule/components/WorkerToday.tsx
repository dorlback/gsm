
interface IWorkerLabel {
    name: string;
    color: string;

}

const WorkerLabel = ({ name, color }: IWorkerLabel) => {
    return (
        <div className="h-full flex-1 min-w-20 flex-center p-0.5">
            <p className={`${color} text-sm text-slate-800 px-1 rounded-xl`}>{name}</p>
        </div>
    )
}

export default function WorkerToday() {
    return (
        <>
            <div className="flex-1 flex">
                <WorkerLabel name={"백승헌"} color={"bg-green-100"} />
                <WorkerLabel name={"홍길동"} color={"bg-red-100"} />
                <WorkerLabel name={"김길동"} color={"bg-blue-100"} />
                <WorkerLabel name={"주길동"} color={"bg-amber-100"} />
                <WorkerLabel name={"주길동"} color={"bg-green-100"} />
            </div>
        </>
    )
}