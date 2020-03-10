import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { Grid } from "semantic-ui-react";

import FormCreateContainer from "../../components/FormCreate/FormCreateContainer";
import FormUpdate from "../../components/FormUpdate/FormUpdate";
import RequestsPanel from "../../components/RequestsPanel/RequestsPanel";

import { trigger } from "../../store/requestsScreen/actions";

const RequestScreen = ({ requestList, loading, location }) => {
  const dispatch = useDispatch();

  useEffect(() => dispatch({ type: `${trigger}` }), []);

  return (
    <Grid.Row>
      <Grid.Column width={location === "/requests" ? 12 : 6} stretched>
        {loading ? (
          <div>Загрузка...</div>
        ) : (
          <RequestsPanel requestList={requestList} />
        )}
      </Grid.Column>

      {location === "/requests/create" ? (
        <Grid.Column width={10} stretched>
          <FormCreateContainer />
        </Grid.Column>
      ) : null}

      {location === "/requests/update" ? (
        <Grid.Column width={10} stretched>
          <FormUpdate />
        </Grid.Column>
      ) : null}
    </Grid.Row>
  );
};

export default RequestScreen;
