const quantity = document.querySelector('.quantity-input')
document.querySelector('.plus-quantity-button')
    .addEventListener('click', ()=>{
        quantity.value -= -1
    })
document.querySelector('.minus-quantity-button')
    .addEventListener('click', ()=>{
        quantity.value < 2 ? '' :quantity.value -= 1
    })