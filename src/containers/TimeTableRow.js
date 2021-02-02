import TimeTableCell from './TimeTableCell';

export default function TimeTableRow(props) {
    let times = [];
    const numberOfPeriods = props.data.length;

    for (let i = 0; i < numberOfPeriods; i++) {
        const currentPeriod = props.data[i];
        if (i === 0) {
            if (currentPeriod.start > 8) {
                times.push({
                    name: 'Free',
                    start: 8,
                    end: props.data[0].start,
                    color: "#81c784"
                });
            }
        }
        let color = currentPeriod.color;
        if(props.color) color = props.color;
        times.push({
            name: currentPeriod.name,
            start: currentPeriod.start,
            end: currentPeriod.end,
            color: color
        });

        let nextPeriodStartTime = null;
        if(i + 1 < numberOfPeriods) nextPeriodStartTime = props.data[i + 1].start;
        else nextPeriodStartTime = 17;
        
        if(nextPeriodStartTime !== currentPeriod.end) {
            times.push({
                name: 'Free',
                start: currentPeriod.end,
                end: nextPeriodStartTime,
                color: "#81c784"
            });
        }
    }

    return (
        <div className="time-table-row">
            <TimeTableCell data={{name: props.day, start: 7, end: 8, color: "#ec407a"}} />
            {times.map(cell => (
                <TimeTableCell data={cell} key={cell.start} />
            ))}
        </div>
    )
}
