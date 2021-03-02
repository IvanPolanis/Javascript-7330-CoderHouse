/*Variables principales*/ 
const productList = []
const cart = [];
var counter = 0, auxCounter = 3;

/*Clase*/
class Product{
    constructor(id,name,type,price,description,stock,img,qty){
        this.id = id;
        this.name = name;
        this.type = type;
        this.price = parseFloat(price);
        this.description = description;
        this.stock = parseInt(stock);
        this.img = img;
        this.qty = qty;
    }
    addIVA(){
        this.price = this.price * 1.21;
    }
    sold(){
        this.stock -= 1;
    }
    addOne(){
        this.qty += 1;
    }
}
/*Botón ver más */
let buttonSM = document.getElementById("btn-SM");
buttonSM.onclick = addCards;
/*Funciones */

function gettingLocalStorage(){
    let cartArray = localStorage.getItem("cart");
    if(cartArray != null){
        let aux = JSON.parse(cartArray);
        for (const i of aux){
            let product = new Product(i.id,i.name,i.type,i.price,i.description,i.stock,i.img,i.qty)
            cart.push(product);
            createCartModal(product);
        }
    }
}
function createCartModal(product){
    let container =  document.createElement("tr");
    container.id = `cartModalProduct${product.id}`
    let elementplace =  document.getElementById("cartModalBody");
    container.innerHTML= `  <td class="w-25">
                                <img src="${product.img}" class="img-fluid img-thumbnail" alt="Sheep">
                            </td>
                            <td>${product.name}</td>
                            <td>$${product.price}</td>
                            <td class="qty">${product.qty}</td>
                            <td>$${product.price * product.qty}</td>
                            <td>
                            <a href="#" class="btn btn-danger btn-sm">
                                <i class="fa fa-times"></i>
                            </a>
                            </td>`
    elementplace.appendChild(container);
}
function refreshCardModal(product){
    let element = document.getElementById(`cartModalProduct${product.id}`);
    element.innerHTML= `  <td class="w-25">
                                <img src="${product.img}" class="img-fluid img-thumbnail" alt="Sheep">
                            </td>
                            <td>${product.name}</td>
                            <td>$${product.price}</td>
                            <td class="qty">${product.qty}</td>
                            <td>$${product.price * product.qty}</td>
                            <td>
                            <a href="#" class="btn btn-danger btn-sm">
                                <i class="fa fa-times"></i>
                            </a>
                            </td>`
}
function addCards(){
    for (counter; counter <auxCounter; counter++){
        let product = new Product(data[counter].id,data[counter].name,data[counter].type,data[counter].price,data[counter].description,data[counter].stock,data[counter].img);
        newProduct(data[counter]);
        productList.push(product);
    }
    auxCounter += 3;
}

function newProduct(product){
    let container = document.createElement("div");
    let elementplace = document.getElementById("card-deck");
    container.className = "card col-md-4";
    container.innerHTML = `
                            <div class="card-head">
                                <img src="${product.img}" alt="" class="card-img-top w-100">
                            </div>
                                <p class="card-product">${product.name}</p>
                                <span class="card-price">$${product.price}</span>
                                <div class="card-button">
                                <button type="button" class="btn btn-light" data-toggle="modal" data-target="#product${product.id}"><i class="gg-eye"></i></button>
                                <button id="${product.id}" class="btn btn-primary">Agregar al carrito</button>
                                </div>
                            `
    elementplace.appendChild(container);
    newModal(product);
    let addBtn = document.getElementById(product.id);
    addBtn.onclick = () =>{
            if(cart == ""){
                cart.push(product);
                product.qty = 1;
                refreshCardModal(product);
            }else{
                for(let i = 0; i <= cart.length; i++){
                if(cart[i] == undefined){
                    cart.push(product);
                    product.qty = 1;
                    refreshCardModal(cart[i]);
                    break;
                }else if (product.id == cart[i].id){
                    cart[i].qty += 1;
                    refreshCardModal(cart[i]);
                    break;
                }}
        }
        
        localStorage.setItem("cart",JSON.stringify(cart));
    }
}

function newModal(product){
    let container = document.createElement("div");
    let elementPlace = document.getElementById("card-deck");
    container.className = "modal fade"
    container.id = `product${product.id}`
    container.tabIndex = `-1`
    container.innerHTML= `
                            <div class="modal-dialog modal-dialog-centered" role="document">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="modalProduct${product.id}">${product.name}</h5>
                                        </button>
                                        </div>
                                    <div class="modal-body">
                                        <img class="modal-img" src="${product.img}"></img>
                                        <div class="modal-description">
                                            <p>Nombre: ${product.name}</p>
                                            <p>Precio: $${product.price}</p>
                                            <p>Descripción: ${product.description}</p>

                                        </div>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                    </div>
                                </div>
                            </div>
                            `
    elementPlace.appendChild(container);
    document.getElementById(`product${product.id}`).setAttribute("role", `dialog`);
    document.getElementById(`product${product.id}`).setAttribute("aria-labelledby", `modalProduct${product.id}`);
    document.getElementById(`product${product.id}`).setAttribute("aria-hidden", `true`);
}

/*Llamada a funciones*/
gettingLocalStorage();
addCards();