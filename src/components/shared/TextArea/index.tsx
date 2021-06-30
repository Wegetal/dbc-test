import React from "react";
import styled from "styled-components";

/**
 * @author Davi Wegner
 * @email davi@wegn.dev
 * @created 30-06-2021
 */

const TextArea: React.FC<any> = styled.textarea<any>`
  resize: none;
  width: 100%;
  border: 0px;
  border-radius: 5px;
  font-size: 16px;
  padding: 14px 10px;
  min-height: 100px;
  &:focus {
    outline: none;
  }
`;

export default TextArea;
