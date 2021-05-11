import randomColor from 'randomcolor';

const daysToNextFriday = () => {
    return 5 - (new Date()).getDay() + 7;
}

export function getDateOfNextFriday() {
    let maxDateInFuture = new Date();
    maxDateInFuture.setDate(maxDateInFuture.getDate() + daysToNextFriday());
    return maxDateInFuture;
}

export function disableWeekends(date) {
    return date.getDay() === 0 || date.getDay() === 6;
}

const generateRandomColorCode = () => {
    return randomColor({
        luminosity: "light",
        hue: "blue"
    });
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


export function fetchTimeTable(setPeriodsSchedule) {
    fetch('http://localhost:8000/api/periodsSchedule')
        .then((response) => {
            return response.json();
        })
        .then((json) => {
            return initializeColors(json);
        })
        .then((data) => {
            setPeriodsSchedule(data);
        });
}
