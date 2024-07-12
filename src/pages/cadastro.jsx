import { useForm } from "react-hook-form";

import Butoes from "../components/Botoes";

 
function Cadastro() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    // toda vez que eu for utilizar useForm temos que criar essa funcao para capturar e tratar esses dados
    function cadastrar (data) {
        console.log("Cadastro!");
        console.log(data);
    }
    return(
        <main className="mt-4">
            {/*  A funcao handleSubmit "faz a "mágica" por trás para pegar as informações e colocar dentro do data. para isso ele passa para a funcao cadastrar que recebe esse paramentro (data) */}
            <form action="" className="form-section" onSubmit={handleSubmit(cadastrar)}> 
                <h1>Cadastro</h1>
                <hr />
                <div>
                    <label htmlFor="nome">Nome</label>
                    <input 
                        type="text"
                        id="nome"
                        className="form-control" 
                        {...register("nome", {required: true, maxLength: 150})}
                    />
                    {errors.nome && <small className="invalid">O nome é inválido!</small>}
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input 
                        type="email"
                        id="email"
                        className="form-control"
                        {...register("email", {required: true})}
                    />
                    {errors.email && <small className="invalid">O email é inválido!</small>}
                </div>
                <div>
                    <label htmlFor="senha">Senha</label>
                    <input 
                        type="password"
                        id="senha"
                        className="form-control"
                        {...register("senha", {required: true, minLength: 6})}
                    />
                    {errors.senha && <small className="invalid">A senha é inválida!</small>}
                </div>
                <Butoes />
            </form>
        </main>
    );
}

export default Cadastro;