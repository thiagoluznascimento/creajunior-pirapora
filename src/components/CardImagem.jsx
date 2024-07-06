import "./CardImagem.css";

function CardImagem(props) {
    console.log(props);
    return (
        <article className="article">
            <h3>{props.titulo}</h3>
            <img src={props.linkImagem} alt={props.legenda} />
            <p>{props.desc}</p>
            <small>Palestrante: {props.autor}</small>
        </article>
    );
}

export default CardImagem;
