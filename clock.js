function clock() {
  const myDate = new Date();
  let hour = myDate.getHours();
  let miniute = myDate.getMinutes();
  let second = myDate.getSeconds();
  let period = "AM";
  if (second < 10) {
    second = "0" + second;
  } else {
    second = second;
  }
  if (miniute < 10) {
    miniute = "0" + miniute;
  } else {
    miniute = miniute;
  }
  if (hour >= 12) {
    period = "PM";
  }
  if (hour === 0) {
    hour = 12;
  } else if (hour > 12) {
    hour = hour - 12;
  } else {
    hour = 12;
  }

  document.getElementById("hour").innerHTML = `${hour}:`;
  document.getElementById("miniute").innerHTML = `${miniute}:`;
  document.getElementById("second").innerHTML = `${second}`;
  document.getElementById("period").innerHTML = `${period}`;
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const day = myDate.getDay();
  const dayDisplay = days[day];
  const month = myDate.getMonth();
  const monthDisplay = months[month];
  const date = myDate.getDate();
  const year = myDate.getFullYear();
  document.getElementById("day").innerHTML = dayDisplay;
  document.getElementById("month").innerHTML = monthDisplay;
  document.getElementById("date").innerHTML = date;
  document.getElementById("year").innerHTML = year;
}

setInterval(clock, 1000);
