import styled from "styled-components";

export const Container = styled.div`
  height: 64px;
  padding: 0 30px;
  background: #fff;
`;

export const Content = styled.div`
  height: 64px;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    img {
      margin-right: 20px;
      padding-right: 20px;
      border-right: 2px solid #ddd;
      width: 35px;
    }

    a {
      display: flex;
      align-items: center;
      font-weight: bold;
      color: #7159c1;
    }
  }

  aside {
    display: flex;
    align-items: center;
  }
`;

export const Profile = styled.div`
  display: flex;
  margin-left: 20px;
  padding-left: 20px;
  border-left: 2px solid #ddd;

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: #333;
    }

    a {
      display: block;
      margin-top: 2px;
      font-size: 12px;
      color: #fff;
    }

    button {
      border: 0;
      background: none;
      margin-top: 5px;
      margin-left: 10px;
    }
    ul {
      display: ${(props) => (props.visible ? "block" : "none")};
      position: absolute;
      margin-top: 10px;
      padding: 10px;
      background: rgba(0, 0, 0, 0.6);
      color: #fff;

      border-radius: 4px;
      left: calc(80% - 10px);

      &::before {
        content: "";
        position: absolute;
        left: calc(50% - 10px);
        top: -10px;
        width: 0;
        height: 0;
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
        border-bottom: 10px solid rgba(0, 0, 0, 0.6);
      }
    }
  }
  img {
    height: 32px;
    width: 32px;
    border-radius: 50%;
    border: 2px solid #7159c1;
  }
`;
