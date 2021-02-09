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
    do{
        index = parseInt(prompt("¿Que producto desea agregar al carrito? 1 = I9, 2 = Ryzen 5, 3 = RTX3090"));
    }while(index < 0 | index > 3);
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
addProduct();