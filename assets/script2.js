const plusBtn = document.querySelectorAll('#quantity-up')
const minusBtn = document.querySelectorAll('#quantity-down')
let quantityInfo = document.querySelectorAll('.total-quantity')

// bonus
let item = document.querySelectorAll('.cart-item')
let removeBtn = document.querySelectorAll('.remove')
let productQuantity = document.querySelectorAll('.product-quanity')

let quantity = 1

let totalInfo = document.createElement('h1')
function updateTotal() {
    let total = quantity * 15
    totalInfo.textContent = `Total: ${total}`
}

console.log(plusBtn)
for(let i = 0; i < plusBtn.length; i ++){
    plusBtn[i].addEventListener('click', function(){
        // console.log('running')
        quantity++
        quantityInfo[i].textContent = `Quantity: ${quantity}`
        productQuantity[i].append(totalInfo)
        updateTotal()
    })
}

for(let i = 0; i < minusBtn.length; i ++){
    minusBtn[i].addEventListener('click', function(){
        if (quantity > 0) {
            quantity--
        }
        quantityInfo[i].textContent = `Quantity: ${quantity}`
        productQuantity[i].append(totalInfo)
        updateTotal()
    })
}

for(let i = 0; i < removeBtn.length; i ++){
    removeBtn[i].addEventListener('click', function(){
      item[i].remove()
    })
}
