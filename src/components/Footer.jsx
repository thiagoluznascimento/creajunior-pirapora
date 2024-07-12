import { Link } from "react-router-dom";
import "./Footer.css"

function Footer(props) {
    
    return(
        <footer className="custom-navbar text-white py-2 mt-auto fixed-bottom">
            ©2024 Crea Jr-MG Pirapora | Todos os direitos reservados.
            <small><br /> Desenvolvido por: {props.nomeAutor}</small>
            <Link className="politicas" to="/politicasprivacidade">Politicas de privacidade </Link>
        </footer>
    );
}

export default Footer;
