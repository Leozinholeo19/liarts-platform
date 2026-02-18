import { Link } from "react-router-dom";
import { useContext } from "react";
import { CarrinhoContext } from "../context/CarrinhoContext";
import "../styles/navbar.css";

function Navbar() {
  const { carrinho } = useContext(CarrinhoContext);

  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/produtos">Produtos</Link>
      <Link to="/login">Login</Link>
      <Link to="/cadastro">Cadastro</Link>
      <Link to="/carrinho">
        Carrinho ({carrinho.length})
      </Link>
    </nav>
  );
}

export default Navbar;
