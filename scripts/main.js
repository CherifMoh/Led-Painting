import {products} from '../data/products.js'

products.forEach(product => {
    const html = `
    <a href="#" class="product-card">
        <div class="product-img-container">
            <img src="assets/${product.image}" class="product-img js-product-img">
        </div>
        <div class="card-info">
            <span class="product-title">
                ${product.title}
            </span>
            <span class="product-price">${product.price} DA</span>
        </div>
    </a>
    `
    document.querySelector('.product-grid').innerHTML += html
    
    
})
    document.querySelectorAll(`.js-product-img`).forEach(img=>{
        img.addEventListener('mouseover',() => {
            img.src='assets/logo.jpg'
            img.classList.add('product-img-animation')
            setTimeout(()=>{
                img.classList.add('product-img-after-animation')
            },200)
        })
        products.forEach(product =>{
            img.addEventListener('mouseleave',() => {
                img.src=`assets/${product.image}`
                img.classList.remove('product-img-animation')
                img.classList.remove('product-img-after-animation')
                setTimeout(()=>{
                    img.classList.remove('product-img-after-animation')
                },200)
            })
            
        })
    })
