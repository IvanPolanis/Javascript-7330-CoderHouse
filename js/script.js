const productList = []
const cart = [];
var counter = 0, auxCounter = 3;
class Product{
    constructor(id,name,type,price,description,stock,img){
        this.id = id;
        this.name = name;
        this.type = type;
        this.price = parseFloat(price);
        this.description = description;
        this.stock = parseInt(stock);
        this.img = img;
    }
    addIVA(){
        this.price = this.price * 1.21;
    }
    sold(){
        this.stock -= 1;
    }
}
let buttonSM = document.getElementById("btn-SM");
buttonSM.onclick = addCards;
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
        cart.push(product);
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
addCards();