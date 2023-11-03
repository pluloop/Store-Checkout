const barcodeNum = document.getElementById("barcode-num"); 
const quantityNum = document.getElementById("quantity-num");
const addCartButton = document.getElementById("button-add");
const itemList = document.getElementById("item-list");

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
    const itemBorder = document.createElement("div");
    itemBorder.classList.add("item");
    itemList.appendChild(itemBorder);

    let quantityText = document.createElement("p");
    quantityText.classList.add("quantity-text");
    quantityText.innerText = quantityNum.value;
    itemBorder.appendChild(quantityText);       
}

addCartButton.addEventListener("click", addItem);