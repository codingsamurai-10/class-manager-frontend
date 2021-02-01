import TimeTableRow from './TimeTableRow';

const timeTable = [
    [
        {name: 'ece', start: 9, end: 10},
        {name: 'ns', start: 11, end: 13},
        {name: 'mi', start: 14, end: 16}
    ],
    [
        {name: 'comm', start: 8, end: 11},
        {name: 'pe', start: 11, end: 12},
        {name: 'ml', start: 12, end: 14},
        {name: 'mi', start: 15, end: 17}
    ]
];

export default function TimeTableContainer() {
    return (
        <div className="time-table-container">
        {timeTable.map(row => (
            <TimeTableRow data={row} />
      ))}
        </div>
    )
}
