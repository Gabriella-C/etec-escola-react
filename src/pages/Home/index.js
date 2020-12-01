import React from "react";
import { HiPencil, HiOutlineTrash } from "react-icons/hi";

import { Container } from "./styles";
import history from "../../services/history";
import { Link } from "react-router-dom";

function Home() {
  return (
    <Container>
      <form>
        <input type="text" id="materia" name="materia" placeholder="Matéria" />
        <button>Adicionar Aula</button>
      </form>
      <ul>
        <li>
          <div>
            <strong>
              Matéria: ECO - Ética Profissional e Cidadania Organizacional
            </strong>
          </div>
          <nav>
            <button
              onClick={() => {
                return history.push("/editarAula");
              }}
            >
              <HiPencil size={20} color="#81b214" />
            </button>
            <button>
              <HiOutlineTrash size={20} color="#ec5858" />
            </button>
          </nav>
        </li>
        <li>
          <div>
            <strong>Matéria: LTT - Linguagem, Trabalho e Tecnologia</strong>
          </div>
          <nav>
            <button
              onClick={() => {
                return history.push("/editarAula");
              }}
            >
              <HiPencil size={20} color="#81b214" />
            </button>
            <button>
              <HiOutlineTrash size={20} color="#ec5858" />
            </button>
          </nav>
        </li>
      </ul>
    </Container>
  );
}

export default Home;
