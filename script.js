// to get value from text-input
const barcodeNumHTML = document.getElementById("barcode-num"); 
const quantityNumHTML = document.getElementById("quantity-num");
// to use in event listener
const addCartButtonHTML = document.getElementById("button-add");
const checkoutButtonHTML = document.getElementById("button-checkout");

// to nest elements inside
const tableHTML = document.getElementById("table");
const pageHTML = document.getElementById("page");

// to display error message and tax
const errorMessageHTML = document.createElement("p");
const taxMessageHTML = document.createElement("p");

// to display subtotal
const totalAmountHTML = document.getElementById("total-amount");

// track cost and quantity of each item
var totalAmountNumber = 0.0;
var totalQuantity = 0;

// to store barcode with a corresponding item name and price
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
};

// used to store items that have already been scanned (to prevent duplication of items showing up)
var deletedItems = {};

// to add an item to the list
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
        
        totalAmountNumber += parseFloat(barcode[barcodeNumHTML.value].price.toFixed(2));
        totalAmountHTML.innerText = "Total $" + totalAmountNumber;
        totalQuantity = parseFloat(quantityNumHTML.value);

        deletedItems[barcodeNumHTML.value] = barcode[barcodeNumHTML.value].price;

        delete barcode[barcodeNumHTML.value];
    }

    else if (deletedItems.hasOwnProperty(barcodeNumHTML.value)){
        totalAmountNumber += parseFloat(deletedItems[barcodeNumHTML.value].toFixed(2));
        totalAmountHTML.innerText = "Total $" + totalAmountNumber;
        let costSectionHTML = document.getElementById(barcodeNumHTML.value + "cost");
        costSectionHTML.innerText = totalAmountNumber;
        let quantitySectionHTML = document.getElementById(barcodeNumHTML.value + "quantity");
        totalQuantity += parseFloat(quantityNumHTML.value);
        quantitySectionHTML.innerText = totalQuantity;
    }

    else{
        errorMessageHTML.innerText = "Invalid Input!";
        errorMessageHTML.classList.add("error-message");
        pageHTML.appendChild(errorMessageHTML);
    }
}

// calculate tax (9.25% of subtotal) and display it
function calculateTax(){
    let totalAfterTax = (totalAmountNumber + totalAmountNumber * 0.0925);
    taxMessageHTML.innerText = "Your grand total (including tax, 9.25%) is $" + parseFloat(totalAfterTax.toFixed(2));
    taxMessageHTML.classList.add("tax-message");
    pageHTML.appendChild(taxMessageHTML);
}

// add item or calculate tax upon click of button
addCartButtonHTML.addEventListener("click", addItem);
checkoutButtonHTML.addEventListener("click", calculateTax);