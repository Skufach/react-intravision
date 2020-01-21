import React from "react";

import { Grid } from "semantic-ui-react";

import FormCreate from "../components/FormCreate/FormCreate";
import FormUpdate from "../components/FormUpdate/FormUpdate";
import RequestsPanel from "../components/RequestsPanel/RequestsPanel";

import { Route, Switch } from "react-router-dom";

const RequestScreen = () => {
  return (
    <Grid.Row>
      <RequestsPanel />

      <Switch>
        <Route exact path="/requests/create">
          <Grid.Column width={10}>
            <FormCreate />
          </Grid.Column>
        </Route>

        <Route path="/requests/update">
          <Grid.Column width={10}>
            <FormUpdate />
          </Grid.Column>
        </Route>
      </Switch>
    </Grid.Row>
  );
};

export default RequestScreen;
