import React, { ReactNode } from "react";
import styled from "styled-components";
import Loader from "../Loader";

/**
 * @author Davi Wegner
 * @email davi@wegn.dev
 * @created 26-06-2021
 */
interface Props extends React.HTMLProps<HTMLButtonElement> {
  loading?: boolean;
  fullWidth?: boolean;
  children?: ReactNode | ReactNode[];
}
const ButtonBase: React.FC<Props> = styled.button<Props>`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    ${(props) => props.fullWidth && "width: 100%;"};
    padding: 10px;
    border-radius: 8px;
    border: 0;
    background-color: #5569ff;
    color: #ffffff;
    font-size: 16px;
    font-weight: 600;
    line-height: 1.75;
    cursor: pointer;
    &:hover {
      background-color: #4454cc;
    }
    &:disabled {
      background-color: #e0e0e0;
      color: #00000042;
    }
  `,
  Button: React.FC<Props> = (props: Props) => {
    const { loading, children, ...otherProps } = props;
    return (
      <ButtonBase disabled={loading} {...otherProps}>
        {!loading && children}
        {loading && <Loader />}
      </ButtonBase>
    );
  };
ButtonBase.defaultProps = {
  type: "button",
};

export default Button;
