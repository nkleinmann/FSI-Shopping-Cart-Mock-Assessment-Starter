const plusBtn = document.querySelector('#quantity-up')
const minusBtn = document.querySelector('#quantity-down')
let quantityInfo = document.querySelector('.total-quantity')

// bonus
let item = document.querySelector('.cart-item')
let removeBtn = document.querySelector('.remove')
let productQuantity = document.querySelector('.product-quanity')
// let totalPrice = document.querySelector('.total-price')
// bonus

// console.log('Hello world')

let quantity = 1

plusBtn.addEventListener('click', function(){
    // console.log('clicked')
    quantity++
    quantityInfo.textContent = `Quantity: ${quantity}`
    // updateTotal()
})

minusBtn.addEventListener('click', function(){
    // console.log('minus clicked')
    // quantity--
    if (quantity > 0) {
        quantity--
    }
    quantityInfo.textContent = `Quantity: ${quantity}`
    // updateTotal()
})


// bonus
removeBtn.addEventListener('click', function(e){
    item.remove()
})

let totalInfo = document.createElement('h1')
// let total = quantity * 15
// console.log(total)
// totalPrice.append(total)
productQuantity.append(totalInfo)

function updateTotal() {
    let total = quantity * 15
    totalInfo.textContent = `Total: ${total}`

}


// bonus




// minusBtn.addEventListener('click', function(e){
//     // console.log('minus clicked')
//     // quantity--
//     if (quantity > 0) {
//         quantity--
//     }
//     e.target.textContent = `Quantity: ${quantity}`
// })