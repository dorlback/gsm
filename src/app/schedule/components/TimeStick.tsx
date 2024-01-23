export default function TimeStick() {

    const TimeList = [];

    // Generate time intervals from 00:00 AM to 23:00 PM
    for (let hour = 0; hour < 24; hour++) {
        const time = `${hour.toString().padStart(2, '0')}:00`;
        const dayPeriod = hour < 12 ? 'AM' : 'PM';

        TimeList.push({ time, dayPeriod });
    }

    return (
        <>
            <div className="w-full pt-16">
                {TimeList.map((time, index) => (
                    <>
                        <div key={index} className="my-2 w-full h-28 flex flex-col items-center">
                            <p className="flex-center text-slate-700">{time.time}</p>
                            <p className="flex-center text-slate-700 text-sm font-bold">{time.dayPeriod}</p>
                            <div className="my-2 w-1 flex-1 bg-slate-400" />
                        </div>  
                    </>
                ))}
            </div>
        </>
    )
}