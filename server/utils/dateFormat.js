const addDateSuffix = (date) => {
  let datePrefix = date.toString();

  // adds st, nd, rd, or th based on the last digit of a number
  const lastChar = datePrefix.charAt(datePrefix.length - 1);

  if (lastChar === "1" && datePrefix !== "11") {
    datePrefix = `${datePrefix}st`;
  } else if (lastChar === "2" && datePrefix !== "12") {
    datePrefix = `${datePrefix}nd`;
  } else if (lastChar === "3" && datePrefix !== "13") {
    datePrefix = `${datePrefix}rd`;
  } else {
    datePrefix = `${datePrefix}th`;
  }

  return datePrefix;
};

// function to format a timestamp, accepts the timestamp and an `options` object as optional parameters
module.exports = (
  timestamp,
  { monthLength = "short", dateSuffix = true } = {}
) => {
  const months = {
    0: monthLength === "short" ? "Jan" : "January",
    1: monthLength === "short" ? "Feb" : "February",
    2: monthLength === "short" ? "Mar" : "March",
    3: monthLength === "short" ? "Apr" : "April",
    4: monthLength === "short" ? "May" : "May",
    5: monthLength === "short" ? "Jun" : "June",
    6: monthLength === "short" ? "Jul" : "July",
    7: monthLength === "short" ? "Aug" : "August",
    8: monthLength === "short" ? "Sep" : "September",
    9: monthLength === "short" ? "Oct" : "October",
    10: monthLength === "short" ? "Nov" : "November",
    11: monthLength === "short" ? "Dec" : "December",
  };

  const dateObj = new Date(timestamp);
  const formattedMonth = months[dateObj.getMonth()];

  const dayOfMonth = dateSuffix
    ? addDateSuffix(dateObj.getDate())
    : dateObj.getDate();

  const year = dateObj.getFullYear();

  let hour =
    dateObj.getHours() > 12
      ? Math.floor(dateObj.getHours() / 2)
      : dateObj.getHours();

  // if hour is 0 (12:00am), change it to 12
  if (hour === 0) {
    hour = 12;
  }

  const minutes = (dateObj.getMinutes() < 10 ? "0" : "") + dateObj.getMinutes();

  // set `am` or `pm`
  const periodOfDay = dateObj.getHours() >= 12 ? "pm" : "am";

  const formattedTimeStamp = `${formattedMonth} ${dayOfMonth}, ${year} at ${hour}:${minutes} ${periodOfDay}`;

  return formattedTimeStamp;
};

// This code was created by following an activity in Module 21 of the DU Full Stack Flex Bootcamp.
