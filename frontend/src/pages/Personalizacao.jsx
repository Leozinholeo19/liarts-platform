import { useParams } from "react-router-dom";
import { useState } from "react";

function Personalizacao() {
  const { id } = useParams();

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

  const produto = listaProdutos.find(p => p.id === Number(id));

  const [corSelecionada, setCorSelecionada] = useState("Branco");

  if (!produto) {
    return <h2>Produto não encontrado</h2>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>{produto.nome}</h1>
      <p>{produto.descricao}</p>
      <p><strong>R$ {produto.preco}</strong></p>

      <h3>Cor selecionada: {corSelecionada}</h3>

      <div style={{ marginBottom: "20px" }}>
        <button onClick={() => setCorSelecionada("Vermelho")}>Vermelho</button>
        <button onClick={() => setCorSelecionada("Azul")}>Azul</button>
        <button onClick={() => setCorSelecionada("Preto")}>Preto</button>
      </div>

      <div style={{
        width: "400px",
        height: "300px",
        backgroundColor: "#ddd",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}>
        Área reservada para visualização 3D
      </div>
    </div>
  );
}

export default Personalizacao;
