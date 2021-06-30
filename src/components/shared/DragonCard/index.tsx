import React from "react";
import styled from "styled-components";
import Paper from "../Paper";
import Avatar from "../Avatar";
import moment from "moment";
import { DragonTypes } from "../../../types";

/**
 * @author Davi Wegner
 * @email davi@wegn.dev
 * @created 29-06-2021
 */

interface Props extends DragonTypes.Self {
  img: string;
}

const DragonCardContainer = styled(Paper)`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 8px;
    @media (max-width: 800px) {
      width: 85%;
    }
    @media (min-width: 800px) {
      width: 50%;
    }
    .subTitle {
      color: #223354b3;
    }
    .createdAt {
      color: #223354b3;
    }
    .textContainer {
      padding: 16px;
    }
  `,
  DragonCard: React.FC<Props> = (props: Props) => {
    let { name, type, img, createdAt, histories } = props;

    return (
      <DragonCardContainer>
        <Avatar size="large" src={img} />

        <h1>{name}</h1>
        <h3 className="subTitle">{type}</h3>
        {createdAt && (
          <h6 className="createdAt">
            {moment(createdAt).format("DD/MM/YYYY HH:mm")}
          </h6>
        )}
        <div className="textContainer">
          <p>{histories}</p>
        </div>
      </DragonCardContainer>
    );
  };

export default DragonCard;
