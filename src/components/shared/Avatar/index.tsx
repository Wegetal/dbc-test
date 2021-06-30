import React from "react";
import styled from "styled-components";

/**
 * @author Davi Wegner
 * @email davi@wegn.dev
 * @created 28-06-2021
 */
interface Props {
  size?: string;
  src?: string;
}
const AvatarContainer = styled.div<any>`
    margin: 12px;
    display: flex;
    align-items: center;
    position: relative;
    .imgContainer {
      display: flex;
      align-items: center;
      ${(props) => {
        switch (props.size) {
          case "small":
            return `
                width:60px;
                height: 60px;
              `;
          case "medium":
            return `
                width:100px;
                height:100px;
              `;
          case "large":
            return `
                width:150px;
                height:150px;
              `;
        }
      }}
      border: 1px solid #5569ff;
      border-radius: 50%;
    }
    .border {
      position: absolute;
      ${(props) => {
        switch (props.size) {
          case "small":
            return `
                width:72px;
                height: 72px;
                margin-left: -6px;
              `;
          case "medium":
            return `
                width:118px;
                height:118px;
                margin-left: -9px;
              `;
          case "large":
            return `
                width:174px;
                height:174px;
                margin-left: -12px;
              `;
        }
      }}
    }
    .avatar {
      border-radius: 50%;
      width: 100%;
    }
  `,
  Avatar: React.FC<Props> = (props: Props) => {
    const { src, size } = props;
    return (
      <AvatarContainer size={size}>
        <div className="imgContainer">
          <img
            className="avatar"
            alt="avatar dragon"
            src={src || "/assets/dragon.png"}
          />
        </div>
        <img
          className="border"
          alt="avatar border"
          src="https://assets.gamersclub.com.br/marketplace/avatar-frame-degrade-frade"
        />
      </AvatarContainer>
    );
  };
AvatarContainer.defaultProps = {
  size: "small",
};
export default Avatar;
