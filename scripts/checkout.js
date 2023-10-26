import {products} from '../data/products.js'
import {cart} from './cart.js'

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
console.log(window.innerHeight)
console.log(document.querySelector('main').style.height)
const a = 4
document.querySelector('main').style.height = window.innerHeight-82 + "px"