import TimeTableRow from './TimeTableRow';

let periodsSchedule = [
    [
        { name: 'ece', start: 9, end: 10 },
        { name: 'ns', start: 11, end: 13 },
        { name: 'mi', start: 14, end: 16 }
    ],
    [
        { name: 'comm', start: 8, end: 11 },
        { name: 'pe', start: 11, end: 12 },
        { name: 'ml', start: 12, end: 14 },
        { name: 'mi', start: 15, end: 17 }
    ],
    [
        { name: 'emt', start: 10, end: 11 },
        { name: 'laboratory', start: 11, end: 13 },
        { name: 'ead', start: 13, end: 15 },
        { name: 'cs', start: 15, end: 16 },
        { name: 'micro', start: 16, end: 17 }
    ],
    [
        { name: 'mi', start: 9, end: 10 },
        { name: 'laboratory', start: 10, end: 11 },
        { name: 'emt', start: 11, end: 13 },
        { name: 'ece', start: 14, end: 15 },
    ],
    [
        { name: 'ed', start: 8, end: 9 },
        { name: 'cs', start: 9, end: 10 },
        { name: 'micro', start: 10, end: 11 },
        { name: 'laboratory', start: 11, end: 12 },
        { name: 'ece', start: 12, end: 13 },
        { name: 'mi', start: 13, end: 14 },
        { name: 'ml', start: 14, end: 15 },
        { name: 'ns', start: 15, end: 16 },
        { name: 'pe', start: 16, end: 17 },
    ]
];

const firstColumnValues = [
    'Day/Time',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday'
];

const tableHeadings = [
    { name: "8:00-9:00", start: 8, end: 9 },
    { name: "9:00-10:00", start: 9, end: 10 },
    { name: "10:00-11:00", start: 10, end: 11 },
    { name: "11:00-12:00", start: 11, end: 12 },
    { name: "12:00-13:00", start: 12, end: 13 },
    { name: "13:00-14:00", start: 13, end: 14 },
    { name: "14:00-15:00", start: 14, end: 15 },
    { name: "15:00-16:00", start: 15, end: 16 },
    { name: "16:00-17:00", start: 16, end: 17 }
];

export default function TimeTableContainer() {
    let rowIndex = 0;
    return (
        <div className="time-table-container">
            <TimeTableRow data={tableHeadings} day={firstColumnValues[rowIndex++]} />
            {periodsSchedule.map(row => (
                <TimeTableRow data={row} day={firstColumnValues[rowIndex++]} />
            ))}
        </div>
    )
}