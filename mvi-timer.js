const nameOfDay = [
  "niedziela",
  "poniedziałek",
  "wtorek",
  "środa",
  "czwartek",
  "piątek",
  "sobota",
];

const nameOfMonth = [
  "stycznia",
  "lutego",
  "marca",
  "kwietnia",
  "maja",
  "czerwca",
  "lipca",
  "sierpnia",
  "września",
  "października",
  "listopada",
  "grudnia",
];

function testNum(a) {
  let result;
  if (a < 10) {
    result = "0";
  } else {
    result = "";
  }
  return result;
}

let date = new Date();

const timer = document.querySelector(".timer");
const dayOfWeekItem = document.querySelector(".dayOfWeek");
const timeItem = document.querySelector(".time");
const dateItem = document.querySelector(".date");

const startBtn = document.querySelector(".js-start");
const stopBtn = document.querySelector(".js-stop");
let timerId = null;

startBtn.addEventListener("click", () => {
  startBtn.disabled = 1;

  timerId = setInterval(() => {
    date = new Date();

    dayOfWeekItem.textContent = nameOfDay[date.getDay()];

    timeItem.textContent =
      testNum(date.getHours()) +
      date.getHours() +
      ":" +
      testNum(date.getMinutes()) +
      date.getMinutes() +
      ":" +
      testNum(date.getSeconds()) +
      date.getSeconds();

    dateItem.textContent =
      date.getDate() +
      " " +
      nameOfMonth[date.getMonth()] +
      " " +
      date.getFullYear();
  }, 1000);
});

stopBtn.addEventListener("click", () => {
  startBtn.disabled = 0;
  clearInterval(timerId);
  console.log("ZATRZYMANY!");
  timerId = null;
});

// Zwraca dzień miesiąca od 1 do 31
// console.log("getDate(): ", date.getDate());

// Zwraca dzień tygodnia od 0 do 6
// console.log("getDay(): ", date.getDay());

// Zwraca miesiąc od 0 do 11
// console.log("getMonth(): ", date.getMonth());

// Zwraca rok z 4 cyfr
// console.log("getFullYear(): ", date.getFullYear());

// Zwraca godzinę
// console.log("getHours(): ", date.getHours());

// Zwraca minuty
// console.log("getMinutes(): ", date.getMinutes());

// Zwraca sekundy
// console.log("getSeconds(): ", date.getSeconds());
