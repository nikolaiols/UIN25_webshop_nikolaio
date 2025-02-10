import { useParams } from "react-router";
import { products } from "../assets/legodudes";
import ProductCard from "./ProductCard";

export default function CategoryPage(products, cart, setCart, cartCount){
    const {slug} = useParams()
    
    const CategoryProducts = products.filter((products) => products.categorySlug === slug)
    console.log(CategoryProducts)
    return (
        <main>
        <div id="productlist">
        {/* Mapper gjennom produktlisten og genererer en ProductCard-komponent for hvert produkt */}
        {CategoryProducts.map((product, index) => (
            <ProductCard
            product={product}
            key={`FCT_${index}`}
            setCartCount={setCartCount}
            cart={cart}
            setCart={setCart}
            />
        ))}
        </div>
        </main>
    )

}