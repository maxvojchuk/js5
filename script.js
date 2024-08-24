//1
// let drink;
// const select = document.querySelector("#select");
// const handlerSelect = () => {
//   switch (select.value) {
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
// select.addEventListener("change", handlerSelect);

//2
// const input = document.querySelector("#input");
// const button = document.querySelector("#button");
// const handlerChecDayOfWeek = () => {
//   switch (input.value) {
//     case "Понеділок":
//     case "Вівторок":
//     case "Середа":
//     case "Четверг":
//     case "П`ятниця":
//       alert("Це рабочий день");
//       break;
//     case "Субота":
//     case "Неділя":
//       alert("це вихідний");
//       break;
//     default:
//       alert("Ведіть день тижня!!!");
//   }
// };
// button.addEventListener("click", handlerChecDayOfWeek);
//3
// const input = document.querySelector("#input");
// const button = document.querySelector("#button");
// const handlerCheckNumberOfManth = () => {
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
// button.addEventListener("click", handlerCheckNumberOfManth);
//4
// const input = document.querySelector("#input");
// const button = document.querySelector("#button");
// const handlerCheckNummberSDayOfManth = () => {
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
//       alert("28/29");
//       break;
//   }
// };
// button.addEventListener("click", handlerCheckNummberSDayOfManth);
//5
// const input = document.querySelector("#input");
// const button = document.querySelector("#button");
// const handlerColorForMove = () => {
//   switch (input.value) {
//     case "Зелений":
//       alert("Йти");
//       break;
//     case "Жовтий":
//       alert("Чекати");
//       break;
//     case "Червоний":
//       alert("Стоп");
//       break;
//     default:
//       alert("Неправильно ведено колір, ми ще не знаєм що він буде робити");
//   }
// };
// button.addEventListener("click", handlerColorForMove);
//6
// const firstNumber = document.querySelector("#first-number");
// const secondNumber = document.querySelector("#second-number");
// const button = document.querySelector("#button-calculator");
// const select = document.querySelector("#select");
// let number;
// const handlerCalculator = () => {
//   switch (select.value) {
//     case "+":
//       number = parseFloat(firstNumber.value) + parseFloat(secondNumber.value);
//       alert(number);
//       break;
//     case "-":
//       number = parseFloat(firstNumber.value) - parseFloat(secondNumber.value);
//       alert(number);
//       break;
//     case "*":
//       number = parseFloat(firstNumber.value) * parseFloat(secondNumber.value);
//       alert(number);
//       break;
//     case "/":
//       number = parseFloat(firstNumber.value) / parseFloat(secondNumber.value);
//       alert(number);
//       break;
//   }
//   if (select.value === "/" && secondNumber.value === "0") {
//     document.body.style.backgroundColor = "black";
//     alert("я ж казала що вселенна схлопнеться");
//   }
// };
// button.addEventListener("click", handlerCalculator);
