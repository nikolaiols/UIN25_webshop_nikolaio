import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { fetchAllProducts } from './sanity/productsServices'

function App() {
  const [products, setProducts] = useState([]);

  const getAllProducts = async()=>{
    const data = await fetchAllProducts()
    setProducts(data)
  };

  console.log(products)

  useEffect(()=>{getAllProducts()},[])
  return (
    <main>
      <h1>min nettbutikk</h1>
      {products?.map(product => 
        <article key={product._id}>
          <h3>{product.productname}</h3>
          <img src={product.image.asset.url}/>
        </article>
      )}
    </main>
  )
}

export default App
