var productList = []

addProduct();

function getProduct(){
    let product = prompt("¿Que producto desea agregar al carrito?");
    productList.push(product);
    
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
        x = parseInt(prompt("El valor ingresado no es válido, porfavor ingrese 1 o 2."));
    }}while(x != 1 | x != 0);
}

function showCart(){
    alert(`En su carrito tiene los siguientes productos: ${productList}`);
}
