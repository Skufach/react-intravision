import React from "react";
import { Field } from "redux-form";
import { Header, Dropdown, Segment } from "semantic-ui-react";

import "./FormUpdate.css";

import CloseButtonContainer from "../CloseButton/CloseButtonContainer";

const FormUpdate = ({
  item,
  statuses,
  newStatus,
  users,
  formUpdateTrigger
}) => {
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

  const DropdownList = items => {
    const itemesList = items.map((item, _index) => {
      return {
        key: item.id,
        value: item.id,
        text: item.name
      };
    });
    return itemesList;
  };

  const SelectField = props => {
    const list = props.options;
    return (
      <Dropdown
        value={props.input.value}
        onChange={(event, data) => props.input.onChange(data.value)}
        placeholder={props.placeholder}
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
        <CloseButtonContainer />
      </Header>
      <Segment attached>{item.name}</Segment>

      <form className="ui form flex-container">
        <div className="block-left">
          <div className="field">
            <label>Описание</label>
            <div>{item.description}</div>
          </div>

          <button
            type="submit"
            className="ui button"
            style={{ margin: "1rem" }}
            onClick={event => {
              event.preventDefault();
              formUpdateTrigger();
            }}
          >
            Сохранить
          </button>
        </div>

        <div className="block-right">
          <div className="field form-div">
            <i className="status-icon" style={{ backgroundColor: color }}></i>
            <Field
              name="status"
              component={SelectField}
              options={DropdownList(statuses)}
              placeholder="Статус"
            />
          </div>
          <div className="field">
            <label>Заявитель</label>
            <div>{item.initiatorName}</div>
          </div>
          <div className="field form-div">
            <label>Исполнитель</label>
            <Field
              name="executor"
              component={SelectField}
              options={DropdownList(users)}
              placeholder="Исполнитель"
            />
          </div>
        </div>
      </form>
    </React.Fragment>
  );
};

export default FormUpdate;
