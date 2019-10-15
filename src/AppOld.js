import React from "react";
import { Grid, Segment } from "semantic-ui-react";

import FormPanel from "./components/FormPanel/FormPanel";
import RequestsPanel from "./components/RequestsPanel/RequestsPanel";
import SidePanel from "./components/SidePanel/SidePanel";
import SearchPanel from "./components/SearchPanel/SearchPanel";
import StatusPanel from "./components/StatusPanel/StatusPanel";

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

          <Grid.Row>
            <Grid.Column width={6}>
              <RequestsPanel />
            </Grid.Column>

            <Grid.Column width={4}>
              <StatusPanel />
            </Grid.Column>

            <Grid.Column width={6}>
              <FormPanel />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Grid.Column>
    </Grid>
  );
};

export default App;
