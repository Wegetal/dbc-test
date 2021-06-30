import React, { createContext, useState } from "react";
import * as Auth from "../../services/api/auth";
import { FormTypes } from "../../types";

/**
 * @author Davi Wegner
 * @email davi@wegn.dev
 * @created 26-06-2021
 */

export interface AuthContext {
  auth: string;
  onSignIn: (form: any) => void;
  onSignOut: React.MouseEventHandler<HTMLButtonElement>;
}
export const Context = createContext<AuthContext>({} as AuthContext),
  Provider = (props: any) => {
    const { children } = props,
      [auth, setAuth] = useState<any>(null),
      onSignIn = (form: FormTypes.Login) => {
        Auth.signIn(form).then((res) => {
          //call notification bar or any user warning ui to inform auth result
          //in the catch inform if there is a error
          setAuth(res);
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
