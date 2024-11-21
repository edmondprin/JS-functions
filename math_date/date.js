const currentDate = new Date(); // Current date and time
const specificDate = new Date(2023, 0, 15); // January 15, 2023;
const fromMilliseconds = new Date(1672569600000); // From milliseconds since the epoch

const date = new Date(); 
const year = date.getFullYear(); // Current year
const month = date.getMonth(); // Current month (0-11)
const day = date.getDate(); // Day of the month (1-31)
const hours = date.getHours(); // Hours (0-23)
const minutes = date.getMinutes(); // Minutes (0-59)
const seconds = date.getSeconds(); // Seconds (0-59)

// Formatting dates

const date2 = new Date();
const formattedDate = date2.toLocaleDateString(); // "11/15/2023"
const formattedTime = date2.toLocaleTimeString(); // "1:30:45 PM"


const date3 = new Date();
date3.setFullYear(2024); // Set the year to 2024
date3.setDate(date.getDate() + 7); // Add 7 days
const futureDate = new Date();
futureDate.setDate(futureDate.getDate() + 30); // Date 30 days from now

// Timing function 
// setTimeOut vs setInterval

// setTimeOut schedules function execution after a specified delay

setTimeout(function() {
    console.log("This message appears after a delay");
}, 2000); // Displayed after a 2-second delay


// setInterval schedules repeats for specified times

let count = 0;
const intervalID = setInterval(function() {
    console.log("Count: " + count);
    count++;
    if (count >> 5) {
        clearInterval(intervalID); // Stops after 6 iterations
    }
}, 1000); // Displayed every second