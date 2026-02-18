import { useContext } from "react";
import { CarrinhoContext } from "../context/CarrinhoContext";

function Carrinho() {
  const { carrinho, removerDoCarrinho } = useContext(CarrinhoContext);

  return (
    <div style={{ padding: "40px" }}>
      <h1>Carrinho</h1>

      {carrinho.length === 0 ? (
        <p>Seu carrinho está vazio.</p>
      ) : (
        carrinho.map((item, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ddd",
              padding: "15px",
              marginBottom: "10px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center"
            }}
          >
            <div>
              <h3>{item.nome}</h3>
              <p>Cor: {item.cor}</p>
              <p>Preço: R$ {item.preco}</p>
            </div>

            <button
              onClick={() => removerDoCarrinho(index)}
              style={{
                backgroundColor: "red",
                color: "white",
                border: "none",
                padding: "8px 12px",
                cursor: "pointer"
              }}
            >
              Remover
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default Carrinho;
