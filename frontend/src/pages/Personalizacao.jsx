import { useParams } from "react-router-dom";

function Personalizacao() {
  const { id } = useParams();

  return (
    <div style={{ padding: "20px" }}>
      <h1>Personalização do Produto</h1>
      <p>ID do produto selecionado: {id}</p>

      <div style={{
        width: "400px",
        height: "300px",
        backgroundColor: "#ddd",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "20px"
      }}>
        Área reservada para visualização 3D
      </div>
    </div>
  );
}

export default Personalizacao;
