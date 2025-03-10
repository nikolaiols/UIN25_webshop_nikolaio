import { Link } from "react-router-dom";
import "../styles/layout.scss"

export default function Layout ({children, SignedIn, setSignedIn}){
    const handleLogout = ()=>{
        sessionStorage.setItem("login", false)
        setSignedIn(false);
    }
    
    return(
        <>
        <header>
            <nav>
                <Link to="/" id="logo">Connectics</Link>
                <ul>
                    {SignedIn ? (
                    <>
                    <li>username</li>
                    <li><button onClick={handleLogout}>Logg ut</button></li>
                    </>
                    ):(
                    <>
                    <li><Link to="login">Login</Link></li>
                    <li><Link to="signup">Signup</Link></li>
                    </>
                )}
                </ul>
            </nav>
        </header>
        {children}
        <footer>
            Conectics 2025
        </footer>
        </>
    );
}