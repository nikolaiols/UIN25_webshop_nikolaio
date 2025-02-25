import { useState } from "react";
import "../assets/styles/layout.scss";
import GameCard from "./GameCard";
import { data } from "react-router-dom";

export default function Home({ games }) {
  const [search, setsearch] = useState()
  const handleSubmit = (e)=>{
    e.preventDefault();
  };
  const handleChange = (e)=>{
    console.log(e.target.value)
  };

  const handleClick = async()=>{
    fetch(`https://zelda.fanapis.com/api/games?name=${search}`)
    .then(response => response.json())
    .then((data) => console.log(data.data))
  }
  return (
    <main>
      <h1>Forside</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="search">her kan du søke etter spill</label>
        <input type="search" id="search" onChange={handleChange}></input>
        <button onClick={handleClick}>søk etter spill</button>
      </form>
      <section className="flex-section">
      {games?.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
      </section>
    </main>
  );
}
