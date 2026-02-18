import "../styles/footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-col">
          <h3>LiArts Miçangas</h3>
          <p>
            Artesanato feito com carinho, criatividade e atenção aos detalhes.
            Cada peça é única, como você.
          </p>
        </div>

        <div className="footer-col">
          <h4>Contato</h4>
          <p>Email: liarts.9723@gmail.com</p>
          <p>WhatsApp: (61) xxxx-xxxx</p>
        </div>

        <div className="footer-col">
          <h4>Redes Sociais</h4>
          <p>Instagram: @liartes97</p>
        </div>

      </div>

      <div className="footer-bottom">
        Desenvolvido por Eliane Alves
      </div>
    </footer>
  );
}

export default Footer;
