console.log(products)

//gå igjennom alle produkter og generere html for hvert produkt og generere dette til index.html

//en variabel som kan holde på html for produktnene
let productHTML = ""

products.map((product, index) => productHTML += 
            ` 
            <article class="product-card">
                <img src="website_images/PROD_${product.imagefile}" alt="PRODUKTTITTEL"/>
                <a href="#KATEGORISIDE">Ninjago</a>
                <h3>${product.title}</h3>
                <p>${product.price},-</p>
                <button onclick="addProductToCart(${product.prodid})">Legg i handlekurv</button>
            </article>`)

//finn #productlist og fyll med variabelen productHTML
document.getElementById("productlist").innerHTML = productHTML

//lage toggle funktionalitet for handlevogn
document.getElementById("shoppingcart").addEventListener("click", function(){
    document.getElementById("cart").classList.toggle("visible") //ferdigbygd js if else test.
})

//lage addProductToCart
function addProductToCart(prodid){
    console.log("du vil legge til productid" + prodid)
    //bruk .some for å sjekke om prodid allerede finnes i cart
    const idExsist = cart.some(cartprod => cartprod.cartprodid === prodid)//returnerer en true eller false

    if(idExsist){
        //oppdatere dette produktet quantity
        //først: finne indexen til denne id-en 
        const index = cart.findIndex(p => p.cartprodid === prodid)
        // oppdatere riktig quantity
        cart[index].quantity++
    }else{
        cart.push({cartprodid: prodid, quantity: 1})
    }

    printcart()
    console.log(cart)
}

function printcart() {
    //starte med en tom variabel vi kan fylle med html
    let cartHTML = ""
    //lag klar variabel for pris
    let cartTotal = 0;
    //lag variabel for antall produkter 
    let cartNumber = 0;


    //gå igjennom cart arrayen og generere html for hvert produkt 
    cart.map((cartprod, index) => {
        const currentproduct = products.findIndex(p => p.prodid === cartprod.cartprodid)
        const currentproductinfo = products[currentproduct]
        cartHTML += 
                `<article class="cart-product">
                    <span class="title">${currentproductinfo.title}</span>
                    <span class="price">${currentproductinfo.price},-</span>
                    <span class="quantity">x<span class="quantity-number">${cartprod.quantity}</span></span>
                    <button class="delete">x</button>
                </article>`

            //regn ut totalsum 
            cartTotal += currentproductinfo.price * cartprod.quantity
            cartNumber+= cartprod.quantity
    })
    //skrive ut html til index fila
    document.getElementById("cart-products").innerHTML = cartHTML

    //skrive ut totalpris
    document.getElementById("cart-total").innerHTML = cartTotal
    // skrive ut antall produkter
    document.getElementById("cartcount").innerHTML = cartNumber
}

printcart()