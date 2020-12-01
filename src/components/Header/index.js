import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineCaretDown } from "react-icons/ai";

import { Container, Content, Profile } from "./styles";

import logo from "../../assets/logo.jpeg";

function Header() {
  const [visible, setVisible] = React.useState(false);

  function handleVisible() {
    setVisible(!visible);
  }

  return (
    <Container>
      <Content>
        <nav>
          <Link to="/home">
            <img src={logo} alt="ETEC" />
            HOME
          </Link>
        </nav>
        <aside>
          <Profile visible={visible}>
            <div>
              <strong>Professora Candido</strong>
              <div>
                <button onClick={handleVisible}>
                  <AiOutlineCaretDown size={15} color="#7159c1" />
                </button>
                <ul>
                  <li>
                    <Link to="/">Sair</Link>
                  </li>
                </ul>
              </div>
            </div>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}

export default Header;
