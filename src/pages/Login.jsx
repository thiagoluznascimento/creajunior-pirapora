import {useForm} from "react-hook-form";

import Butoes from "../components/Botoes";


function Login() {
        const { register, handleSubmit, formState: { errors } } = useForm();

        function entrar(data) {
            // data é um objeto com os dados do formulário
            console.log("Login!")
            console.log(data);
        }
    return (
        <main className="mt-4">
            <form action="" className="form-section" onSubmit={handleSubmit(entrar)}>
                <div>
                    <label htmlFor="email">Email</label>
                    <input 
                        type="email"
                        id="email"
                        className="form-control"
                        // Spread (...): permite espalhar as propriedades de um objeto em outro
                        {...register("email", {required: "O email é obrigatório"} )} 
                    />
                    {errors.email && <small className="invalid">{errors.email.message}</small>}
                </div>
                <div>
                    <label htmlFor="senha">Senha</label>
                    <input
                        type="password"
                        id="senha"
                        className="form-control"
                        {...register("senha", {required: "A senha é obrigatória", minLength: {value:6, message: "A senha deve ter acima de 6 caracteres"}})}
                        />
                        {/* a mensagem de erro aparece de acordo com o erro. */}
                    {errors.senha && <small className="invalid">{errors.senha.message}</small>}
                </div>
            
                <Butoes />
            </form>
        </main>
    );
}

export default Login;
