import { Card } from "react-bootstrap";
import "../components/Cards.css"


function ProcessoSeletivo(){
    return(
        <div className="container">
        <Card className="cd-sobre-nos">
            <Card.Header as = "h3" className="cd-header"> QUEM PODE PARTICIPAR? </Card.Header>
            <Card.Body>
                {/* <Card.Title className="cd-title"></Card.Title> */}
                <Card.Text className="cd-text">
                    Todos os estudantes e recém-formados dos cursos vinculados ao Sistema Confea/Crea. <br />
                     O Crea Jr-MG reconhece como recém-formado o profissional com no máximo dois anos de formado,
                     a contar da data de sua colação de grau.
                </Card.Text>
            </Card.Body>
        </Card>
    </div>
    );
}

export default ProcessoSeletivo;