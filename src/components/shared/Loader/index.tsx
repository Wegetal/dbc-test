import styled from "styled-components";

/**
 * @author Davi Wegner
 * @email davi@wegn.dev
 * @created 30-06-2021
 */

const Loader = styled.div`
  border: 4px solid #f3f3f3;
  border-top: 4px solid #4454cc;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default Loader;
