import React, { ReactNode } from "react";
import styled from "styled-components";

/**
 * @author Davi Wegner
 * @email davi@wegn.dev
 * @created 27-06-2021
 */
interface Props {
  dataLength: number;
  children?: ReactNode | ReactNode[];
}
const ListContainer = styled.div<any>`
    display: flex;
    flex-wrap: wrap;
    @media (min-width: 1000px) {
      &::after {
        content: "";
        flex: 1;
        ${(props) => {
          let length = props.dataLength | 0;
          return `flex-basis: ${(3 - (length % 3)) * 33.333}%;`;
        }}
      }
    }
    @media (max-width: 1000px) {
      &::after {
        content: "";
        flex: 1;
        flex-basis: 50%;
      }
    }
    @media (max-width: 800px) {
      flex-basis: 100%;
    }
  `,
  List: React.FC<Props> = (props: Props) => {
    const { children, dataLength } = props;

    return <ListContainer dataLength={dataLength}>{children}</ListContainer>;
  };
List.defaultProps = {
  dataLength: 0,
};
export default List;
