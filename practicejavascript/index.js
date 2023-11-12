let emojies = ["😊", "😣", "😊", "😊", "😣"];
let happyEl = document.getElementById("happy-el");
let sadEl = document.getElementById("sad-el");
const functionEl = document.getElementById("function-el");

// find smile and sad emoju from array
function findSmileAndSad() {
  for (let i = 0; i < emojies.length; i++) {
    if (emojies[i] === "😊") {
      happyEl.textContent += "😊";
    } else if (emojies[i] === "😣") {
      sadEl.textContent += "😣";
    }
  }
}
findSmileAndSad();

// add event listner example
let boxEl = document.getElementById("box");
boxEl.addEventListener("click", function () {
  console.log("add event listner is clicked");
});

// user innerHtml for render
const container = document.getElementById("container");
// see output on web page .. the button Buy! is added from line no 26 by using innerhtml.no need to add button in html
container.innerHTML = "<button onClick = 'buy()'>Buy!</button>";
function buy() {
  container.innerHTML += "<p>Thank you for buying</p>";
}

// string laterals or literals example
const name = "amir";
const email = `Hey ${name} how is going to cheers`;
console.log(email);

// truthy and falsy
console.log(Boolean("")); // false empty string false hoti hai
console.log(Boolean("0")); // true
console.log(Boolean(100)); // true
console.log(Boolean(null)); // false
console.log(Boolean([0])); // true
console.log(Boolean(-0)); // false

// local storage me data as string store hoti hai
// array ko local storage me store karne ke liye use karenge "JSON.stringify"
// local storage se data fetch karne ke liye use karenge "JSON.parse"

// parameter function

function doubleParameter(firstName, lastName) {
  functionEl.textContent = `${firstName}, ${lastName}`;
}
doubleParameter("amir", "alam");

// array parameter function
function arrayFunction(arr) {
  return arr[0];
}
let arrayResult = arrayFunction([4, 8, 30]);
console.log(`Array restult is,${arrayResult}`);
