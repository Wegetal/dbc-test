import React from "react";
import styled from "styled-components";
import Input from "../Input";
import TextArea from "../TextArea";

/**
 * @author Davi Wegner
 * @email davi@wegn.dev
 * @created 27-06-2021
 */

interface Props extends React.HTMLProps<HTMLInputElement> {
  type?: "text" | "password" | "email" | "email";
  endItem?: React.ReactNode;
  startItem?: React.ReactNode;
  multiline?: boolean;
}

const TextFieldContainer = styled.div`
    padding: 8px 0px;
    width: 100%;
    .inputContainer {
      display: flex;
      align-items: center;
      width: 100%;
      border: 1px solid #c4c4c4;
      border-radius: 5px;
      &:focus-within {
        outline: none;
        border-color: #3f51b5;
      }
      &:hover {
        border-color: #000000;
        &:focus-within {
          border-color: #3f51b5;
        }
      }
    }
  `,
  TextField: React.FC<Props> = (props: Props) => {
    const { startItem, endItem, multiline, type, ...otherProps } = props;
    return (
      <TextFieldContainer>
        <div className="inputContainer">
          {startItem}
          {!multiline ? (
            <Input {...otherProps} />
          ) : (
            <TextArea {...otherProps} />
          )}
          {endItem}
        </div>
      </TextFieldContainer>
    );
  };

TextField.defaultProps = {
  type: "text",
};

export default TextField;
