// script.js

const form1 = document.getElementById('form1');
const text1 = document.getElementById('text1');
const email1 = document.getElementById('email1');
const tel1 = document.getElementById('tel1');

form1.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!/^[а-яА-Я\s-]+$/i.test(text1.value)) {
        alert('В поле "Ваше сообщение" разрешено вводить только кириллицу, дефис и пробел.');
    }

    if (!/^[a-zA-Z0-9_.!~*'-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(email1.value)) {
        alert('В поле "Email" разрешено вводить только латиницу, цифры и спецсимволы: @ - _ . ! ~ * \'');
    }

    if (!/^[0-9()-]+$/.test(tel1.value)) {
        alert('В поле "Телефон" разрешено вводить только цифры, круглые скобки и дефис.');
    }

    // Другие действия по отправке формы...
});

// Аналогично для form2 и form3
