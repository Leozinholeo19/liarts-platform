import { Link } from "react-router-dom";

function ProdutoCard({ produto }) {
  return (
    <div style={{
      border: "1px solid #ddd",
      borderRadius: "8px",
      padding: "15px",
      width: "250px",
      boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
    }}>
      <h3>{produto.nome}</h3>
      <p>{produto.descricao}</p>
      <p><strong>R$ {produto.preco}</strong></p>

      <Link to="/personalizar">
        <button style={{
          padding: "8px 12px",
          cursor: "pointer"
        }}>
          Personalizar
        </button>
      </Link>
    </div>
  );
}

export default ProdutoCard;
