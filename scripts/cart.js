import {products} from '../data/products.js'

export let cart = JSON.parse(localStorage.getItem('cart')) || []

products.forEach((product)=>{
    cart.forEach(cartItem => {
        if(cartItem.id === product.id){
            const html = `
            <div class="cart-item-container">
                <div class="cart-item-img-container">
                    <img src="assets/${product.imageOn}" class="cart-item-img">
                </div>
                <div class="cart-item-info-container">
                    <div class="cart-item-top-row">
                        <div class="cart-item-title">${product.title}</div>
                        <div class="cart-item-trash" data-product-id=${product.id}>X</div>
                    </div>
                    <div class="cart-item-lower-row">
                        <div class="cart-item-quantity-container">
                            <button class="cart-item-minus-button">-</button>
                            <input class="cart-item-quantity-input" min="1" value="${cartItem.quantity}" type="text" >
                            <button class="cart-item-plus-button">+</button>
                        </div>
                        <div class="cart-item-price-container">
                            <div class="cart-item-price">
                                <span class="cart-item-befor-price">${product.price}</span>
                                <span class="cart-item-after-price">${product.salePrice}DA</span>
                            </div>
                            <div class="cart-item-saved">(Save ${product.price - product.salePrice}DA)</div>
                        </div>
                    </div>
                </div>
            </div>
            `
            document.querySelector('.cart-items')
                .innerHTML += html
        }
    })
});

document.querySelector('.cart-button-container')
.addEventListener('click',()=>{
        console.log('cherif')
    document.querySelector('.cart-container')
        .classList.add('translatx','box-shadow')
    document.querySelector('body').classList.add('stop-scrolling')
})

document.querySelector('.cart-off')
.addEventListener('click',()=>{
    document.querySelector('.cart-container')
    .classList.remove('translatx','box-shadow')
    document.querySelector('body').classList.remove('stop-scrolling')
})

const quantity = document.querySelector('.cart-item-quantity-input')
if(document.querySelector('.cart-item-plus-button')){
    document.querySelector('.cart-item-plus-button')
    .addEventListener('click', ()=>{
        quantity.value -= -1
    })
document.querySelector('.cart-item-minus-button')
    .addEventListener('click', ()=>{
        quantity.value < 2 ? '' :quantity.value -= 1
    })

document.querySelectorAll('.cart-item-trash').forEach((deletBut)=>{
    deletBut.addEventListener('click',()=>{
        cart.forEach((cartItem, index) =>{
            if(deletBut.dataset.productId ===cartItem.id){
                cart.splice(index,1)
                localStorage.setItem('cart', JSON.stringify(cart))  
                location.reload()
            }
        })
    })
})}

