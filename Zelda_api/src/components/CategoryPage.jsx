import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CategoryCard from "./CategoryCard";

export default function CategoryPage() {
  const {slug} = useParams();
  const [result, setresult] = useState()

  const getData = async() =>{
    fetch(`https://zelda.fanapis.com/api/${slug}`)
    .then(response => response.json())
    .then((data) => setresult(data.data))
    .catch((error) => console.error("det skjedde en feil under fetch",error))
  }

  useEffect(()=>{getData();},[slug]);

  return (
    <>
    <h1>{slug}</h1>
    <section className="flex-section">
    {result?.map((item) => (
   <CategoryCard item={item} key={item.id} />
   ))}
    </section>
    </>
  )
}
