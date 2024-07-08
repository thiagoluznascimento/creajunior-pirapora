import "./Botoes.css"

export default function Button() {
    function handleClick() {
        alert('Faça seu cadastro!')
    }
    return (
        <button className="button" onClick={handleClick}>Entrar</button>
    );
}