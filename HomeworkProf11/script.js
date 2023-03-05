const form = document.querySelector("#product-form");
const nameI = document.querySelector("#name");
const priceI = document.querySelector("#price");
const list = document.querySelector("#product-list");
const removeBtn = document.querySelector(".removeBtn");

const products = [];
list.inner = updateList( checkLocalStorage("obj"));


function newProduct (name, price) {
    products.push({ name: name, price: price });
}

function updateList() {
    list.innerHTML = "";
    products.forEach((product) => {
        let item = document.createElement("li");
        item.innerText = `${product.name} - ${product.price}$`;
        list.append(item);
    });
};


form.onsubmit = (e) => {
    e.preventDefault();
    const nameValue = nameI.value ;
    const priceValue = parseFloat(priceI.value);
    newProduct(nameValue, priceValue);
    nameI.value = "";
    priceI.value = "";
    updateList();
    writeLocalStorage(products);
};

function writeLocalStorage(value) {
    let stringObj = JSON.stringify(value);
    localStorage.setItem("obj", stringObj);
};

 function checkLocalStorage(kay) {
    const newObjString =localStorage.getItem(kay); 
    if(newObjString) {
        const newObj = JSON.parse(newObjString);
        newObj.forEach((elem) => {
        products.push(elem);
    });
    return products;
 } else {
    return products;
 }
 };

removeBtn.onclick = () =>{
    localStorage.clear();
    list.innerHTML = "";
};