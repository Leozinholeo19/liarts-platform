import { useContext } from "react";
import { CarrinhoContext } from "../context/CarrinhoContext";
import "../styles/carrinho.css";

function Carrinho() {
    const { carrinho, removerDoCarrinho } = useContext(CarrinhoContext);
  
    return (
      <div className="carrinho-container">
        <h1>Carrinho</h1>
  
        {carrinho.length === 0 ? (
          <p>Seu carrinho está vazio.</p>
        ) : (
          carrinho.map((item, index) => (
            <div key={index} className="carrinho-item">
              <div className="carrinho-info">
                <h3>{item.nome}</h3>
                <p>Cor: {item.cor}</p>
                <p>Preço: R$ {item.preco}</p>
              </div>
  
              <button
                className="botao-remover"
                onClick={() => removerDoCarrinho(index)}
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
