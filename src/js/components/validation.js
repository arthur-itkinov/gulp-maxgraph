import { validateForms } from "../functions/validate-forms";
const inputTelegramUserName = document.querySelector("#telegramUserNameId");

const rules = [
  {
    ruleSelector: ".input-name",
    rules: [
      {
        rule: "required",
        value: true,
        errorMessage: "Заполните имя!",
      },
    ],
  },

  {
    ruleSelector: ".input-tel",
    tel: true,
    telError: "Введите корректный телефон",
    rules: [
      {
        rule: "required",
        value: true,
        errorMessage: "Заполните телефон!",
      },
    ],
  },
  {
    ruleSelector: ".input-email",
    rules: [
      {
        rule: "required",
        value: true,
        errorMessage: "Заполните Email!",
      },
      {
        rule: "email",
        value: true,
        errorMessage: "Введите корректный Email!",
      },
    ],
  },
];

const afterForm = () => {
  alert("Произошла отправка формы");
};

validateForms(".order__form", rules, afterForm);
