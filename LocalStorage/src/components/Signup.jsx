export default function Signup (){
    return(
        <section>
        <h1>Registrer bruker</h1>
        <form>
            <label>
                E-post
                <input type="email" placeholder="nikolaio@gmail.com" />
            </label>
            <label>
                fullt navn
                <input type="text" placeholder="Nikolai Kruge Olsen" />
            </label>
            <label>
                Brukernavn
                <input type="text" placeholder="OlaNordman..."/>
            </label>
            <label>Passord
                <input type="password" placeholder="*********" />
            </label>
            <button>Registrer</button>
        </form>
        </section>
    );
}