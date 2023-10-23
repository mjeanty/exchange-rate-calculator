const currencyEl_one = document.getElementById
('currency-one')
const amountEl_one = document.getElementById
('currency-one')
const currencyEl_two = document.getElementById
('currency-two')
const amountEl_two = document.getElementById
('currency-two')

const rateEl = document.getElementById('rate')
const swap = document.getElementById('swap')


//fetch exchange rate and update DOM

function calculate() {
    const currency_one =currencyEl_one
.value
    const currency_two =currencyEl_two
.value
    fetch(`https://v6.exchangerate-api.com/v6/0f0c85dbd08079992085a912/latest/${currency_one}`)
    .then(res=> res.json())
    .then(data =>{
        const rate = data.rates
    })
}

//event listener
currencyEl_one.addEventListener('change', calculate)
amountEl_one.addEventListener('input', calculate)
currencyEl_two.addEventListener('change', calculate)
amountEl_two.addEventListener('input', calculate)




calculate()