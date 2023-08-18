
// This line initializes a constant variable startingMinutes with a value of 10. This is the starting time for the countdown in minutes.
const startingMinutes = 40;
// Here, the variable time is being assigned the value of startingMinutes multiplied by 60. Since there are 60 seconds in a minute, this converts the starting time from minutes to seconds.
let time =startingMinutes * 60;
//This line retrieves an HTML element from the webpage with the id "countDown". The countdownEl variable now references this HTML element, which is presumably used to display the countdown time.
const countdownEl = document.getElementById("countDown")

// The setInterval function is used to call the updateCountdown function repeatedly every 1000 milliseconds (1 second). This will update the countdown every second.
setInterval(updateCountdown, 1000);



function updateCountdown() {
  
  // This line calculates the remaining minutes by dividing the time by 60. The result is the whole number of minutes left in the countdown.
  const minutes = Math.floor(time/60);
  // This line calculates the remaining seconds by taking the remainder of the division of time by 60. This gives the number of seconds left within the current minute.
  let seconds = time % 60;

// DISPLAYS THE MINUTES AND SECONDS 
  countdownEl.innerHTML = `${minutes} : ${seconds}`
  time --;
}