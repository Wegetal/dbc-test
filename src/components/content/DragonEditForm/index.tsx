import React, { useState } from "react";
import { DragonForm, Loader } from "../../shared";
import * as DragonApi from "../../../services/api/dragon";
import { DragonTypes } from "../../../types";

/**
 * @author Davi Wegner
 * @email davi@wegn.dev
 * @created 30-06-2021
 */

interface Props {
  id?: string;
}
const DragonEditForm: React.FC<Props> = (props: Props) => {
  const { id } = props,
    [dragon, setDragon] = useState<DragonTypes.Self>(),
    [loading, setLoading] = useState<boolean>(false),
    onUpdate = (form: DragonTypes.Form) => {
      return DragonApi.update(form.id, form);
    };
  React.useEffect(() => {
    if (id) {
      setLoading(true);
      DragonApi.get(id).then((dragon) => {
        setLoading(false);
        setDragon(dragon);
      });
    }
  }, [id]);
  return (
    <>
      {loading && <Loader />}
      {!loading && dragon ? (
        <DragonForm onSubmitCallback={onUpdate} dragon={dragon} />
      ) : (
        <h4>Dragão não encontrado</h4>
      )}
    </>
  );
};

export default DragonEditForm;
