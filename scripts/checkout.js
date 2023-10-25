import {products} from '../data/products.js'
import {cart} from './cart.js'

products.forEach((product)=>{
    cart.forEach((cartItem)=>{
        if(cartItem.id === product.id){
            console.log(product.title)
            const html = `
                <div class="product">
                    <div class="product-image-container">
                        <span class="product-quntity">${cartItem.quantity}</span>
                        <img src="assets/${product.imageOn}" class="product-image">
                    </div>
                    <div class="product-title">${product.title}</div>
                    <div class="product-price">${product.salePrice *cartItem.quantity} Da</div>
                </div>
             `

            document.querySelector('.product-items-container')
                .innerHTML += html
        }
    })
})
