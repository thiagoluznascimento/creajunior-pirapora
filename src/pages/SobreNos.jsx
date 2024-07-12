import { Card } from "react-bootstrap";
import "../components/Cards.css";


function SobreNos() {
    return(
        <div className="container">
            <Card className="cd-sobre-nos">
                <Card.Header as = "h3" className="cd-header"> SOBRE NÓS </Card.Header>
                <Card.Body>
                    <Card.Title className="cd-title">Tratamento especial Sobre nós</Card.Title>
                    <Card.Text className="cd-text">
                        O Crea Jr-MG Pirapora foi fundado com o intuito de promover o desenvolvimento profissional e pessoal dos alunos, bem como de toda a comunidade. Nossa missão é proporcionar eventos enriquecedores, como mini cursos, palestras e mesas redondas, que visam ampliar os conhecimentos e habilidades dos participantes.
                        Estamos comprometidos em criar um ambiente colaborativo e inspirador, onde estudantes e profissionais possam trocar experiências, aprender com especialistas e desenvolver novas competências. Além disso, nossos eventos são abertos ao público em geral, fortalecendo o vínculo entre a academia e a sociedade, e contribuindo para a formação de uma comunidade mais engajada e informada.
                        No Crea Jr-MG Pirapora, acreditamos que a educação contínua e o networking são fundamentais para o sucesso no mercado de trabalho e para a construção de uma carreira sólida. Junte-se a nós e faça parte dessa iniciativa transformadora!
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

export default SobreNos;