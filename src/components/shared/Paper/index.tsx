import React from "react";
import styled from "styled-components";

/**
 * @author Davi Wegner
 * @email davi@wegn.dev
 * @created 26-06-2021
 */

const Paper: React.FC = styled.div`
  background-color: #ffffff;
  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%),
    0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
  border-radius: 10px;
`;
Paper.defaultProps = {
  className: "paper",
};

export default Paper;
