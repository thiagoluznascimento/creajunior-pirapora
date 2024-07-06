import Cabecalho from "./components/Cabecalho";
import Banner from "./components/Banner";
import Galeria from "./components/Galeria";
import Footer from "./components/Footer";


function App() {
  return (
    <>
      <Cabecalho />
      <main>
        <Banner />
        <Galeria />
      </main>
      <Footer nomeAutor = "Thiago Luz" />
    </>
  )
}

export default App;