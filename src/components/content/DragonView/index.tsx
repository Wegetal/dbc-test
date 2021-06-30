import React from "react";
import { useState } from "react";
import { DragonCard, Loader } from "../../shared";
import { DragonTypes } from "../../../types";
import * as DragonApi from "../../../services/api/dragon";

/**
 * @author Davi Wegner
 * @email davi@wegn.dev
 * @created 29-06-2021
 */

interface Props {
  id?: string;
}

const DragonView: React.FC<Props> = (props: Props) => {
  const { id } = props,
    [loading, setLoading] = useState(false),
    [dragon, setDragon] = useState<DragonTypes.Self>();
  React.useEffect(() => {
    if (id) {
      setLoading(true);
      DragonApi.get(id)
        .then((dragon) => {
          setLoading(false);
          setDragon(dragon);
        })
        .catch((err) => {});
    }
  }, [id]);
  return (
    <>
      {loading && <Loader />}
      {dragon && <DragonCard img="/assets/dragon.png" {...dragon} />}
    </>
  );
};
export default DragonView;
