




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