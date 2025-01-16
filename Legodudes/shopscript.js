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

    cart.push({cartprodid: prodid, quantity: 1})
    console.log(cart)
}