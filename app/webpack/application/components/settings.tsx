import * as React from "react";
import {
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

import {
  Column,
  Columns,
} from "@application/components/bulma";

import { Authorize } from "./authorize";
import { Menu } from "./settings/menu";
import { Profile } from "./settings/profile";
import { Sessions } from "./settings/sessions";

import {
  SETTINGS_PROFILE_URL,
  SETTINGS_SESSIONS_URL,
} from "@application/config/routes";

const SESSIONS_DEFAULT_URL = SETTINGS_PROFILE_URL;

export const Settings: React.FC = () => (
  <Authorize>
    <Columns>
      <Column size={3}>
        <Menu />
      </Column>
      <Column size={9}>
        <Switch>
          <Route
            path={SETTINGS_PROFILE_URL}
            component={Profile}
          />
          <Route
            path={SETTINGS_SESSIONS_URL}
            component={Sessions}
          />
          <Redirect to={SESSIONS_DEFAULT_URL} />
        </Switch>
      </Column>
    </Columns>
  </Authorize>
);
