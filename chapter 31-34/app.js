// Number 1:

var  now = new Date();
var  currentDateTime = now.toLocaleString();
  document.write(currentDateTime);



// Number 3:

var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var  today = new Date().getDay();
var  firstThreeLetters = days[today].slice(0, 3);
  alert(firstThreeLetters);


// Number 4:

// var  yesterday = new Date().getDay();
//   if (yesterday === 0 || yesterday === 6) {
//     document.write("It's Fun day!");
//   }


// Number 5:

var date = new Date();
var day = date.getDate();
if (day < 16) {
  document.write("First fifteen days of the month");
} else {
  document.write("Last days of the month");
}

// Number 6:


var timeStamp = new Date();
let minutesSinceEpoch;
minutesSinceEpoch = Math.floor(timeStamp.getTime() / 60000);
document.write(minutesSinceEpoch);


// Number 7:


var now = new Date();
var hour = now.getHours();
if (hour < 12) {
  alert("It's AM");
} else {
  alert("It's PM");
}

// Number 8:

var laterDate = new Date(2020, 11, 31);

// Number 9:


var ramadanStartDate = new Date('June 18, 2015');
  var today = new Date();
  var daysPast = Math.round((today - ramadanStartDate)/171);
  alert(daysPast + ' days have passed since 1st Ramadan, 2015');


// Number 10:

var referenceDate = new Date('January 1, 1970 00:00:00');
  var beginningOf2015 = new Date('January 1, 2015 00:00:00');
  var secondsElapsed = (beginningOf2015 - referenceDate) / 1000;
  document.write(secondsElapsed + ' seconds have elapsed since the reference date');



// Number 11:



// Create Date object for current date and time
var currentDate = new Date();

// Extract hours
var currentHours = currentDate.getHours();

console.log("Current Date and Time: ", currentDate);
console.log("Current Hours: ", currentHours);

// Reset Date object an hour ahead
currentDate.setHours(currentHours + 1);

console.log("Date and Time an hour ahead: ", currentDate);


// Display in browser
document.write("Current Date and Time: " + currentDate + "<br>");
document.write("Current Hours: " + currentHours + "<br>");
document.write("Date and Time an hour ahead: " + currentDate);

// Number 12:



// Create Date object
var currentDate = new Date();

// Get current year
var currentYear = currentDate.getFullYear();

// Reset year to 100 years back
var pastYear = currentYear - 100;

// Create new Date object with past year
var pastDate = new Date(pastYear, currentDate.getMonth(), currentDate.getDate());

// Alert past date
alert("Date 100 years back: " + pastDate);



// Number 13:

// Ask user for age
var age = prompt("Enter your age:");

// Get current year
var currentYear = new Date().getFullYear();

// Calculate birth year
var birthYear = currentYear - age;

// Display birth year in browser
document.write("Your birth year is: " + birthYear);

// Alternatively, display in alert box
alert("Your birth year is: " + birthYear);



// Number 14:




// Customer information
var customerName = "Kina Fatima";
var currentMonth = "September 2024";

// Bill details
var numberOfUnits = 500;
var chargesPerUnit = 12;
var latePaymentSurcharge = 0.05; // 5% of net amount

// Calculate net amount payable
var netAmountPayable = (numberOfUnits * chargesPerUnit).toFixed(2);

// Calculate late payment surcharge
var lateSurcharge = (netAmountPayable * latePaymentSurcharge).toFixed(2);

// Calculate gross amount payable
var grossAmountPayable = (parseFloat(netAmountPayable) + parseFloat(lateSurcharge)).toFixed(2);

// Display bill in browser
document.write(`
  <h1>K-Electric Bill</h1>
  <p>Customer Name: ${customerName}</p>
  <p>Current Month: ${currentMonth}</p>
  <table border="1">
    <tr>
      <th>Description</th>
      <th>Amount</th>
    </tr>
    <tr>
      <td>Number of Units</td>
      <td>${numberOfUnits}</td>
    </tr>
    <tr>
      <td>Charges per Unit</td>
      <td>${chargesPerUnit}</td>
    </tr>
    <tr>
      <td>Net Amount Payable (within Due Date)</td>
      <td>${netAmountPayable}</td>
    </tr>
    <tr>
      <td>Late Payment Surcharge</td>
      <td>${lateSurcharge}</td>
    </tr>
    <tr>
      <td>Gross Amount Payable (after Due Date)</td>
      <td>${grossAmountPayable}</td>
    </tr>
  </table>
`);

