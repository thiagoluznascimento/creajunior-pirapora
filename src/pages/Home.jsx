import { Carousel } from "react-bootstrap";
import CarouselImagem from "../components/CarouselImagem";

import imagem from "../assets/banner01.jpg";
import imagem1 from "../assets/palestra.jpg";

const imagens = [
    { caminhoImagem: imagem, texto: "Primeira Semana Eng. Civil", legenda: "Palestra sobre Engenharia Cicil e Edificações" },
    { caminhoImagem: imagem1, texto: "Seminário", legenda: "Sistema de controle de nível por meio de sensor utrasonico" },
];

function Home() {
    return (
        <Carousel>
            {imagens.map((img, index) => (
                <Carousel.Item key={index}>
                    <CarouselImagem linkImagem={img.caminhoImagem} />
                    <Carousel.Caption>
                        <h3>{img.texto}</h3>
                        <p>{img.legenda}</p>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
    );
}

export default Home;