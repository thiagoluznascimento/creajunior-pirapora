import "./Galeria.css";

import CardImagem from "./CardImagem";

import imagem from "../assets/palestra.jpg";
import imagem1 from "../assets/palestra3.jpg";

const cards = [
    {titulo: "Palestra Engenharia Eletrica.", desc: "Os poderes da Engenharia eletrica para Pirapora e região",
         autor: "Joao Algusto", linkImagem: imagem, legenda: "Imagem Engenharia eletrica"},
    
    {titulo: "Palestra Engenharia Civil.", desc: "Os poderes da Engenharia eletrica para Pirapora e região",
    autor: "Marcelo Ozorio", linkImagem: imagem1, legenda: "Imagem Engenharia eletrica"},

    {titulo: "Palestra Engenharia Eletrica.", desc: "Os poderes da Engenharia eletrica para Pirapora e região",
        autor: "Algusto Santos", linkImagem: imagem, legenda: "Imagem Engenharia eletrica"},

    {titulo: "Palestra Engenharia Civil.", desc: "Os poderes da Engenharia eletrica para Pirapora e região",
        autor: "Joao Algusto", linkImagem: imagem1, legenda: "Imagem Engenharia eletrica"},

    {titulo: "Palestra Engenharia Eletrica.", desc: "Os poderes da Engenharia eletrica para Pirapora e região",
        autor: "Marcelo Ozorio", linkImagem: imagem, legenda: "Imagem Engenharia eletrica"},

    {titulo: "Palestra Engenharia Civil.", desc: "Os poderes da Engenharia eletrica para Pirapora e região",
        autor: "Joao Algusto", linkImagem: imagem1, legenda: "Imagem Engenharia eletrica"},                   
]


function Galeria() {
    const listaCards = cards.map((card, index) => {
        return <CardImagem key={index} titulo = {card.titulo} desc = {card.desc} autor = {card.autor} linkImagem = {card.linkImagem} legenda = {card.legenda} />
    });

    return (
        <>
            <h2 className="galeria">PALESTRAS MINISTRADAS</h2>
            <section className="box-galeria">
                {listaCards}
            </section>
        </>
        );
}

export default Galeria;