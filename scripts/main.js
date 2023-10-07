import {products} from '../data/products.js'

products.forEach(product => {
    console.log(product)
    const html = `
    <a href="#" class="product-card">
        <img src="assets/${product.image}" class="product-img">
        <div class="card-info">
            <span class="product-title">
                ${product.title}
            </span>
            <span class="product-price">${product.price} DA</span>
        </div>
    </a>
    `
    document.querySelector('.product-grid')
        .innerHTML += html
})