import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import randomColor from 'randomcolor';

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

const colorOfSubjectCell = new Map();

const initializeColors = (arr) => {
  for (let i = 0; i < arr.length; ++i) {
    for (let j = 0; j < arr[i].length; ++j) {
      if (!colorOfSubjectCell.has(arr[i][j].name)) {
        colorOfSubjectCell.set(arr[i][j].name, generateRandomColorCode());
      }
      arr[i][j]["color"] = colorOfSubjectCell.get(arr[i][j].name);
    }
  }
  return arr;
}

export default function TimeTableContainer() {

  const [periodsSchedule, setPeriodsSchedule] = React.useState(null);

  React.useEffect(() => {
    fetch('http://localhost:8000/periodsschedule')
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        return initializeColors(json);
      })
      .then((data) => {
        setPeriodsSchedule(data);
      });
  }, [])

  let currentDay = 0;
  return (
    <>
      {periodsSchedule && <TableContainer className="time-table-container" component={Paper}>
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
    </>
  )
}
