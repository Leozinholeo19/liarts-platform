import { Link } from "react-router-dom";
import "../styles/home.css";

function Home() {
  return (
    <div className="home-container">
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
    </div>
  );
}

export default Home;
