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