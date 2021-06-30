import React, { createContext, ReactNode, useContext, useState } from "react";
import { Notification } from "..";
import * as Auth from "../../services/api/auth";
import { FormTypes } from "../../types";

/**
 * @author Davi Wegner
 * @email davi@wegn.dev
 * @created 26-06-2021
 */

export interface AuthContext {
  auth: string | null;
  onSignIn: (form: FormTypes.Login) => void;
  onSignOut: React.MouseEventHandler<HTMLButtonElement>;
}
interface Props {
  children?: ReactNode | ReactNode[];
}
export const Context = createContext<AuthContext>({} as AuthContext),
  Provider: React.FC<Props> = (props: Props) => {
    const { children } = props,
      { onSetMessage } = useContext(Notification.Context),
      [auth, setAuth] = useState<string | null>(null),
      onSignIn = (form: FormTypes.Login) => {
        Auth.signIn(form)
          .then((res) => {
            //call notification bar or any user warning ui to inform auth result
            //in the catch inform if there is a error
            onSetMessage({
              type: "success",
              text: "Login efetuado com sucesso",
            });
            setAuth(res);
          })
          .catch((err) => {
            onSetMessage({
              type: "error",
              text: "Não foi possível efetuar login",
            });
          });
      },
      onSignOut = () => {
        Auth.signOut();
      };
    React.useEffect(() => {
      if (localStorage.getItem("token")) {
        setAuth(localStorage.getItem("token"));
      }
      const checkAuth = () => {
        const item = localStorage.getItem("token");

        if (item && !auth) {
          setAuth(item);
        }
      };

      window.addEventListener("storage", checkAuth);

      return () => {
        window.removeEventListener("storage", checkAuth);
      };
    }, [auth]);

    return (
      <Context.Provider value={{ auth, onSignIn, onSignOut }}>
        {children}
      </Context.Provider>
    );
  };
