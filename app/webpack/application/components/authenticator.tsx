import * as React from "react";
import { useContext } from "react";
import { RouteComponentProps, withRouter } from "react-router";
import {
  Link,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

import { Tabs } from "@application/components/bulma";

import { Context } from "./context";
import { Login } from "./login";
import { Signup } from "./signup";

import {
  LOGIN_URL,
  ROOT_URL,
  SIGNUP_URL,
} from "@application/config/routes";

const Authenticator: React.FC<RouteComponentProps> = ({ location }) => {
  const { session } = useContext(Context);
  if (session) {
    return <Redirect to={location.state && location.state.back ? location.state.back : ROOT_URL} />;
  }
  return (
    <>
      <Tabs>
        <ul>
          <Route
            path={LOGIN_URL}
            children={({ match }) => (
              <li className={match ? "is-active" : undefined}>
                <Link to={{ pathname: LOGIN_URL, state: location.state }}>Login</Link>
              </li>
            )}
          />
          <Route
            path={SIGNUP_URL}
            children={({ match }) => (
              <li className={match ? "is-active" : undefined}>
                <Link to={{ pathname: SIGNUP_URL, state: location.state }}>Signup</Link>
              </li>
            )}
          />
        </ul>
      </Tabs>
      <Switch>
        <Route
          path={LOGIN_URL}
          component={Login}
        />
        <Route
          path={SIGNUP_URL}
          component={Signup}
        />
      </Switch>
    </>
  );
};

const AuthenticatorWithRouter = withRouter(Authenticator);
export { AuthenticatorWithRouter as Authenticator };
