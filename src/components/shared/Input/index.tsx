import React from "react";
import styled from "styled-components";

/**
 * @author Davi Wegner
 * @email davi@wegn.dev
 * @created 27-06-2021
 */
const Input: React.FC = styled.input`
  padding: 14px 10px;
  font-size: 16px;
  width: 100%;
  border: 0px;
  border-radius: 5px;
  &:focus {
    outline: none;
  }
`;
Input.defaultProps = {
  className: "input",
};

export default Input;
