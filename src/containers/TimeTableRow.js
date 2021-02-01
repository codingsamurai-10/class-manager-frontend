import TimeTableCell from './TimeTableCell';

export default function TimeTableRow(props) {
    const times = [];
    const numberOfPeriods = props.data.length;
    for (let i = 0; i < numberOfPeriods; i++) {
        const currentPeriod = props.data[i];
        if (i === 0) {
            if (currentPeriod.start > 8) {
                times.push({
                    name: '',
                    start: 8,
                    end: props.data[0].start
                });
            }
        }
        times.push({
            name: currentPeriod.name,
            start: currentPeriod.start,
            end: currentPeriod.end
        });
        let nextPeriodStartTime = null;
        if(i + 1 < numberOfPeriods) nextPeriodStartTime = props.data[i + 1].start;
        else nextPeriodStartTime = 17;
        if(nextPeriodStartTime !== currentPeriod.end) {
            times.push({
                name: '',
                start: currentPeriod.end,
                end: nextPeriodStartTime
            });
        }
    }
    console.log(times);
    return (
        <div className="time-table-row">
            {times.map(cell => (
                <TimeTableCell data={cell} key={cell.start} />
            ))}
        </div>
    )
}
