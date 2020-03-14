import React from "react";
import { Field } from "redux-form";
import { Header, Dropdown, Segment } from "semantic-ui-react";

import "./FormUpdate.css";

const FormUpdate = ({ item, statuses, newStatus }) => {
  console.log(item);

  const currentStatus = newStatus =>
    statuses.find(item => item.id === newStatus);

  const rgbItem = () => {
    if (newStatus) {
      const color = currentStatus(newStatus);
      return color.rgb;
    } else {
      return item.statusRgb;
    }
  };

  const color = rgbItem();

  const StatusList = statuses => {
    const statusesList = statuses.map((status, _index) => {
      return {
        key: status.id,
        value: status.id,
        text: status.name
      };
    });
    return statusesList;
  };

  const SelectField = props => {
    const list = props.options;
    return (
      <Dropdown
        value={props.input.value}
        onChange={(event, data) => props.input.onChange(data.value)}
        placeholder="Статус"
        selection
        options={list}
      />
    );
  };

  return (
    <React.Fragment>
      <Header
        as="h2"
        size="medium"
        style={{
          height: "auto",
          background: "#1a4876",
          margin: 0,
          padding: "1rem",
          color: "#fff"
        }}
      >
        № {item.id}
      </Header>
      <Segment attached>{item.name}</Segment>

      <form className="ui form flex-container">
        <div className="block-left">
          <div className="field ">
            <label>Описание</label>
            <Field name="description" component="textarea" />
          </div>
        </div>

        <div className="block-right">
          <div className="field form-div">
            <i className="status-icon" style={{ backgroundColor: color }}></i>
            <Field
              name="status"
              component={SelectField}
              options={StatusList(statuses)}
            />
          </div>
        </div>
      </form>

      {/* 

        <button
          type="submit"
          className="ui button"
          style={{ margin: "1rem" }}
          onClick={event => {
            event.preventDefault();
            formCreateTrigger();
          }}
        >
          Сохранить
        </button>
      </form> */}
    </React.Fragment>
  );
};

export default FormUpdate;
