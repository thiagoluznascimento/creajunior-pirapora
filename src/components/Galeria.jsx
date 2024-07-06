import "./Galeria.css";

import CardImagem from "./CardImagem";

import imagem from "../assets/palestra.jpg";
import imagem1 from "../assets/palestra3.jpg";



function Galeria() {
    return (
        <>
        <h2 className="galeria">PALESTRAS MINISTRADAS</h2>

        <section className="box-galeria">
            <CardImagem titulo = "Palestra Engenharia Eletrica."
                desc = "Os poderes da Engenharia eletrica para Pirapora e região"
                autor = "Joao Algusto"
                linkImagem = {imagem1} legenda = "Imagem Engenharia eletrica"
            />

            <CardImagem titulo = "Palestra Engenharia Civil."
                desc = "Os poderes da Engenharia Civil para Pirapora e região"
                autor = "Marcelo Ozorio"
                linkImagem = {imagem} legenda = "Imagem Engenharia Civil"
            />

            <CardImagem titulo = "Palestra Engenharia Civil."
                desc = "Os poderes da Engenharia Civil para Pirapora e região"
                autor = "Marcelo Ozorio"
                linkImagem = {imagem} legenda = "Imagem Engenharia Civil"
            />

            <CardImagem titulo = "Palestra Engenharia Civil."
                desc = "Os poderes da Engenharia Civil para Pirapora e região"
                autor = "Marcelo Ozorio"
                linkImagem = {imagem} legenda = "Imagem Engenharia Civil"
            />

            <CardImagem titulo = "Palestra Engenharia Eletrica."
                desc = "Os poderes da Engenharia eletrica para Pirapora e região"
                autor = "Joao Algusto"
                linkImagem = {imagem1} legenda = "Imagem Engenharia eletrica"
            />

            <CardImagem titulo = "Palestra Engenharia Civil."
                desc = "Os poderes da Engenharia Civil para Pirapora e região"
                autor = "Marcelo Ozorio"
                linkImagem = {imagem} legenda = "Imagem Engenharia Civil"
            />

        </section>
        </>
        );
}

export default Galeria;