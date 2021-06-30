import React from "react";
import DragonList from "../../content/DragonList";
import styled from "styled-components";
import { MdAdd } from "react-icons/md";
import { FabButton } from "../../shared";

/**
 * @author Davi Wegner
 * @email davi@wegn.dev
 * @created 26-06-2021
 */

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding: 32px;
  .button {
    position: fixed;
    background-color: white;
    top: 15px;
    right: 15px;
    width: 80px;
    box-shadow: 0px 1px 1px -1px rgb(0 0 0 / 20%),
      0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
  }
  .text {
    font-size: 0.7em;
  }
`;
const Home: React.FC<any> = (props) => {
  const { history } = props,
    onCreate = (e: React.MouseEvent<HTMLElement>) => {
      history.push("/dragon/create");
    };

  return (
    <PageContainer>
      <h2>Lista de Dragões</h2>
      <FabButton onClick={onCreate} className="button">
        <span className="text">Novo</span>
        <MdAdd />
      </FabButton>
      <DragonList />
    </PageContainer>
  );
};

export default Home;
