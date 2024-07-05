import Banner from "./components/Banner";
import Cabecalho from "./components/Cabecalho";
import Footer from "./components/Footer";


function App() {
  return (
    <>
      <Cabecalho />
      <main>
        <Banner />
      </main>
      <Footer nomeAutor = "Thiago Luz" />
    </>
  )
}

export default App;