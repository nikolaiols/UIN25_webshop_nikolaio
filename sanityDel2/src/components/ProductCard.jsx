export default function ProductCard({product}){
    return (
            <article>
              <h3>{product.productname}</h3>
              <img src={product.image.asset.url}/>
            </article>
    )
}