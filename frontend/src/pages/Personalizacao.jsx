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
    <div style={{ padding: "40px" }}>
      <h1 style={{ marginBottom: "30px" }}>Personalização</h1>
  
      <div style={{
        display: "flex",
        gap: "40px"
      }}>
        
        {/* Lado Esquerdo */}
        <div style={{ flex: 1 }}>
          <h2>{produto.nome}</h2>
          <p>{produto.descricao}</p>
          <p><strong>R$ {produto.preco}</strong></p>
  
          <h3 style={{ marginTop: "20px" }}>
            Cor selecionada: {corSelecionada}
          </h3>
  
          <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
            <button onClick={() => setCorSelecionada("Vermelho")}>Vermelho</button>
            <button onClick={() => setCorSelecionada("Azul")}>Azul</button>
            <button onClick={() => setCorSelecionada("Preto")}>Preto</button>
          </div>
  
          <button style={{
            marginTop: "30px",
            padding: "10px 20px",
            cursor: "pointer"
          }}>
            Adicionar ao Carrinho
          </button>
        </div>
  
        {/* Lado Direito */}
        <div style={{
          flex: 1,
          height: "400px",
          backgroundColor: "#ddd",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "8px"
        }}>
          Área reservada para visualização 3D
        </div>
  
      </div>
    </div>
  );
}

export default Personalizacao;
