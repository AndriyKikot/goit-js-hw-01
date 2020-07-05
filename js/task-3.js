"use strict";

const ADMIN_PASSWORD = "jqueryismyjam";
let message;

const userPassword = prompt("Введите Ваш пароль");

if (userPassword === null) {
  message = "Отменено пользователем!";
} else if (userPassword === ADMIN_PASSWORD) {
  message = "Добро пожаловать!";
} else {
  message = "Доступ запрещен, неверный пароль!";
}

alert(message);
