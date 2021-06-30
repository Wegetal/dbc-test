import React from "react";
import styled from "styled-components";
import FabButton from "../FabButton";
import { MdArrowBack } from "react-icons/md";
import { useHistory } from "react-router-dom";

/**
 * @author Davi Wegner
 * @email davi@wegn.dev
 * @created 29-06-2021
 */
interface Props {}
const FabButtonStyled = styled(FabButton)`
    position: fixed;
    left: 15px;
    bottom: 15px;
  `,
  BackButton: React.FC<Props> = (props: Props) => {
    const history = useHistory(),
      onClick = (e: React.MouseEvent<HTMLElement>) => {
        history.goBack();
      };
    return (
      <>
        {history.length > 0 && (
          <FabButtonStyled onClick={onClick}>
            <MdArrowBack />
          </FabButtonStyled>
        )}
      </>
    );
  };

export default BackButton;
