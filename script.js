const textInput = document.getElementById('text')
const numberInput = document.getElementById('number')
const form = document.getElementById('form')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    let isError = false

    if (!/[^[а-яА-Я]/g.test(textInput.value) && textInput.value !== '') {
        alert('В инпуте только кирилица')
    } else {
        isError = true
    }

    if (!/[^\d]/g.test(numberInput.value) && numberInput.value !== '') {
        alert('В инпуте только числа')
    } else {
        isError = true
    }

    if (!isError) {
        alert('Данные отправлены')
    }

})

