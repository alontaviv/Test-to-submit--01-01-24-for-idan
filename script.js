let names = document.querySelector('#inputProduct')
let price = document.querySelector('#inputPrice')
let selectCategory = document.querySelector('#selectCategory')
let buttonCheck = document.querySelector('#buttonCheck')
let tbody = document.querySelector('.tbody')
let arrayProduct = []

buttonCheck.addEventListener('click', function () {
    let product = {
        ProductName: names.value,
        price: price.value,
        categories: selectCategory.value

    }
    arrayProduct.push(product)

    addProduct(product)


});

function addProduct(Product) {
    debugger
    let tr = document.createElement('tr')
    let td1 = document.createElement('td')
    td1.textContent = Product.ProductName

    let td2 = document.createElement('td')
    td1.textContent = Product.ProductName

    let td3 = document.createElement('td')
    td1.textContent = Product.ProductName

    tr.appendChild(td1)
    tr.appendChild(td2)
    tr.appendChild(td3)
    tbody.appendChild(tr)


}
