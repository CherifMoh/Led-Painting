import {products} from '../data/products.js'

products.forEach(product => {
    const html = `
    <a href="product.html" class="product-card" data-product-id=${product.id}>
        <div class="product-img-container">
        <img src="assets/${product.imageOff}" class="product-img js-product-img"  data-product-id=${product.id}>
        </div>
        <div class="card-info">
        <span class="product-title">
        ${product.title}
        </span>
        <span class="stars-container">
            <img class="product-stars" src="assets/${product.stars}star.png">
            (${product.starsCom})
        </span> 
            <span class="product-price">
            from ${product.price}
            </span>
            <span class="sale-product-price">
            To ${product.price} DA
            </span>
        </div>
    </a>
    `
    document.querySelector('.product-grid').innerHTML += html
    
    
})
document.querySelectorAll(`.js-product-img`).forEach(img=>{
    products.forEach(product =>{
        if(img.dataset.productId === product.id){
            const on = product.imageOn
            const off = product.imageOff
            
            img.addEventListener('mouseover',() => {
                img.src=`assets/${on}`
                img.classList.add('product-img-animation')
                setTimeout(()=>{
                    img.classList.add('product-img-after-animation')
                },200)
            })
            img.addEventListener('mouseleave',() => {
                img.src=`assets/${off}`
                img.classList.remove('product-img-animation')
                img.classList.remove('product-img-after-animation')
                setTimeout(()=>{
                    img.classList.remove('product-img-after-animation')
                },200)
            })
        }
    })
})
document.querySelectorAll('.product-card').forEach((card)=>{
    card.addEventListener('click', ()=>{
        products.forEach((product)=>{
            if(product.id === card.dataset.productId){
                localStorage.setItem('selectedProduct' ,JSON.stringify(product))
            }
        })
    })
})