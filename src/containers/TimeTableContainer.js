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

const periodTimeSlots = [
    {name: "8:00-9:00", start: 8, end: 9},
    {name: "9:00-10:00", start: 9, end: 10},
    {name: "10:00-11:00", start: 10, end: 11},
    {name: "11:00-12:00", start: 11, end: 12},
    {name: "12:00-13:00", start: 12, end: 13},
    {name: "13:00-14:00", start: 13, end: 14},
    {name: "14:00-15:00", start: 14, end: 15},
    {name: "15:00-16:00", start: 15, end: 16},
    {name: "16:00-17:00", start: 16, end: 17}
];

export default function TimeTableContainer() {
    return (
        <div className="time-table-container">
        <TimeTableRow data={periodTimeSlots} />
        {timeTable.map(row => (
            <TimeTableRow data={row} />
      ))}
        </div>
    )
}
