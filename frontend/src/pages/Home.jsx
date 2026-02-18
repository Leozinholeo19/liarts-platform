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

      {/* PRODUTOS DESTAQUE CARROSSEL */}
      <div className="carrossel-section">
        <h2>Produtos em Destaque</h2>

        <div 
            className="carrossel-container"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            <button className="seta esquerda" onClick={() => scroll(-1)}>
            &#10094;
            </button>

            <div className="carrossel" ref={carrosselRef}>
            <div className="carrossel-item">
                <img src={bolsa} alt="Produto 1" />
                <p>Bolsinha de mão</p>
                <span>$120.00</span>
                <button>Incluir na sacola</button>
            </div>

            <div className="carrossel-item">
                <img src={carteira} alt="Produto 2" />
                <p>Bolsa tiracolo</p>
                <span>$85.00</span>
                <button>Incluir na sacola</button>
            </div>

            <div className="carrossel-item">
                <img src={tiracolo} alt="Produto 3" />
                <p>Carteira de pérolas</p>
                <span>$45.00</span>
                <button>Incluir na sacola</button>
            </div>

            <div className="carrossel-item">
                <img src={bolsa} alt="Produto 4" />
                <p>Bolsa saco</p>
                <span>$130.00</span>
                <button>Incluir na sacola</button>
            </div>
      </div>

    <button className="seta direita" onClick={() => scroll(1)}>
      &#10095;
    </button>
  </div>
</div>

      {/* PERSONALIZAÇÃO */}
      <div className="personalizacao-section">
        <div className="personalizacao-container">

            <div className="personalizacao-img">
            <img src={bolsa} alt="Produto personalizado" />
            </div>

            <div className="personalizacao-texto">
            <h2>Artesanato com cuidado . . .</h2>
            <p>
                Cada peça é elaborada com atenção aos mínimos detalhes,
                garantindo beleza, qualidade e durabilidade.
            </p>

            <h3>e personalização</h3>
            <p>
                Desenvolvemos um sistema exclusivo que permite aos clientes
                personalizarem seus produtos de acordo com suas preferências.
                Escolha cores, formatos e outros detalhes para criar algo único.
            </p>

            <button>Crie o seu agora</button>
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

      {/* CONTATO */}
      <div className="contato">
      <div className="contato-container">

            <div className="contato-info">
            <h2>Contato</h2>

            <p>
                Estamos aqui para ajudar você! Alguma dúvida ou curiosidade?
                Entre em contato para conhecer mais sobre nosso trabalho.
                Será um prazer atender você e criar algo especial juntos!
            </p>

            <p><strong>E-mail:</strong><br />liarts.9723@gmail.com</p>
            <p><strong>Whatsapp:</strong><br />(61) xxxx-xxxx</p>
            <p><strong>Redes sociais</strong><br />Instagram: @liartes97</p>
            </div>

            <div className="contato-formulario">
            <h3>Formulário de contato</h3>

            <form className="form-contato">
                <input type="text" placeholder="Nome" required />
                <input type="email" placeholder="E-mail" required />
                <input type="tel" placeholder="Número" />
                <textarea placeholder="Mensagem" rows="5" required></textarea>
                <button type="submit">Enviar</button>
            </form>
            </div>

      </div>
      </div>

    </div>
  );
}

export default Home;
