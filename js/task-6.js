"use strict";

let input;
let total = 0;

do {
  input = prompt(
    "Вводите числа для подсчёта суммы. Для вывода суммы всех чисел нажмите 'Отмена'",
    "Введите число"
  );
  if (Number.isNaN(Number(input))) {
    alert("Было введено не число, попробуйте еще раз");
    continue;
  }
  total += +input;
  console.log(total);
} while (input !== null);
{
  alert(`'Общая сумма чисел равна ${total}'`);
}
