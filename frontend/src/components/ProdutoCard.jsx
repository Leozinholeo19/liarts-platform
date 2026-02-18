import { Link } from "react-router-dom";
import "../styles/produtos.css";

function ProdutoCard({ produto }) {
  return (
    <div className="produto-card">
      <h3>{produto.nome}</h3>
      <p>{produto.descricao}</p>
      <p><strong>R$ {produto.preco}</strong></p>

      <Link to={`/personalizar/${produto.id}`}>
        <button>
          Personalizar
        </button>
      </Link>
    </div>
  );
}

export default ProdutoCard;
