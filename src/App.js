import React from "react";
import { Grid } from "semantic-ui-react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { Provider } from "react-redux";

import SidePanel from "./components/SidePanel/SidePanel";
import SearchPanel from "./components/SearchPanel/SearchPanel";

import SettingScreen from "./screens/SettingScreen";
import ActiveScreen from "./screens/ActiveScreen";
import EmployeeScreen from "./screens/EmployeeScreen";
import CustomerScreen from "./screens/CustomerScreen";
import { RequestScreenContainer } from "./screens/RequestScreen/RequestScreenContainer";
import KnowledgeScreen from "./screens/KnowledgeScreen";

import { configureStore } from "./store/configureStore";
import "./App.css";

const { store } = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <Grid columns={16} className="app" stretched>
        <Grid.Column width={2} >
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
                  <RequestScreenContainer />
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
    </Provider>
  );
};

export default App;
