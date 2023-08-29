let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

setInterval(() => {
  let currentTime = new Date();

  // console.log(
  //   currentTime.getHours() +
  //     ":" +
  //     currentTime.getMinutes() +
  //     ":" +
  //     currentTime.getSeconds()
  // );

  hrs.innerHTML =
    (currentTime.getHours() < 10 ? "0" : "") + currentTime.getHours();
  min.innerHTML =
    (currentTime.getMinutes() < 10 ? "0" : "") + currentTime.getMinutes();
  sec.innerHTML =
    (currentTime.getSeconds() < 10 ? "0" : "") + currentTime.getSeconds();
}, 1000);

/*
The code snippet is responsible for updating the HTML elements with 
the current time every second.

Flow--------------

The code snippet first retrieves the HTML elements with the 
IDs "hrs", "min", and "sec" using the getElementById method.


It then sets up a setInterval function that will execute the provided 
callback function every 1000 milliseconds (1 second).


Inside the callback function, it creates a new Date object to get the 
current time.


It updates the innerHTML of the "hrs" element with the current hour, 
ensuring that it is displayed with two digits (e.g., 01, 02, etc.).


It updates the innerHTML of the "min" element with the current minute, 
also ensuring that it is displayed with two digits.


It updates the innerHTML of the "sec" element with the current second, 
again ensuring that it is displayed with two digits.


The setInterval function continues to execute the callback function every 
second, keeping the displayed time updated.



*/
