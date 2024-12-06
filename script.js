//1
// let drink;
// const drinks = document.querySelector(".drinks");
// const drinksSelect = () => {
//   switch (drinks.value) {
//     case "coffee":
//       drink = "Кава";
//       break;
//     case "tea":
//       drink = "Чай";
//       break;
//     case "juise":
//       drink = "Сік";
//       break;
//   }
//   alert(`ви вибрали ${drink}`);
// };
// drinks.addEventListener("change", drinksSelect);

// 2
// const input = document.querySelector(".input");
// const button = document.querySelector(".button");
// const chekWeeksDay = () => {
//   switch (input.value) {
//     case "Понеділок":
//     case "Вівторок":
//     case "Середа":
//     case "Четверг":
//     case "П`ятниця":
//       alert("Робочий день");
//       break;
//     case "Субота":
//     case "Неділя":
//       alert("Вихідний");
//       break;
//     default:
//       alert("Ви ввели неправильне значення");
//   }
// };
// button.addEventListener("click", chekWeeksDay);
// 3
// const input = document.querySelector(".input");
// const button = document.querySelector(".button");
// const cehkMonth = () => {
//   switch (input.value) {
//     case "1":
//     case "2":
//     case "12":
//       alert("Зима");
//       break;
//     case "3":
//     case "4":
//     case "5":
//       alert("Весна");
//       break;
//     case "6":
//     case "7":
//     case "8":
//       alert("Літо");
//       break;
//     case "9":
//     case "10":
//     case "11":
//       alert("Осінь");
//       break;
//   }
// };
// button.addEventListener("click", cehkMonth);
// // 4
// const input = document.querySelector(".input");
// const button = document.querySelector(".button");
// const chekCountofDaysAtMonth = () => {
//   switch (input.value) {
//     case "1":
//     case "3":
//     case "5":
//     case "7":
//     case "8":
//     case "10":
//     case "12":
//       alert("31");
//       break;
//     case "4":
//     case "6":
//     case "9":
//     case "11":
//       alert("30");
//       break;
//     case "2":
//       alert("28 abo (29 - високосний рік) ");
//       break;
//   }
// };
// button.addEventListener("click", chekCountofDaysAtMonth);
// // 5
// const input = document.querySelector(".input");
// const button = document.querySelector(".button");
// const trafficLights = () => {
//   switch (input.value) {
//     case "Зелений":
//       alert("Можна рухатись");
//       break;
//     case "Жовтий":
//       alert("Приготуватись");
//       break;
//     case "Червоний":
//       alert("Зупинитись чекати зеленого");
//       break;
//     default:
//       alert("Неправельно заповнене поле");
//   }
// };
// button.addEventListener("click", trafficLights);
// // 6;
const firstNumber = document.querySelector(".first-number");
const secondNumber = document.querySelector(".second-number");
const button = document.querySelector(".check");
const sign = document.querySelector(".sign");
const answer = document.querySelector(".answer");

let number;
const calculator = () => {
  switch (sign.value) {
    case "+":
      number = parseFloat(firstNumber.value) + parseFloat(secondNumber.value);
      alert(number);
      break;
    case "-":
      number = parseFloat(firstNumber.value) - parseFloat(secondNumber.value);
      alert(number);
      break;
    case "*":
      number = parseFloat(firstNumber.value) * parseFloat(secondNumber.value);
      alert(number);
      break;
    case "/":
      number = parseFloat(firstNumber.value) / parseFloat(secondNumber.value);
      alert(number);
      break;
  }
  if (sign.value === "/" && secondNumber.value === "0") {
    document.body.style.backgroundColor = "red";
    alert("нануль ділити заборонено");
  }
};
button.addEventListener("click", calculator);
