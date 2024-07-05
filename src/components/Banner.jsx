import "./Banner.css";
import imagem from "../assets/banner00.jpg"


function Banner() {
    return(
        <>
        <section className ="container">
            <div className="imagem">
                <img src={imagem} alt="" />
                <div className="moldura"></div>
            </div>
            <article className="texto">
                <h2>O QUE NOS DEFINE</h2>
                <p>Somos o primeiro Crea Júnior de Pirapora, referência no fomento à valorização
                profissional e reconhecido como formador de jovens lideranças.</p>
            </article>
        </section>
        </>
    );
}

export default Banner;