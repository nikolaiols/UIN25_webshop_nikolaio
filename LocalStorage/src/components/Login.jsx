export default function Login (){
    return (
        <section>
        <h1>LOGG IN</h1>
        <form>
            <label>
                Brukernavn
                <input type="text" placeholder="OlaNordman..."/>
            </label>
            <label>Passord
                <input type="password" placeholder="*********" />
            </label>
            <button>Logg inn</button>
        </form>
        </section>
    );
}