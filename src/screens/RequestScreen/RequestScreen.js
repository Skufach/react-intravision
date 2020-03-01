import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { Grid } from "semantic-ui-react";

import FormCreate from "../../components/FormCreate/FormCreate";
import FormUpdate from "../../components/FormUpdate/FormUpdate";
import RequestsPanel from "../../components/RequestsPanel/RequestsPanel";

import { trigger } from "../../store/requestsScreen/actions";

import { Route, Switch } from "react-router-dom";

const RequestScreen = ({ requestList, loading }) => {
  const dispatch = useDispatch();

  useEffect(() => dispatch({ type: `${trigger}` }), []);

  return (
    <Grid.Row >
      <Grid.Column width={window.location.pathname === "/requests" ? 12 : 6}>
        {loading ? (
          <div>Загрузка...</div>
        ) : (
          <RequestsPanel requestList={requestList} />
        )}
      </Grid.Column>

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
