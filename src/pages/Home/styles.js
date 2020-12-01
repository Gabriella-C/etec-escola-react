import styled from "styled-components";
import { darken } from "polished";

export const Container = styled.div`
  max-width: 600px;
  margin: 50px auto;

  display: flex;
  flex-direction: column;

  form {
    display: flex;
    align-items: center;
    justify-content: space-between;
    input {
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #fff;
      margin: 0 0 10px;
      max-width: 350px;
      min-width: 200px;
      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }
    span {
      color: #fb6f91;
      align-self: flex-start;
      margin: 0 0 10px;
      font-weight: bold;
    }
    button {
      padding: 10px;
      margin: 0 0 10px;
      height: 44px;
      background: #3b9eff;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: all 0.2s;
      &:hover {
        background: ${darken(0.08, "#3b9eff")};
      }
    }
    a {
      color: #fff;
      margin-top: 15px;
      font-size: 16px;
      opacity: 0.6;
      &:hover {
        opacity: 1;
      }
    }
  }

  ul {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 15px;

    li {
      padding: 20px;
      display: flex;
      background: #fff;
      border-radius: 4px;
      align-items: center;
      justify-content: space-between;
      border: 0;
      transition: all 0.2s;
      cursor: pointer;

      strong {
        color: #000;
        margin-bottom: 10px;
      }

      div {
        display: flex;
        flex-direction: column;
        > div {
          display: flex;
          flex-direction: row;

          time {
            color: #999;

            padding-right: 5px;
            border-right: 1px solid #999;
            font-size: 12px;
          }

          p {
            color: #999;
            margin-left: 5px;
            font-size: 12px;
          }
        }
      }
      nav {
        margin-top: -20px;
        display: flex;
        justify-content: space-between;

        button {
          border: 0;
          background: none;

          padding: 7px;
          border-radius: 4px;
          transition: all 0.2s;
          &:hover {
            background: #eee;
          }
        }
      }
    }
  }
`;
