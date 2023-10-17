// localStorage.removeItem('cart')
export let cart = JSON.parse(localStorage.getItem('cart')) || []

console.log(cart)