import React from "react";
import { Grid } from "semantic-ui-react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import SidePanel from "./components/SidePanel/SidePanel";
import SearchPanel from "./components/SearchPanel/SearchPanel";

import SettingScreen from "./screens/SettingScreen";
import ActiveScreen from "./screens/ActiveScreen";
import EmployeeScreen from "./screens/EmployeeScreen";
import CustomerScreen from "./screens/CustomerScreen";
import RequestScreen from "./screens/RequestScreen";
import KnowledgeScreen from "./screens/KnowledgeScreen";

import "./App.css";

const App = () => {
  return (
    <Grid columns={16} className="app">
      <Grid.Column width={2} stretched>
        <SidePanel />
      </Grid.Column>
      <Grid.Column width={14}>
        <Grid>
          <Grid.Column width={16}>
            <SearchPanel />
          </Grid.Column>

          <Router>
            <Switch>
              <Route path="/requests">
                <RequestScreen />
              </Route>
              <Route path="/settings">
                <SettingScreen />
              </Route>
              <Route path="/employees">
                <EmployeeScreen />
              </Route>
              <Route path="/customers">
                <CustomerScreen />
              </Route>
              <Route path="/actives">
                <ActiveScreen />
              </Route>
              <Route path="/knowledges">
                <KnowledgeScreen />
              </Route>
              <Redirect to="/requests" />
            </Switch>
          </Router>
        </Grid>
      </Grid.Column>
    </Grid>
  );
};

export default App;
