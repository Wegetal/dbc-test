import React from "react";
import styled from "styled-components";
import { useRouteMatch } from "react-router-dom";
import DragonView from "../../content/DragonView";
import { BackButton } from "../../../components/shared";

/**
 * @author Davi Wegner
 * @email davi@wegn.dev
 * @created 28-06-2021
 */
interface Props {}
interface MatchParams {
  id?: string;
}
const PageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  `,
  Dragon: React.FC<Props> = (props: Props) => {
    const { params } = useRouteMatch<MatchParams>();
    return (
      <PageContainer>
        <DragonView id={params.id} />
        <BackButton />
      </PageContainer>
    );
  };

export default Dragon;
