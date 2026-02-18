import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Produtos from "./pages/Produtos";
import Personalizacao from "./pages/Personalizacao";
import Carrinho from "./pages/Carrinho";
import Navbar from "./components/Navbar";
import { CarrinhoProvider } from "./context/CarrinhoContext";
import Footer from "./components/Footer";

function App() {
  return (
    <CarrinhoProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/produtos" element={<Produtos />} />
          <Route path="/personalizar/:id" element={<Personalizacao />} />
          <Route path="/carrinho" element={<Carrinho />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </CarrinhoProvider>  
  );
}

export default App;
