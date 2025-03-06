import { Link } from "react-router-dom";

export default function Layout ({children}){
    return(
        <>
        <header>
            <nav>
                <Link to="/" id="logo">Connectics</Link>
                <ul>
                    <li><Link to="login">Login</Link></li>
                    <li><Link to="signup">Signup</Link></li>
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