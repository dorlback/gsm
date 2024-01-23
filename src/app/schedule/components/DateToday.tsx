export default function DateToday() {
    const today = new Date();
    const formattedDate = today.toLocaleDateString('ko-KR', {
        weekday: 'short',
        month: 'long',
        day: 'numeric',
      });

    return (
        <>
            <div className="w-full flex-1 flex items-center justify-center space-x-4">
                <p className="text-xs text-slate-400">{formattedDate}</p>
                <p className="text-sm font-semibold text-slate-400">{getPreviousDate(today)}</p>
                <p className="text-xs text-slate-400">{getNextDate(today)}</p>
            </div>    
        </>
    )
}

function getPreviousDate(date: Date): string {
    const previousDate = new Date(date);
    previousDate.setDate(date.getDate() - 1);
    return previousDate.toLocaleDateString('ko-KR', { weekday: 'short', month: 'numeric', day: 'numeric' });
}

function getNextDate(date: Date): string {
    const nextDate = new Date(date);
    nextDate.setDate(date.getDate() + 1);
    return nextDate.toLocaleDateString('ko-KR', { weekday: 'short', month: 'numeric', day: 'numeric' });
}