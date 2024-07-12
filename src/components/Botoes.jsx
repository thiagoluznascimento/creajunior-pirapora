import { Button } from "react-bootstrap";
import "./Botoes.css"

export default function Butoes() {
    // function handleClick() {
    //     alert('Faça seu cadastro!')
    // }

    return (
        <div>
            {/* <button className="button" onClick={handleClick}>Entrar</button> */}

            {/* w-100 para o botao ficar 100% do tamanho*/}
            <Button className="mt-1 w-100" type="submit">
                Cadastrar
                </Button>
                <Button variant="danger" className="mt-1 w-100" type="button">
                Cadastrar com o Google
            </Button>
        </div>
    );
}