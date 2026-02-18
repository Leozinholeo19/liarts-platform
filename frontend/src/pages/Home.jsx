import { Link } from "react-router-dom";
import "../styles/home.css";
import bolsa from "../assets/images/bolsa1.jpg";
import carteira from "../assets/images/carteira.jpg";
import tiracolo from "../assets/images/tiracolo.jpg";

function Home() {
  return (
    <div className="home-container">
      
      {/* HERO */}
      <div className="hero">
        <h1>Bem-vindo(a) à LiArts Miçangas</h1>

        <p>
          Descubra um mundo encantador de arte e criatividade com nossos
          produtos feitos à mão. Criamos peças exclusivas com dedicação,
          carinho e atenção aos detalhes.
        </p>

        <Link to="/produtos">
          <button className="botao-principal">
            Ver Produtos
          </button>
        </Link>
      </div>

      {/* PRODUTOS DESTAQUE */}
      <div className="destaques">
        <h2>Produtos em Destaque</h2>

        <div className="destaques-grid">
            <div className="destaque-card">
            <img
                src={bolsa}
                alt="Bolsa artesanal"
            />
            <p>Bolsa de Pérolas</p>
            </div>

            <div className="destaque-card">
            <img
                src={carteira}
                alt="Carteira artesanal"
            />
            <p>Carteira Artesanal</p>
            </div>

            <div className="destaque-card">
            <img
                src={tiracolo}
                alt="Bolsa tiracolo"
            />
            <p>Bolsa Tiracolo</p>
            </div>
        </div>
        </div>

      {/* SOBRE */}
      <div className="sobre">
        <h2>Sobre a LiArts</h2>
        <p>
          A LiArts nasceu da paixão pelo artesanato e pela arte das miçangas.
          Cada peça é criada com carinho, criatividade e atenção aos mínimos
          detalhes para transformar produtos em verdadeiras expressões de arte.
        </p>
      </div>

    </div>
  );
}

export default Home;
