import React from "react";
import { useContext } from "react";
import styled from "styled-components";
import { Notification } from "../../../context";

/**
 * @author Davi Wegner
 * @email davi@wegn.dev
 * @created 30-06-2021
 */
interface Props {}
const NotificationBarContainer = styled.div<any>`
    position: fixed;
    bottom: 30px;
    left: 0;
    right: 0;
    height: 36px;
    width: 100%;
    display: flex;
    justify-content: center;

    .bar {
      text-align: center;
      ${(props) =>
        `background-color:${props.color === "success" ? "green" : "red"};`}
      max-width: 500px;
      padding: 8px 12px;
      height: 100%;
      color: white;
      border-radius: 10px;
    }
  `,
  NotificationBar: React.FC<Props> = (props: Props) => {
    const { message } = useContext(Notification.Context);
    return (
      <>
        {message && message.text && (
          <NotificationBarContainer color={message.type}>
            <div className="bar">
              <span>{message.text}</span>
            </div>
          </NotificationBarContainer>
        )}
      </>
    );
  };

export default NotificationBar;
