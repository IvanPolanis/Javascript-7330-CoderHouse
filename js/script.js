const productList = []

class Product{
    constructor(id,name,price,description,stock){
        this.id = id;
        this.name = name;
        this.price = parseFloat(price);
        this.description = description;
        this.stock = parseInt(stock);
    }
    addIVA(){
        this.price = this.price * 1.21;
    }
    sold(){
        this.stock -= 1;
    }
}
const product1 = new Product(1,"I9",375,"lorem ipsum...", 100);
const product2 = new Product(2,"Ryzen 5",385,"lorem ipsum...", 100);
const product3 = new Product(3, "RTX 3090",2500,"lorem ipsum...", 100);

const arrProducts = [product1,product2,product3];

function getProduct(){
    let index = 0;
    index = parseInt(prompt("¿Que producto desea agregar al carrito? 1 = I9, 2 = Ryzen 5, 3 = RTX3090"));
    do{
        if  (index < 1 | index > 3) {
            alert("El número ingresado no es válido.")
            index = parseInt(prompt("¿Que producto desea agregar al carrito? 1 = I9, 2 = Ryzen 5, 3 = RTX3090"));
        }
    }while(index < 1 | index > 3);
    const searchProduct = arrProducts.find(product => product.id == index);
    productList.push(searchProduct);
}
function addProduct(){
    getProduct();
    let x = parseInt(prompt("Ingrese 1 si desea seguir agregando productos o ingrese 0 para terminar."));
    do{
    if(x == 1) {
        return addProduct();
    }else if (x == 0){
        return showCart();
    }else{
        x = parseInt(prompt("El valor ingresado no es válido, porfavor ingrese 1 o 0."));
    }}while(x != 1 | x != 0);
}
function printArr(){
    const list = []
    for(const product of productList){
        list.push(product.name)
    }
    return list;
}
function showCart(){
    alert(`En su carrito tiene los siguientes productos:  ${printArr()}`)
}
function newProduct(){
    let product = new Product(4, prompt("Ingrese el nombre del producto: "), parseFloat(prompt("Ingrese el precio del producto: ")),prompt("Ingrese una descripción: "), parseInt(prompt("Ingrese el stock: ")) )
    let container = document.createElement("div");
    let elementplace = document.getElementById("card-deck");
    container.className = "card col-md-4";
    container.innerHTML = `
                            <div class="card-head">
                                <img src="assets/img/placeholder.png" alt="" class="card-img-top w-100">
                            </div>
                                <p class="card-product">${product.name}</p>
                                <span class="card-price">$${product.price}</span>
                                <div class="card-button">
                                <button class="btn btn-light"><i class="gg-eye"></i></button>
                                <button class="btn btn-primary">Agregar al carrito</button>
                                </div>
                            `
    elementplace.appendChild(container)
}
newProduct();
addProduct();