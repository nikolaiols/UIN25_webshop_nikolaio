import "../assets/styles/GameCard.scss"
import { Link } from "react-router-dom";

export default function CategoryCard({item}){
    return( 
    <article className="GameCard">
        <h3>{item.name}</h3>
        <Link to={item.id}>Les mer om {item.name}</Link>
    </article>)
}