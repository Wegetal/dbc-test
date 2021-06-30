import React from "react";
import styled from "styled-components";
import { BackButton, DragonForm } from "../../shared";
import * as DragonApi from "../../../services/api/dragon";
import { DragonTypes } from "../../../types";

/**
 * @author Davi Wegner
 * @email davi@wegn.dev
 * @created 28-06-2021
 */

//this page container should be put on the route map of components, as its basically the same on all pages
interface Props {}
const PageContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  `,
  DragonCreate: React.FC = (props: Props) => {
    const onCreate = (form: DragonTypes.Create) => {
      return DragonApi.create(form);
    };
    return (
      <PageContainer>
        <DragonForm onSubmitCallback={onCreate} />
        <BackButton />
      </PageContainer>
    );
  };

export default DragonCreate;
