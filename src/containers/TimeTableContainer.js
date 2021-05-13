import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { fetchTimeTable } from './helpers';

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

export default function TimeTableContainer({ periodsSchedule, setPeriodsSchedule }) {

  React.useEffect(() => {
    fetchTimeTable(setPeriodsSchedule);
  }, []);

  let currentDay = 0;
  return (
    <Paper className="time-table-container">
      {periodsSchedule && <TableContainer component={Paper}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              {tableHeadings.map((value, index) => (
                <TableCell
                  key={index}
                  align="center"
                  style={tableHeadingStyles}
                  className="time-table-cell">
                  {value}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>

          <TableBody>
            {periodsSchedule.map((currentDayPeriods, index) => (
              <TableRow key={index}>
                <TableCell
                  align="center"
                  style={tableHeadingStyles}
                  className="time-table-cell">
                  {daysOfWeek[currentDay++]}
                </TableCell>

                {currentDayPeriods.map(period => (
                  <TableCell
                    colSpan={period.end - period.start}
                    key={period.id}
                    align="center" className="time-table-cell"
                    style={tableBodyCellStyles(period.color)}>
                    {period.name}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>}
    </Paper>
  )
}
