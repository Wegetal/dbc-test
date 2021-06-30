import styled from "styled-components";

/**
 * @author Davi Wegner
 * @email davi@wegn.dev
 * @created 27-06-2021
 */
const FabButton = styled.button<any>`
  border-radius: 15px;
  min-height: 30px;
  height: 30px;
  min-width: 30px;
  width: 30px;
  font-size: 20px;
  border: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 4px;
  background-color: white;
  box-shadow: 0px 1px 1px -1px rgb(0 0 0 / 20%),
    0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
  ${(props) =>
    props.noBackground && "background-color: transparent;box-shadow: unset;"}
  cursor: pointer;
  &:hover {
    color: #4454cc;
  }
`;
FabButton.defaultProps = {
  type: "button",
};

export default FabButton;
