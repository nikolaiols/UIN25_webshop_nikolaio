import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

export default function ContentPage(){
    const {slug, content} = useParams();
    const [pageContent, setpageContent] = useState()

  

    const getContent = async() => {
        fetch(`https://zelda.fanapis.com/api/${slug}/${content}`)
        .then(response => response.json())
        .then((data) => setpageContent(data.data))
        .catch((error) => console.error("skjedde noe rart med henting av innhold", error))
    };
    useEffect(()=>{
        getContent();
        console.log(pageContent)
    }, [content]);

    return (
    <>
    <h1>{pageContent?.name}</h1>
    <section>
        {pageContent?.inhabitants ? 
       <>
       <h2>inhabitants</h2>
        <ul>
            {/*disse må fetches*/}
        <li>{pageContent?.inhabitants}</li>
        </ul>
        </>
        : null} 
        
    </section>
    </>
)

}