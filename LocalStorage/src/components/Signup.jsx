import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup (){
    const [User, setUser] = useState([]);
    const navigate = useNavigate()

    const handleChange = (e)=>{

        const inputValue = e.target.value;
        const inputName = e.target.name;

        setUser((prev) => ({ ...prev, [inputName]: inputValue}));

        console.log(User);
    }

    const handleClick = (e)=>{
        e.preventDefault()
        localStorage.setItem("user", JSON.stringify(User))
        navigate("/login");
    }

    return(
        <section>
        <h1>Registrer bruker</h1>
        <form>
            <label>
                E-post
                <input name="email" onChange={handleChange} type="email" placeholder="nikolaio@..." />
            </label>
            <label>
                fullt navn
                <input name="name" onChange={handleChange} type="text" placeholder="Nikolai Kruge" />
            </label>
            <label>
                Brukernavn
                <input name="username" onChange={handleChange} type="text" placeholder="OlaNordman..."/>
            </label>
            <label>
                Passord
                <input name="password" onChange={handleChange} type="password" placeholder="*********" />
            </label>
            <button onClick={handleClick}>Registrer</button>
        </form>
        </section>
    );
}