import { useForm } from "react-hook-form";
import { Button } from "react-bootstrap";

function Contato() {
    const { register, handleSubmit, formState: {errors}} = useForm();

    function enviarForm(data) {
        console.log("Enviar");
        console.log(data);
    }

    return(
        <main>
            <form action="" className="form-section" onSubmit={handleSubmit(enviarForm)}>
                <h1>ENVIE UMA MENSAGEM</h1>
                <p>Envie o formulário e nossa equipe retornará o contato</p>
                <div>
                    <label htmlFor="nome">Nome</label>
                    <input type="text"
                     className="form-control"
                      id="nome"
                    {...register ("nome", {required:true})}
                     />
                     {errors.nome && <small className="invalid">Digite seu nome</small>}
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email"
                     id="email"
                      className="form-control"
                      {...register("email", {required: true})} />
                    {errors.email && <small>O email é inválido!</small>}
                </div>
                <div>
                    <label htmlFor="telefone">Telefone</label>
                    <input type="tel"
                     id="tel"
                     pattern="\d{11}"
                     placeholder="(xx)xxxxx-xxxx"
                     className="form-control"
                     {...register("tel", {required: true})} />
                    {errors.tel && <small>Digite seu telefone</small>}
                </div>
                <div>
                    <label htmlFor="descricao">Descrição</label>
                    <textarea id="descricao" className="form-control" {...register("descricao")}></textarea>
                </div>
                <div>
                    <label htmlFor="categoria">Selecione seu Curso</label>
                    <select id="categoria" className="form-select" {...register("categoria")}>
                        <option value="eng.civil">Eng. Civil</option>
                        <option value="eng.eletrica">Eng. Eletrica</option>
                        <option value="eng.florestal">Eng. Florestal</option>
                        <option value="outro">Outro</option>
                    </select>
                    <div>
                        <p>Se seu curso não está na lista acima</p>
                        <label htmlFor="outro">Digite seu curso</label>
                        <input type="text" className="form-control" id="nome" />
                    </div>
                    <div className="form-check">
                    <input 
                        type="checkbox"
                         id="termouso"
                         className="form-check-input" 
                         {...register("termouso", {required: true})}
                    />
                    <label htmlFor="termouso"
                     className="form-check-label">
                        Concordo com o termo
                    </label>
                    {errors.termouso && <small> <br /> Concorde com os termos.</small>}
                </div>
                </div>
                <Button className="mt-1 w-100" type="submit">Enviar</Button>
            </form>
        </main>
    );
}

export default Contato;