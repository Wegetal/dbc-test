import React from "react";
import { useRouteMatch } from "react-router-dom";
import styled from "styled-components";
import DragonEditForm from "../../content/DragonEditForm";
import { BackButton } from "../../shared";

/**
 * @author Davi Wegner
 * @email davi@wegn.dev
 * @created 30-06-2021
 */

interface Props {}
interface MatchParams {
  id?: string;
}
const PageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;
const DragonEdit: React.FC<Props> = (props: Props) => {
  const { params } = useRouteMatch<MatchParams>();
  return (
    <PageContainer>
      <DragonEditForm id={params.id} />
      <BackButton />
    </PageContainer>
  );
};

export default DragonEdit;
