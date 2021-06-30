import React from "react";
import { useState } from "react";
import { ReactNode } from "react";
import { createContext } from "react";

/**
 * @author Davi Wegner
 * @email davi@wegn.dev
 * @created 30-06-2021
 */
interface Message {
  text?: string;
  type?: "error" | "success";
}
interface NotificationContext {
  message?: Message;
  onSetMessage: (message: Message) => void;
}
interface Props {
  children?: ReactNode | ReactNode[];
}
export const Context = createContext<NotificationContext>(
    {} as NotificationContext
  ),
  Provider: React.FC<Props> = (props: Props) => {
    const { children } = props,
      [message, setMessage] = useState<Message>(),
      onSetMessage = (message: Message) => {
        setMessage(message);
        setTimeout(() => {
          setMessage({});
        }, 3000);
      };
    return (
      <Context.Provider value={{ message, onSetMessage }}>
        {children}
      </Context.Provider>
    );
  };
