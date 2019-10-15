import React from "react";

import { Grid } from "semantic-ui-react";

import FormPanel from "../components/FormPanel/FormPanel";
import RequestsPanel from "../components/RequestsPanel/RequestsPanel";
import StatusPanel from "../components/StatusPanel/StatusPanel";

const RequestScreen = () => {
  return (
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
  );
};

export default RequestScreen;
