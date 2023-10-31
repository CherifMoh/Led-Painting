import {products} from '../data/products.js'
import {cart} from './cart.js'


document.querySelector('main').style.height = window.innerHeight-82 + "px"

products.forEach((product)=>{
    cart.forEach((cartItem)=>{
        if(cartItem.id === product.id){
            const html = `
            <div class="product">
            <div class="product-image-container">
            <span class="product-quntity">${cartItem.quantity}</span>
            <img src="assets/${product.imageOn}" class="product-image">
                    </div>
                    <div class="product-title">${product.title}</div>
                    <div class="product-price"><span class="products-price">${product.salePrice *cartItem.quantity}</span> Da</div>
                    </div>
                    `
                    
                    document.querySelector('.product-items-container')
                    .innerHTML += html
                }
            })
})

const subtotal = document.querySelector('.js-subtotal-price')
const shipping = document.querySelector('.js-shipping-price')
const total = document.querySelector('.js-total-price')
const prices = document.querySelectorAll('.products-price')
prices.forEach((price)=>{
    subtotal.innerHTML = Number(price.innerHTML)+ Number(subtotal.innerHTML)
})
total.innerHTML = Number(subtotal.innerHTML)+Number(shipping.innerHTML)


document.querySelector('#totalPrice').value= total.innerHTML
console.log(document.querySelector('#totalPrice').value)

cart.forEach((cartItem , i)=>{
    products.forEach(product=>{
        if(cartItem.id === product.id){
            const html =`
            <input name="productName${i}" value="${product.title}" id="productName${i}" type="hidden">
            <input name="productQuntity${i}" value="${cartItem.quantity}" id="productQuntity${i}" type="hidden">
            `
            document.querySelector('.hidden-inputs').innerHTML += html

            document.querySelector(`#productName${i}`).value = product.title
            document.querySelector(`#productQuntity${i}`).value = cartItem.quantity
        }
    })
})

console.log(document.querySelector('.hidden-inputs').innerHTML)