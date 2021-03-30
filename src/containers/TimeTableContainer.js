import React, { useState, useEffect } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import randomColor from 'randomcolor';
import useFetch from '../useFetch';
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

function TimeTableContainer() {

  let [currentDay] = useState(0);
  const [colorOfSubjectCell] = useState(new Map());
  // const { periodsScheduleData: periodsSchedule, error, isLoading } = useFetch("http://localhost:3001/periodsSchedule", {});
  const getItems = () => fetch("http://localhost:3001/periodsSchedule").then(res => res.json());
  const [_periodsSchedule, setPeriodsSchedule] = useState([]);
  useEffect(() => {
    getItems().then(data => setPeriodsSchedule(data));
  }, []);
  let periodsSchedule;
  if(_periodsSchedule){
    periodsSchedule = _periodsSchedule;
    for (let i = 0; i < periodsSchedule.length; ++i) {
      for (let j = 0; j < periodsSchedule[i].length; ++j) {
        if (!colorOfSubjectCell.has(periodsSchedule[i][j].name)) {
          colorOfSubjectCell.set(periodsSchedule[i][j].name, generateRandomColorCode());
        }
        periodsSchedule[i][j]["color"] = colorOfSubjectCell.get(periodsSchedule[i][j].name);
      }
    }
  }
  return (
    < TableContainer className="time-table-container" component={Paper} >
      {periodsSchedule && <Table stickyHeader>
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
                key={index}
                align="center"
                style={tableHeadingStyles}
                className="time-table-cell">
                {daysOfWeek[currentDay++]}
              </TableCell>

              {currentDayPeriods.map((period, index) => (
                <TableCell
                  key={index}
                  colspan={period.end - period.start}
                  align="center" className="time-table-cell"
                  style={tableBodyCellStyles(period.color)}>
                  {period.name}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>}
    </TableContainer>
  )
}

export default TimeTableContainer;