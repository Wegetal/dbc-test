import React, { useContext } from "react";
import styled from "styled-components";
import FabButton from "../FabButton";
import { MdExitToApp } from "react-icons/md";
import { Auth } from "../../../context";

/**
 * @author Davi Wegner
 * @email davi@wegn.dev
 * @created 29-06-2021
 */
interface Props {}
const LogoutButtonContainer = styled(FabButton)`
    position: fixed;
    top: 15px;
    left: 15px;
    background-color: white;
    box-shadow: 0px 1px 1px -1px rgb(0 0 0 / 20%),
      0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
  `,
  LogoutButton: React.FC<Props> = (props: Props) => {
    const { onSignOut } = useContext(Auth.Context);
    return (
      <LogoutButtonContainer
        onClick={onSignOut as React.MouseEventHandler<HTMLButtonElement>}
      >
        <MdExitToApp />
      </LogoutButtonContainer>
    );
  };

export default LogoutButton;
