"use strict";

const countryChina = "Китай";
const countryChili = "Чили";
const countryАustralia = "Австралия";
const countryIndia = "Индия";
const countryJamaica = "Ямайка";

let price;

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
      console.log(
        `"Доставка в ${countryChina} будет стоить ${price} кредитов"`
      );
      break;

    case "чили":
      price = 250;
      console.log(
        `"Доставка в ${countryChili} будет стоить ${price} кредитов"`
      );
      break;

    case "австралия":
      price = 170;
      console.log(
        `"Доставка в ${countryАustralia} будет стоить ${price} кредитов"`
      );
      break;

    case "индия":
      price = 80;
      console.log(
        `"Доставка в ${countryIndia} будет стоить ${price} кредитов"`
      );
      break;

    case "ямайка":
      price = 120;
      console.log(
        `"Доставка в ${countryJamaica} будет стоить ${price} кредитов"`
      );
      break;

    default:
      alert('"В вашей стране доставка не доступна"');
  }
}
