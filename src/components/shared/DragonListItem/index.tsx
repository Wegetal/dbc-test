import React, { useCallback } from "react";
import styled from "styled-components";
import Avatar from "../Avatar";
import FabButton from "../FabButton";
import ListItem from "../ListItem";
import Paper from "../Paper";
import { MdEdit, MdClear, MdLaunch } from "react-icons/md";
import { DragonTypes } from "../../../types";

/**
 * @author Davi Wegner
 * @email davi@wegn.dev
 * @created 27-06-2021
 */
interface Props extends DragonTypes.Self {
  src: string;
  onViewCallback: (id: number) => void;
  onEditCallback: (id: number) => void;
  onRemoveCallback: (id: number) => void;
}
const DragonContainer = styled(Paper)`
    display: flex;
    width: 100%;
    height: 100%;
    .paper {
      display: flex;
      width: 100%;
      height: 100%;
    }
    .info {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    .content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      text-align: left;
    }
    .subTitle {
      margin-bottom: 0;
      margin-left: 2px;
    }
    .actions {
      display: flex;
    }
  `,
  DragonListItem: React.FC<Props> = (props: Props) => {
    const {
        id,
        src,
        name,
        type,
        onViewCallback,
        onEditCallback,
        onRemoveCallback,
      } = props,
      onView = useCallback(
        (e: React.MouseEvent<HTMLElement>) => {
          if (onViewCallback instanceof Function) onViewCallback(id);
        },
        [id, onViewCallback]
      ),
      onEdit = useCallback(
        (e: React.MouseEvent<HTMLElement>) => {
          if (onEditCallback instanceof Function) onEditCallback(id);
        },
        [id, onEditCallback]
      ),
      onRemove = useCallback(
        (e: React.MouseEvent<HTMLElement>) => {
          if (onRemoveCallback instanceof Function) onRemoveCallback(id);
        },
        [id, onRemoveCallback]
      );

    return (
      <ListItem>
        <DragonContainer>
          <Avatar src={src} />
          <div className="content">
            <div className="info">
              <h4>{name}</h4>
              <p className="subTitle">{type}</p>
            </div>
            <div className="actions">
              <FabButton onClick={onView}>
                <MdLaunch />
              </FabButton>
              <FabButton onClick={onEdit}>
                <MdEdit />
              </FabButton>
              <FabButton onClick={onRemove}>
                <MdClear />
              </FabButton>
            </div>
          </div>
        </DragonContainer>
      </ListItem>
    );
  };

export default DragonListItem;
