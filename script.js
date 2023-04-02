// let a = 10
// {
//    let b = 20
//    {
//       let c = 30
//       b++ //б++ = б(20) + 1
//       a *= 10 //а=10 а= а(10)*10
//    }
//    {
//       let c = 50
//       b += 500 //б += 500 = 20 + 500(20 потому что мы использовали б++, он возвращает старое число, если б ++б, то использовали 21)
//    }
//    {
//       const a = 100500 //const > let
//       const d = "value"
//       {
//          let a = -50
//          b = 1000
//       }
//    }
// }
// // Які тут будуть значення змінних a, b, c, d?
// // a = 100
// // b = 21
// // c = 30
// // d - не існує
// // Які тут будуть значення змінних a, b, c, d?
// // a = 100
// // b = 520
// // c = 50
// // d - не існує
// // Які тут будуть значення змінних a, b, c, d?
// // a = 100500
// // b = 1000
// // c = 30
// // d = "value"
// // Які тут будуть значення змінних a, b, c, d?
// // a = 100
// // b = 21
// // c = 30
// // d - не існує
// // Які тут будуть значення змінних a, b, c, d?
// // a = 10
// // b = 21
// // c - не існує
// // d - не існує


// var age = + prompt("Скільки вам років?", "");
// if (age < 0) {
//    alert("чи кіборг, чи KERNESS");
// } else if (age < 18) {
//    alert("школяр");
// }
// else if (age > 18 && age < 30) {
//    alert("молодь");
// }
// else if (age > 30 && age < 45) {
//    alert("зрілість");
// }
// else if (age > 45 && age < 60) {
//    alert("захід сонця");
// }
// else if (age > 60) {
//    alert("як пенсія?");
// }


// const size = prompt("Ваш размер в формате s-xxl")
// switch (size) {
//    case "s":
//       console.log('Италия 38')
//       break;
//    case "m":
//       console.log('Италия 40')
//       break;
//    case "l":
//       console.log('Италия 42-46')
//       break;
//    case "xl":
//       console.log('Италия 46-50')
//       break;
//    case "xxl":
//       console.log('Италия 50-52')
//       break;
//    default:
//       console.log('Ты шо голый(а)')
// }


// let color = prompt("Введіть колір", "");
// if (color === "red") {
// document.write("<div style='background-color: red;'>червоний</div>");
// } else if (color === "black") {
// document.write("<div style='background-color: black; color: white;'>чорний</div>");
// } else if (color === "blue") {
// document.write("<div style='background-color: blue;'>синій</div>");
// } else if (color === "green") {
// document.write("<div style='background-color: green;'>зелений</div>");
// } else {
// document.write("<div style='background-color: gray;'>Я не зрозумів</div>");
// }


// const noSwitch = (key, cases, defaultKey = 'default') => {
//    if (key in cases) {
//       // якщо ключ знайдено, запускаємо функцію з об'єкта
//       return cases[key]();
//    } else {
//       // якщо ключ не знайдено, запускаємо функцію за замовчуванням
//       return cases[defaultKey]();
//    }
// };
// const drink = prompt("Що ви любите пити");
// noSwitch(drink, {
//    воду: () => console.log('Найздоровіший вибір!'),
//    чай() {
//       console.log('Смачна та корисна штука. Не перестарайтеся з цукром');
//    },
//    пиво: () => console.log('Добре влітку, та в міру'),
//    віскі: function () {
//       console.log('Та ви, батечку, естет! Не забудьте лід і сигару');
//    },
//    default() {
//       console.log('шото я не зрозумів');
//    }
// });


// fetch('https://open.er-api.com/v6/latest/USD').then(res => res.json())
//    .then(data => {
//       const buttonContainer = document.createElement('div');
//       for (const currency in data.rates) {
//          const button = document.createElement('button');
//          button.innerHTML = currency;
//          const handleClick = (rate) => {
//             const amount = prompt(`Enter the amount in ${currency}:`);
//             const convertedAmount = amount * rate;
//             alert(`The amount in USD is ${convertedAmount.toFixed(2)}`);
//          };
//          button.onclick = ((rate) => () => handleClick(rate))(data.rates[currency]);
//          buttonContainer.appendChild(button);
//       }
//       document.body.appendChild(buttonContainer);
//    });


// fetch('https://open.er-api.com/v6/latest/USD')
//    .then(res => res.json())
//    .then(data => {
//       const rates = data.rates;
//       const from = document.getElementById('from');
//       const to = document.getElementById('to');
//       const rate = document.getElementById('rate');
//       const amount = document.getElementById('amount');
//       const result = document.getElementById('result');
//       for (const currency in rates) {
//          const option1 = document.createElement('option');
//          const option2 = document.createElement('option');
//          option1.innerText = currency;
//          option2.innerText = currency;
//          from.append(option1);
//          to.append(option2);
//       }
//       const calculate = () => {
//          const fromCurrency = from.value;
//          const toCurrency = to.value;
//          const exchangeRate = rates[toCurrency] / rates[fromCurrency];
//          rate.innerText = `Exchange rate: 1 ${fromCurrency} = ${exchangeRate} ${toCurrency}`;
//          result.innerText = `Result: ${(amount.value * exchangeRate).toFixed(2)} ${toCurrency}`;
//       };
//       from.onchange = calculate;
//       to.onchange = calculate;
//       amount.oninput = calculate;
//       calculate();
//    });


const countriesSelect = document.querySelector('#countries');
const citiesSelect = document.querySelector('#cities');
fetch('https://raw.githubusercontent.com/russ666/all-countries-and-cities-json/master/countries.min.json')
   .then(res => res.json())
   .then(data => {
      // заповнюємо select#countries елементами option з назвами країн
      data.forEach(country => {
         const option = document.createElement('option');
         option.value = country.name;
         option.textContent = country.name;
         countriesSelect.appendChild(option);
      });
      // обробник події onchange для select#countries
      countriesSelect.addEventListener('change', () => {
         const selectedCountry = countriesSelect.value;
         // видаляємо старі елементи select#cities
         citiesSelect.innerHTML = '';
         // додаємо option елементи з містами обраної країни
         data.forEach(country => {
            if (country.name === selectedCountry) {
               country.cities.forEach(city => {
                  const option = document.createElement('option');
                  option.value = city;
                  option.textContent = city;
                  citiesSelect.appendChild(option);
               });
            }
         });
      });
   });
