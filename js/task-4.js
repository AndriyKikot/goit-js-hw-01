"use strict";

let credits = 23580;
const pricePerDroid = 3000;
let totalPrice;

const droidsAmount = prompt("Сколько дроидов Вы хотите купить?");

if (droidsAmount === null) {
  console.log("Отменено пользователем!");
} else if (Number.isNaN(Number(droidsAmount)) || !droidsAmount.trim()) {
  alert("Было введено не число, попробуйте еще раз");
} else {
  const result =
    credits <= (totalPrice = droidsAmount * pricePerDroid)
      ? `"Недостаточно средств на счету! Для заказа, необходимо пополнить Ваш счёт на ${
          totalPrice - credits
        } кредитов.`
      : `Вы купили ${droidsAmount} дроидов, на счету осталось ${
          credits - totalPrice
        } кредитов.`;

  console.log(result);
}
