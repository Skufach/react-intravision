import React from "react";
import { Grid } from "semantic-ui-react";

const RequestsPanel = () => {
  console.log(window.location.pathname);
  return (
    <React.Fragment>
      <Grid.Column width={6}>
        <div style={{ backgroundColor: "red" }}>Заявки </div>
      </Grid.Column>

      {window.location.pathname === "/requests" ? (
        <Grid.Column width={3}>
          <div style={{ backgroundColor: "blue" }}>Статус </div>
        </Grid.Column>
      ) : null}
    </React.Fragment>
  );
};

export default RequestsPanel;
