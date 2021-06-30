import React, { ReactElement, useContext } from "react";
import { Route, Switch } from "react-router-dom";
import { Auth } from "../context";
import routes from "./routes";
import LogoutButton from "../components/shared/LogoutButton";

/**
 * @author Davi Wegner
 * @email davi@wegn.dev
 * @created 26-06-2021
 */

const Routes: React.FC = (props: any) => {
  const { auth } = useContext(Auth.Context);

  return (
    <>
      <Switch>
        {routes.reduce((acc: ReactElement[], crr, i) => {
          if (!!auth === !!crr.auth)
            acc.push(
              <Route
                path={crr.path}
                exact={crr.exact}
                component={crr.component}
                key={i}
              />
            );

          return acc;
        }, [])}
      </Switch>
      {auth && <LogoutButton />}
    </>
  );
};

export default Routes;
