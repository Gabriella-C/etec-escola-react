import React from "react";
import { Link } from "react-router-dom";
import history from "../../services/history";
import logo from "../../assets/logo-semfundo.png";
function SignUp() {
  return (
    <>
      <img src={logo} alt="ETEC" />
      <form>
        <input type="text" id="nome" name="nome" placeholder="Nome" />
        <input type="email" id="email" name="email" placeholder="E-mail" />
        <input type="password" id="senha" name="senha" placeholder="Senha" />
        <input type="text" id="funcao" name="funcao" placeholder="Função" />
        <button onClick={() => history.push("/home")}>Cadastrar-se</button>
        <Link to="/">Já possuo conta</Link>
      </form>
    </>
  );
}

export default SignUp;
