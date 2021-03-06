import React from "react";
import { Table } from "semantic-ui-react";

import "./RequestsPanel.css";

const RequestsPanel = ({ requestList, updateFormLoading }) => {
  const handleClick = id => {
    updateFormLoading(id);
  };

  const ShowList = requestList => {
    return requestList.map((listItem, _index) => (
      <Table.Row key={listItem.id} onClick={() => handleClick(listItem.id)}>
        <Table.Cell>{listItem.id}</Table.Cell>
        <Table.Cell>{listItem.name}</Table.Cell>
        {window.location.pathname === "/requests" ? (
          <React.Fragment>
            <Table.Cell>
              <span
                className="status"
                style={{ background: `${listItem.statusRgb}` }}
              >
                {listItem.statusName}
              </span>
            </Table.Cell>
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
            width={window.location.pathname === "/requests" ? 4 : 8}
          >
            ID
          </Table.HeaderCell>
          <Table.HeaderCell
            width={window.location.pathname === "/requests" ? 4 : 8}
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
          height:
            window.location.pathname === "/requests/create" ? "88vh" : "82.8vh",
          maxHeight: "100%",
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
