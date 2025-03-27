import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { fetchAllProducts } from './sanity/productsServices'
import { fetchAllCategories } from './sanity/categoryServices'

function App() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([])

  const getAllProducts = async()=>{
    const data = await fetchAllProducts()
    setProducts(data)
  };

  const getAllCategories = async() =>{
    const data = await fetchAllCategories()
    setCategories(data);
  }

  console.log(products)

  useEffect(()=>{getAllProducts();
    getAllCategories()
  },[])
  return (
    <main>
      <h1>min nettbutikk</h1>
      {categories?.map((category) => <button key={category._id}>{category.categoryname}</button>)}
      
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
