import { useParams } from "react-router-dom";
import { fetchProductsByslug } from "../sanity/productsServices";
import { useEffect, useState } from "react";

export default function Product(){
    const {product} = useParams();
    console.log(product)
    const [productinfo, setProductinfo] = useState([])
    const getProductBySlug = async (product)=>{
        const data = await fetchProductsByslug(product)
        console.log(data)
    };

    useEffect(()=>{
     getProductBySlug(product)
    },[product]);

    return <h1>{productinfo[0]?.productname}</h1>;
}