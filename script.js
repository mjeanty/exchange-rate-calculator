const currencyEl_one = document.getElementById('currency-one');
const amountEl_one = document.getElementById('amount-one');
const currencyEl_two = document.getElementById('currency-two');
const amountEl_two = document.getElementById('amount-two');

const rateEl = document.getElementById('rate')
const swap = document.getElementById('swap')


//fetch exchange rate and update DOM

function calculate() {
    const currency_one = currencyEl_one.value;
    const currency_two = currencyEl_two.value;

   console.log(currency_one, currency_two)
   fetch(`https://v6.exchangerate-api.com/v6/0f0c85dbd08079992085a912/latest/${currency_one}`)
    .then(res=> res.json())
    .then(data=>{
       
        const rate= data.conversion_rates[currency_two]
        //console.log(rate)

        rateEl.innerText = `${currency_one} = ${rate} ${currency_two}`

        amountEl_two.value =(amountEl_one.value *rate).toFixed(5)
    })

    

   
    
}

//event listener
currencyEl_one.addEventListener('change', calculate)
amountEl_one.addEventListener('input', calculate)
currencyEl_two.addEventListener('change', calculate)
amountEl_two.addEventListener('input', calculate)

swap.addEventListener('click',()=>{
    const temp = currencyEl_one.value
    currencyEl_one.value= currencyEl_two.value
    currencyEl_two.value=temp   
    calculate()

})



calculate()