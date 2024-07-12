import {BrowserRouter, Route, Routes} from "react-router-dom";

// import Cabecalho from "./components/Cabecalho";
// import Banner from "./components/Banner";
// import Galeria from "./components/Galeria";
import Footer from "./components/Footer";
import Menu from "./components/Menu";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import SobreNos from "./pages/SobreNos";
import PoliticasPrivacidade from "./pages/PoliticasPrivaciade";
import ProcessoSeletivo from "./pages/ProcessoSeletivo";
import Cadastro from "./pages/cadastro";
import Login from "./pages/Login";


function App() {
  return (
    <>
      <BrowserRouter>
        <Menu />
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="sobrenos" element={<SobreNos />} />
          <Route path="processoseletivo" element={<ProcessoSeletivo />} />
          {/* <Route path="eventos" element={<Eventos />} /> */}
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="contato" element={<Contato />} /> */}
          <Route path="/politicasprivacidade" element={<PoliticasPrivacidade />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

      <Footer nomeAutor = "Thiago Luz" />
      </BrowserRouter>
    </>
  )
}

export default App;