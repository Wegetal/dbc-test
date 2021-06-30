import React from "react";
import { DragonTypes } from "../../../types";
import { DragonForm } from "../../shared";
import * as DragonApi from "../../../services/api/dragon";

/**
 * @author Davi Wegner
 * @email davi@wegn.dev
 * @created 30-06-2021
 */

interface Props {}
const DragonCreateForm: React.FC<Props> = (props: Props) => {
  const onCreate = (form: DragonTypes.Form) => {
    return DragonApi.create(form);
  };
  return (
    <>
      <h2>Criar Dragão</h2>
      <DragonForm onSubmitCallback={onCreate} />
    </>
  );
};

export default DragonCreateForm;
