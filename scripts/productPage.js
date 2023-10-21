import {cart} from './cart.js'

const product = JSON.parse(localStorage.getItem('selectedProduct'))
const html =
`
<section class="selected-prodect-container">

<section class="product-gallery">
<div class="main-image-container">
<img src="assets/${product.imageOn}" class="main-image main-image-on">
<img src="assets/${product.imageOff}" class="main-image main-image-off">
</div>
        <div class="gallery-container">
            <img src="assets/${product.imageOff}" class="gallery-image">
            <img src="assets/${product.imageOn}" class="gallery-image">
        </div>
        </section>
        
        
        <section class="product-info">
        <div class="product-title">${product.title}</div>
        <div class="price-container">
        <span class="price-befor-sale">${product.price} DA</span>
        <span class="price-after-sale">${product.salePrice} DA</span>
        <span class="sale-mark">Sale</span>
        </div>
        <p>Quantity</p>
        <div class="quantity-container">
        <button class="minus-quantity-button">-</button>
        <input value="1" min="1" class="quantity-input" type="text">
        <button class="plus-quantity-button">+</button>
        </div>
        <button class="Add-to-cart" data-product-id=${product.id}>Add to cart</button>
        </section>
        </section>
    `
document.querySelector('.main-section').innerHTML = html

const quantity = document.querySelector('.quantity-input')

document.querySelector('.plus-quantity-button')
    .addEventListener('click', ()=>{
        quantity.value -= -1
    })
document.querySelector('.minus-quantity-button')
    .addEventListener('click', ()=>{
        quantity.value < 2 ? '' :quantity.value -= 1
    })

const addToCart = document.querySelector('.Add-to-cart')
addToCart.addEventListener('click',()=>{
        const productId = addToCart.dataset.productId
        let Quantity = quantity.value
        let matchingItem = 0;
        cart.forEach((cartItem)=>{
        if(cartItem.id === productId){
            matchingItem = cartItem;
        }        
        });
        if(matchingItem){
        matchingItem.quantity = Quantity
        localStorage.setItem('cart', JSON.stringify(cart))  
        }else{
        cart.push({
            id:productId,
            quantity: Quantity
        });
        localStorage.setItem('cart', JSON.stringify(cart))  
        }
        location.reload()        
})


function imgOffMouseover() {
    document.querySelectorAll(`.main-image-off`).forEach(imgOff=>{
        imgOff.classList.add('product-img-off-animation')
        imgOff.classList.add('product-img-off-after-animation')
    })  
}
function imgOffMouseleave() {
    document.querySelectorAll(`.main-image-off`).forEach(imgOff=>{
        imgOff.classList.remove('product-img-off-animation')
        imgOff.classList.remove('product-img-off-after-animation')
        setTimeout(()=>{
            imgOff.classList.remove('product-img-off-after-animation')
        },800)
    }) 
}
document.querySelectorAll(`.main-image-on`).forEach(imgOn=>{
    imgOn.addEventListener('mouseover',() => {
        imgOn.classList.add('no-opacity')
        imgOffMouseover()
    })
    imgOn.addEventListener('mouseleave',() => {
        imgOn.classList.remove('no-opacity')
        imgOn.classList.add('product-img-on-animation')
        setTimeout(()=>{
            imgOn.classList.remove('product-img-on-animation')
        },800)
        imgOffMouseleave()
    })
})
