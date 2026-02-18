import { Link } from "react-router-dom";
import "../styles/navbar.css";

function Navbar() {
    return (
        <nav className="navbar">
          <Link to="/">Home</Link>
          <Link to="/produtos">Produtos</Link>
          <Link to="/login">Login</Link>
          <Link to="/cadastro">Cadastro</Link>
          <Link to="/carrinho">Carrinho</Link>
        </nav>
      );
}

export default Navbar;
