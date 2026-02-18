import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{
      backgroundColor: "#222",
      padding: "15px",
      display: "flex",
      gap: "20px"
    }}>
      <Link to="/" style={{ color: "white", textDecoration: "none" }}>Home</Link>
      <Link to="/produtos" style={{ color: "white", textDecoration: "none" }}>Produtos</Link>
      <Link to="/login" style={{ color: "white", textDecoration: "none" }}>Login</Link>
      <Link to="/cadastro" style={{ color: "white", textDecoration: "none" }}>Cadastro</Link>
      <Link to="/carrinho" style={{ color: "white", textDecoration: "none" }}>Carrinho</Link>
    </nav>
  );
}

export default Navbar;
