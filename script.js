// Name : Ajimol Das
// Date : jan 14, 2019
// student : C0745042
// Course : CSD 2214 section 6
let countDown;
let timeInterval;
const endDate = document.querySelector('input[name="endDate"]');
const clock = document.querySelector('#clock');
const daysSpan = clock.querySelector('.days');
const hoursSpan = clock.querySelector('.hours');
const minutesSpan = clock.querySelector('.minutes');
const secondSpan = clock.querySelector('.second');


console.log(endDate.value);