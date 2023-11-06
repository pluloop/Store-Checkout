const barcodeNumHTML = document.getElementById("barcode-num"); 
const quantityNumHTML = document.getElementById("quantity-num");
const addCartButtonHTML = document.getElementById("button-add");
const itemListHTML = document.getElementById("item-list");
const totalAmountHTML = document.getElementById("total-amount");
var totalAmountNumber = 0.0;

var name;
var price;  

const barcode = {
    "689145740844": {
        name: "JavaScript Textbook",
        price: 34.95
    },

    "4549292070248": {
        name: "Xerox Paper",
        price: 10.99
    },

    "092265222983": {
        name: "First Aid Kit",
        price: 20.99
    },

    "X002ELVL3J": {
        name: "Box of Pencils (50ct.)",
        price: 15.99
    },

    "686024002468": {
        name: "Sanitizing Wipes",
        price: 10.99
    },

    "860004186236": {
        name: "N95 Face Masks",
        price: 15.99
    },

    "036000214000": {
        name: "Kleenex",
        price: 3.99
    },

    "8809693254156": {
        name: "Hand Sanitizer",
        price: 7.99
    },

    "036500060480": {
        name: "Printer Paper",
        price: 9.99
    },

    "085014561877": {
        name: "Brush Pens",
        price: 10.99
    },

    "X0032YGP2T": {
        name: "Multiport Adapter",
        price: 25.99
    },

    "B07G6JT1XS": {
        name: "Scissors (20ct.)",
        price: 23.99
    },

    "9780134682334": {
        name: "iOS Programming Textbook",
        price: 119.99
    },

    "718103230759": {
        name: "Spiral Notebook",
        price: 1.99
    },
}   

function addItem(){
    const itemBorderHTML = document.createElement("div");
    itemBorderHTML.classList.add("item");
    itemListHTML.appendChild(itemBorderHTML);

    let itemTextHTML = document.createElement("p");
    itemTextHTML.classList.add("item-text");
    itemTextHTML.innerText = barcode[barcodeNumHTML.value].name;
    itemBorderHTML.appendChild(itemTextHTML); 

    let priceTextHTML = document.createElement("p");
    priceTextHTML.classList.add("price-text");
    priceTextHTML.innerText = barcode[barcodeNumHTML.value].price;
    itemBorderHTML.appendChild(priceTextHTML); 
    totalAmountNumber += barcode[barcodeNumHTML.value].price;
    totalAmountHTML.innerText = "Total $" + totalAmountNumber;

    let quantityTextHTML = document.createElement("p");
    quantityTextHTML.classList.add("quantity-text");
    quantityTextHTML.innerText = quantityNumHTML.value;
    itemBorderHTML.appendChild(quantityTextHTML); 
}

addCartButtonHTML.addEventListener("click", addItem);