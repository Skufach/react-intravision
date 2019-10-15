import React from "react";
import { Grid, Segment } from "semantic-ui-react";
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
              <Route exact path="/requests" component={RequestScreen} />
              <Route path="/settings" component={SettingScreen} />
              <Route exact path="/employees" component={EmployeeScreen} />
              <Route path="/customers" component={CustomerScreen} />
              <Route exact path="/actives" component={ActiveScreen} />
              <Route path="/knowledges" component={KnowledgeScreen} />
              <Redirect to="/requests" />
            </Switch>
          </Router>
        </Grid>
      </Grid.Column>
    </Grid>
  );
};

export default App;
