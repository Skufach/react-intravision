import React from "react";
import { Grid, Table } from "semantic-ui-react";

const RequestsPanel = requestList => {
  console.log(requestList);

  const ShowList = ({ requestList }) => {
    return requestList.map((listItem, _index) => (
      <Table.Row key={listItem.id} style={{ }}>
        <Table.Cell>{listItem.id}</Table.Cell>
        <Table.Cell>{listItem.name}</Table.Cell>
        {window.location.pathname === "/requests" ? (
          <React.Fragment>
            <Table.Cell>{listItem.statusName}</Table.Cell>
            <Table.Cell>{listItem.executorName}</Table.Cell>
          </React.Fragment>
        ) : null}
      </Table.Row>
    ));
  };

  return (
    <Table columns={16} style={{ width: "100%" }}>
      <Table.Header>
        <Table.Row style={{ display: "flex" }}>
          <Table.HeaderCell
            width={window.location.pathname === "/requests" ? 4 : 7}
          >
            ID
          </Table.HeaderCell>
          <Table.HeaderCell
            width={window.location.pathname === "/requests" ? 4 : 7}
          >
            Название
          </Table.HeaderCell>
          {window.location.pathname === "/requests" ? (
            <React.Fragment>
              <Table.HeaderCell width={4}>Статус</Table.HeaderCell>
              <Table.HeaderCell width={4}>Исполнитель</Table.HeaderCell>
            </React.Fragment>
          ) : null}
        </Table.Row>
      </Table.Header>

      <Table.Body
        style={{
          height: "90vh",
          width: "100%",
          overflowY: "auto",
          display: "block"
        }}
      >
        {ShowList(requestList)}
      </Table.Body>
    </Table>
  );
};

export default RequestsPanel;
