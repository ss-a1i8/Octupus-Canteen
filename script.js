let subtotal = 0;
let items = [];


fetch('menu-items.json')
    .then(response => response.json())
    .then(ext_menu => {
        menu = ext_menu;
        populateMenu(menu);
    })
    .catch(error => {
        console.error('Error loading JSON:', error);
    });

function populateMenu(menu) {
    document.getElementById("btn-1").innerHTML =
        `<p>${menu["btn-1"].name}<br><br>£ ${menu["btn-1"].price.toFixed(2)}</p>`;
    document.getElementById("btn-2").innerHTML =
        `<p>${menu["btn-2"].name}<br><br>£ ${menu["btn-2"].price.toFixed(2)}</p>`;
    document.getElementById("btn-3").innerHTML =
        `<p>${menu["btn-3"].name}<br><br>£ ${menu["btn-3"].price.toFixed(2)}</p>`;
    document.getElementById("btn-4").innerHTML =
        `<p>${menu["btn-4"].name}<br><br>£ ${menu["btn-4"].price.toFixed(2)}</p>`;
    document.getElementById("btn-5").innerHTML =
        `<p>${menu["btn-5"].name}<br><br>£ ${menu["btn-5"].price.toFixed(2)}</p>`;
    document.getElementById("btn-6").innerHTML =
        `<p>${menu["btn-6"].name}<br><br>£ ${menu["btn-6"].price.toFixed(2)}</p>`;
    document.getElementById("btn-7").innerHTML =
        `<p>${menu["btn-7"].name}<br><br>£ ${menu["btn-7"].price.toFixed(2)}</p>`;
    document.getElementById("btn-8").innerHTML =
        `<p>${menu["btn-8"].name}<br><br>£ ${menu["btn-8"].price.toFixed(2)}</p>`;
    document.getElementById("btn-9").innerHTML =
        `<p>${menu["btn-9"].name}<br><br>£ ${menu["btn-9"].price.toFixed(2)}</p>`;
}


function addItemToTotal1() { addItem('btn-1'); }
function addItemToTotal2() { addItem('btn-2'); }
function addItemToTotal3() { addItem('btn-3'); }
function addItemToTotal4() { addItem('btn-4'); }
function addItemToTotal5() { addItem('btn-5'); }
function addItemToTotal6() { addItem('btn-6'); }
function addItemToTotal7() { addItem('btn-7'); }
function addItemToTotal8() { addItem('btn-8'); }
function addItemToTotal9() { addItem('btn-9'); }


function addItem(buttonId) {
    const item = menu[buttonId];
    subtotal += item.price;
    items.push(item.name);
    

    const receiptList = document.getElementById("receipt-list");
    const listItem = document.createElement("li");
    listItem.textContent = `${item.name} - £${item.price.toFixed(2)}`;
    receiptList.appendChild(listItem);


    document.getElementById("total-price").textContent = `Total: £${subtotal.toFixed(2)}`;
}


document.getElementById("btn-1").addEventListener("click", addItemToTotal1);
document.getElementById("btn-2").addEventListener("click", addItemToTotal2);
document.getElementById("btn-3").addEventListener("click", addItemToTotal3);
document.getElementById("btn-4").addEventListener("click", addItemToTotal4);
document.getElementById("btn-5").addEventListener("click", addItemToTotal5);
document.getElementById("btn-6").addEventListener("click", addItemToTotal6);
document.getElementById("btn-7").addEventListener("click", addItemToTotal7);
document.getElementById("btn-8").addEventListener("click", addItemToTotal8);
document.getElementById("btn-9").addEventListener("click", addItemToTotal9);


document.getElementById("Reset").addEventListener("click", () => {
    subtotal = 0;
    items = [];
    document.getElementById("receipt-list").innerHTML = ""; 
    document.getElementById("total-price").textContent = "Total: £0.00"; 
});
