const plusBtn = document.querySelector('#quantity-up')
const minusBtn = document.querySelector('#quantity-down')
let quantityInfo = document.querySelector('.total-quantity')

let quantity = 1

plusBtn.addEventListener('click', function(){
    // console.log('clicked')
    quantity++
    quantityInfo.textContent = `Quantity: ${quantity}`
})

minusBtn.addEventListener('click', function(){
    // console.log('minus clicked')
    // quantity--
    if (quantity > 0) {
        quantity--
    }
    quantityInfo.textContent = `Quantity: ${quantity}`
})