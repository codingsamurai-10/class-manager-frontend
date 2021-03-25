import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import randomColor from 'randomcolor';

let periodsSchedule = [
  [
    { name: 'free', start: 8, end: 9 },
    { name: 'ece', start: 9, end: 10 },
    { name: 'free', start: 10, end: 11 },
    { name: 'ns', start: 11, end: 13 },
    { name: 'free', start: 13, end: 14 },
    { name: 'mi', start: 14, end: 16 },
    { name: 'free', start: 16, end: 17 },
  ],
  [
    { name: 'comm', start: 8, end: 11 },
    { name: 'pe', start: 11, end: 12 },
    { name: 'ml', start: 12, end: 14 },
    { name: 'free', start: 14, end: 15 },
    { name: 'mi', start: 15, end: 17 }
  ],
  [
    { name: 'free', start: 8, end: 10 },
    { name: 'emt', start: 10, end: 11 },
    { name: 'laboratory', start: 11, end: 13 },
    { name: 'ead', start: 13, end: 15 },
    { name: 'cs', start: 15, end: 16 },
    { name: 'micro', start: 16, end: 17 }
  ],
  [
    { name: 'free', start: 8, end: 9 },
    { name: 'mi', start: 9, end: 10 },
    { name: 'laboratory', start: 10, end: 11 },
    { name: 'emt', start: 11, end: 13 },
    { name: 'free', start: 13, end: 14 },
    { name: 'ece', start: 14, end: 15 },
    { name: 'free', start: 15, end: 17 }
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

const daysOfWeek = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday'
];

const tableHeadings = [
  "Day/Time",
  "8:00-9:00",
  "9:00-10:00",
  "10:00-11:00",
  "11:00-12:00",
  "12:00-13:00",
  "13:00-14:00",
  "14:00-15:00",
  "15:00-16:00",
  "16:00-17:00"
];

const generateRandomColorCode = () => {
  return randomColor({
    luminosity: "light",
    hue: "blue"
  });
}

const tableHeadingStyles = {
  backgroundColor: "#f50057",
  fontSize: "1.5em"
}

const tableBodyCellStyles = (color) => {
  return {
    backgroundColor: color,
    fontSize: "1.5em"
  }
}

export default function TimeTableContainer() {
  let colorOfSubjectCell = new Map();
  for (let i = 0; i < periodsSchedule.length; ++i) {
    for (let j = 0; j < periodsSchedule[i].length; ++j) {
      if (!colorOfSubjectCell.has(periodsSchedule[i][j].name)) {
        colorOfSubjectCell.set(periodsSchedule[i][j].name, generateRandomColorCode());
      }
      periodsSchedule[i][j]["color"] = colorOfSubjectCell.get(periodsSchedule[i][j].name);
    }
  }

  let currentDay = 0;
  return (
    <TableContainer className="time-table-container" component={Paper}>
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            {tableHeadings.map(value => (
              <TableCell
                align="center"
                style={tableHeadingStyles}
                className="time-table-cell">
                {value}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>

        <TableBody>
          {periodsSchedule.map(currentDayPeriods => (
            <TableRow>
              <TableCell
                align="center"
                style={tableHeadingStyles}
                className="time-table-cell">
                {daysOfWeek[currentDay++]}
              </TableCell>

              {currentDayPeriods.map(period => (
                <TableCell
                  colspan={period.end - period.start}
                  align="center" className="time-table-cell"
                  style={tableBodyCellStyles(period.color)}>
                  {period.name}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}