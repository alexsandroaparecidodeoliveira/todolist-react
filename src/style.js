import styled from "styled-components";
import { FcCheckmark } from "react-icons/fc";
import { FaTrash } from "react-icons/fa";
import Bg from "./assets/bg.gif";

export const Container = styled.div`
  background-image: url(${Bg});
  background-color: black;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  width: 100vw;
  min-height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ToDoList = styled.div`
  background: white;
  padding: 30px 20px;
  border-radius: 5px;

  ul {
    padding: 0;
    margin-top: 60px;
  }

  @media (max-width: 768px) {
    width: 90vw;
    padding: 20px 15px;
  }
`;

export const Input = styled.input`
  border: 2px solid rgba(209, 211, 212, 0.4);
  border: 5px;
  height: 40px;
  margin-right: 40px;
  width: 342px;

  @media (max-width: 768px) {
    width: 100%;
    margin-right: 0;
    margin-bottom: 10px;
  }
`;

export const Button = styled.button`
  background: black;
  border-radius: 5px;
  font-size: 1.0625rem;
  line-height: 2px;
  height: 40px;
  border: none;
  color: #ffffff;
  width: 130px;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 100%;
  }

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.6;
  }
`;

export const ListItem = styled.div`
  background: ${({ $isFinished }) => ($isFinished ? "#e8ff8b" : "#e4e4e4")};
  box-shadow: 1px 4px 10px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
  padding: 0 10px;
  width: 100%;
  max-width: 500px;
  user-select: none;

  li {
    list-style: none;
  }

  @media (max-width: 768px) {
    width: auto;
    height: auto;
    padding: 18px;
  }
`;

export const Trash = styled(FaTrash)`
  cursor: pointer;
`;

export const Check = styled(FcCheckmark)`
  cursor: pointer;
`;
