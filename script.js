const barcodeNumHTML = document.getElementById("barcode-num"); 
const quantityNumHTML = document.getElementById("quantity-num");
const addCartButtonHTML = document.getElementById("button-add");
const itemListHTML = document.getElementById("item-list");
const totalAmountHTML = document.getElementById("total-amount");
const tableHTML = document.getElementById("table");
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

var deletedItems = {}

function addItem(){
    if (barcode.hasOwnProperty(barcodeNumHTML.value)){
        let itemRowHTML = document.createElement("tr");
        tableHTML.appendChild(itemRowHTML); 
        let itemSectionHTML = document.createElement("td");
        itemSectionHTML.classList.add("item-section");
        itemSectionHTML.innerText = barcode[barcodeNumHTML.value].name;
        itemRowHTML.appendChild(itemSectionHTML);

        let costSectionHTML = document.createElement("td");
        costSectionHTML.classList.add("cost-section");
        costSectionHTML.innerText = barcode[barcodeNumHTML.value].price;
        tableHTML.appendChild(itemRowHTML); 
        itemRowHTML.appendChild(costSectionHTML);

        costSectionHTML.setAttribute("id", barcodeNumHTML.value + "cost");

        let quantitySectionHTML = document.createElement("td");
        quantitySectionHTML.classList.add("quantity-section");
        quantitySectionHTML.innerText = quantityNumHTML.value;
        itemRowHTML.appendChild(quantitySectionHTML); 
        quantitySectionHTML.setAttribute("id", barcodeNumHTML.value + "quantity");
        quantitySectionHTML.setAttribute("value", quantityNumHTML.value);
        
        totalAmountNumber += barcode[barcodeNumHTML.value].price;
        totalAmountHTML.innerText = "Total $" + totalAmountNumber;

        deletedItems[barcodeNumHTML.value] = barcode[barcodeNumHTML.value].price;

        delete barcode[barcodeNumHTML.value];
    }

    else{
        totalAmountNumber += deletedItems[barcodeNumHTML.value];
        totalAmountHTML.innerText = "Total $" + totalAmountNumber;
        let costSectionHTML = document.getElementById(barcodeNumHTML.value + "cost");
        costSectionHTML.innerText = totalAmountNumber;
        let quantitySectionHTML = document.getElementById(barcodeNumHTML.value + "quantity");
        console.log(quantitySectionHTML.value);
        quantitySectionHTML.innerText = parseFloat(quantitySectionHTML.value) + parseFloat(quantityNumHTML.value);
        console.log(parseFloat(typeof quantitySectionHTML.innerText));
        console.log(parseFloat(quantityNumHTML.value));
    }
}

addCartButtonHTML.addEventListener("click", addItem);