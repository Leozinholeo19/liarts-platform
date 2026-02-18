import ProdutoCard from "../components/ProdutoCard";
import "../styles/produtos.css";

function Produtos() {

  const listaProdutos = [
    {
      id: 1,
      nome: "Caneca Personalizada",
      descricao: "Caneca artesanal com opção de cores e texto.",
      preco: 39.90
    },
    {
      id: 2,
      nome: "Quadro Decorativo",
      descricao: "Quadro artesanal com moldura personalizada.",
      preco: 89.90
    }
  ];

  return (
    <div className="produtos-container">
      <h1>Produtos</h1>
  
      <div className="produtos-grid">
        {listaProdutos.map((produto) => (
          <ProdutoCard key={produto.id} produto={produto} />
        ))}
      </div>
    </div>
  );
}

export default Produtos;
