import "./Footer.css"

function Footer(props) {
    
    return(
        <footer>
            ©2024 Crea-Jr Pirapora | Todos os direitos reservados.
            <small><br /> Desenvolvido por: {props.nomeAutor}</small>
        </footer>
    );
}

export default Footer;