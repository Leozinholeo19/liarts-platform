import ProdutoCard from "../components/ProdutoCard";

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
    <div style={{ padding: "20px" }}>
      <h1>Produtos</h1>

      <div style={{
        display: "flex",
        gap: "20px",
        flexWrap: "wrap"
      }}>
        {listaProdutos.map((produto) => (
          <ProdutoCard key={produto.id} produto={produto} />
        ))}
      </div>
    </div>
  );
}

export default Produtos;
