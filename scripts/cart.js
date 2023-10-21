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
                            <button class="cart-item-minus-button" data-product-id=${cartItem.id}>-</button>
                            <input class="cart-item-quantity-input" data-product-id=${cartItem.id} min="1" value="${cartItem.quantity}" type="text" >
                            <button class="cart-item-plus-button" data-product-id=${cartItem.id}>+</button>
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

function itemPlusButton(){
    document.querySelectorAll('.cart-item-plus-button').forEach((plusBut)=>{
        cart.forEach((cartItem)=>{
            if(cartItem.id === plusBut.dataset.productId ){
                plusBut.addEventListener('click',()=>{
                    cartItem.quantity =Number(cartItem.quantity)+1
                    localStorage.setItem('cart', JSON.stringify(cart)) 
                    document.querySelectorAll('.cart-item-quantity-input').forEach((quantity)=>{
                        if(quantity.dataset.productId === cartItem.id){
                            quantity.value = cartItem.quantity
                        }
                    })
                    document.querySelector('.cart-button-quntity-number')
                        .innerHTML =  cartQuantityNumber ()
                    document.querySelector('.cart-header-quntity')
                        .innerHTML =  `Cart • ${cartQuantityNumber ()}` 
                    // tootalePrice()
                })
            }
    })  })
}
function itemMinusButton(){
    document.querySelectorAll('.cart-item-minus-button').forEach((minusBut)=>{
        cart.forEach((cartItem)=>{
            if(cartItem.id === minusBut.dataset.productId ){
                minusBut.addEventListener('click',()=>{
                    cartItem.quantity =Number(cartItem.quantity)-1
                    localStorage.setItem('cart', JSON.stringify(cart)) 
                    document.querySelectorAll('.cart-item-quantity-input').forEach((quantity)=>{
                        if(quantity.dataset.productId === cartItem.id){
                            quantity.value = cartItem.quantity
                        }
                    }) 
                    document.querySelector('.cart-button-quntity-number')
                        .innerHTML =  cartQuantityNumber ()
                    document.querySelector('.cart-header-quntity')
                        .innerHTML =  `Cart • ${cartQuantityNumber ()}`
                    // tootalePrice()
                })
        }
    })})
}
itemMinusButton()
itemPlusButton()


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
})
function tootalePrice(){
    cart.forEach(cartItem=>{
        products.forEach(product=>{
            if(cartItem.id === product.id){
                let totelPrice = Number(document.querySelector('.checkout-price').innerHTML)
                totelPrice += product.salePrice*cartItem.quantity
                document.querySelector('.checkout-price').innerHTML = totelPrice
            }
        })
    })
}
tootalePrice()
function cartQuantityNumber (){
    let Quantity = 0 ;
    cart.forEach(cartItem=>{
        Quantity += Number(cartItem.quantity)
    })
    return Quantity
}
if(cartQuantityNumber ()){
document.querySelector('.cart-button-quntity-number')
    .innerHTML =  cartQuantityNumber ()
document.querySelector('.cart-header-quntity')
    .innerHTML =  `Cart • ${cartQuantityNumber ()}`
}