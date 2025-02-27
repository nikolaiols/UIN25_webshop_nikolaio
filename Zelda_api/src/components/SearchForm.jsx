import "../assets/styles/searchComp.scss";
export default function SearchForm({setSearch, handleClick}){
    const handleChange = (e)=>{
        setSearch(e.target.value)
      };
    
    const handleSubmit = (e)=>{
        e.preventDefault();
      };

    return(
    <form onSubmit={handleSubmit}>
        <label htmlFor="search">her kan du søke etter spill</label>
        <input type="search" id="search" onChange={handleChange}></input>
        <button onClick={handleClick}>søk etter spill</button>
      </form>
    )
}