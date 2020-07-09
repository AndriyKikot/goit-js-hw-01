"use strict";

const countryChina = "Китай";
const countryChili = "Чили";
const countryАustralia = "Австралия";
const countryIndia = "Индия";
const countryJamaica = "Ямайка";

let price;
let message;

const userCountry = prompt(
  "Введите страну, куда необходимо совершить доставку"
);

if (userCountry === null) {
  alert("'Отменено пользователем!'");
} else if (!userCountry.trim()) {
  alert("'Введена пустая строка!'");
} else {
  const normalizedCountry = userCountry.toLowerCase();

  switch (normalizedCountry) {
    case "китай":
      price = 100;
      message = `"Доставка в ${countryChina} будет стоить ${price} кредитов"`;
      console.log(message);
      break;

    case "чили":
      price = 250;
      message = `"Доставка в ${countryChili} будет стоить ${price} кредитов"`;
      console.log(message);
      break;

    case "австралия":
      price = 170;
      message = `"Доставка в ${countryАustralia} будет стоить ${price} кредитов"`;
      console.log(message);
      break;

    case "индия":
      price = 80;
      message = `"Доставка в ${countryIndia} будет стоить ${price} кредитов"`;
      console.log(message);
      break;

    case "ямайка":
      price = 120;
      message = `"Доставка в ${countryJamaica} будет стоить ${price} кредитов"`;
      console.log(message);
      break;

    default:
      alert('"В вашей стране доставка не доступна"');
  }
}
