import React, { ReactNode } from "react";
import styled from "styled-components";

/**
 * @author Davi Wegner
 * @email davi@wegn.dev
 * @created 27-06-2021
 */
interface Props {
  className?: string;
  children?: ReactNode | ReactNode[];
}
const ListItemBase = styled.div`
    flex: 1 1;
    padding: 10px;
    text-align: center;
    border-radius: 10px;
    @media (min-width: 1000px) {
      flex-basis: 33.333%;
    }
    @media (max-width: 1000px) {
      flex-basis: 50%;
    }
    @media (max-width: 800px) {
      flex-basis: 100%;
    }
  `,
  ListItem: React.FC<Props> = (props: Props) => {
    const { children } = props;
    return <ListItemBase>{children}</ListItemBase>;
  };
ListItem.defaultProps = {
  className: "listItem",
};
export default ListItem;
