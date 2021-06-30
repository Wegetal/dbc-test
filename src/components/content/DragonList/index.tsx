import React, { useCallback, useState } from "react";
import { DragonListItem, Loader, List } from "../../shared";
import { useHistory } from "react-router-dom";
import { DragonTypes } from "../../../types";
import * as DragonApi from "../../../services/api/dragon";
import { useContext } from "react";
import { Notification } from "../../../context";

/**
 * @author Davi Wegner
 * @email davi@wegn.dev
 * @created 27-06-2021
 */
interface Props {}

const DragonList: React.FC<Props> = (props: Props) => {
  const history = useHistory(),
    { onSetMessage } = useContext(Notification.Context),
    [loading, setLoading] = useState<boolean>(false),
    [dragons, setDragons] = useState<DragonTypes.Self[]>(),
    onViewCallback = useCallback(
      (id: number) => {
        history.push(`/dragon/view/${id}`);
      },
      [history]
    ),
    onEditCallback = useCallback(
      (id: number) => {
        history.push(`/dragon/edit/${id}`);
      },
      [history]
    ),
    onRemoveCallback = useCallback(
      (id: number) => {
        setLoading(true);
        DragonApi.remove(id)
          .then((res) => {
            console.log(res);
            if (dragons) {
              let removeIndex: number = dragons.findIndex(
                (dragon: DragonTypes.Self) => dragon.id === id
              );
              if (removeIndex >= 0) dragons.splice(removeIndex, 1);
              setDragons(dragons);
              setLoading(false);
              onSetMessage({
                text: `Dragão excluido com sucesso`,
                type: "success",
              });
            }
          })
          .catch((err) => {
            onSetMessage({
              text: `Houve algum problema ao excluir o dragão`,
              type: "error",
            });
          });
      },
      [dragons, onSetMessage]
    );
  React.useEffect(() => {
    setLoading(true);
    DragonApi.getAll().then((dragons) => {
      setDragons(dragons);
      setLoading(false);
    });
  }, []);

  return (
    <>
      {loading && <Loader />}
      {!loading && dragons && (
        <List dataLength={dragons.length}>
          {dragons.map((dragon: any, i: number) => {
            return (
              <DragonListItem
                src={"/assets/dragon.png"}
                onViewCallback={onViewCallback}
                onEditCallback={onEditCallback}
                onRemoveCallback={onRemoveCallback}
                {...dragon}
                key={i}
              />
            );
          })}
        </List>
      )}
    </>
  );
};

export default DragonList;
