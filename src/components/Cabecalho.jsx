import "./Cabecalho.css"
import imagem from "../assets/logo-branca.png"

function Cabecalho() {
    return(
        <>
        <div className="fundo-header">
            <header className="cabecalho">
                <img src={imagem} alt="imagem logo crea-jr" />
                {/* <h2 className="titulo">Crea-Jr Pirapora</h2> */}
                <nav className="nav-bar">
                        <a href="#">HOME</a>
                        <a href="#">SOBRE NÓS</a>
                        <a href="#">PROCESSO SELETIVO</a>
                        <a href="#">EVENTOS</a>
                        <a href="#">CONTATO</a>
                </nav>
            </header>
        </div>
        </>
    );
}

export default Cabecalho;