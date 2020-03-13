import React from "react";
import { Field } from "redux-form";
import { Header, Dropdown, Segment } from "semantic-ui-react";

import "./FormUpdate.css";

const FormUpdate = ({ item }) => {
  console.log(item);
  const SelectField = props => {
    return (
      <Dropdown
        value={props.input.value}
        onChange={(event, data) => props.input.onChange(data.value)}
        placeholder="Select Country"
        selection
        options={[
          { key: "af", value: "af", flag: "af", text: "Afghanistan" },
          { key: "ax", value: "ax", flag: "ax", text: "Aland Islands" },
          { key: "al", value: "al", flag: "al", text: "Albania" },
          { key: "dz", value: "dz", flag: "dz", text: "Algeria" }
        ]}
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
        {item.id}
      </Header>
      <Segment attached>{item.name}</Segment>

      <form className="ui form flex-container">
        <div className="block-left">
          <div className="field form-div">
            <label>Описание</label>
            <Field name="description" component="textarea" />
          </div>
        </div>

        <div className="block-right">
          <div className="field">
            <Field name="status" component={SelectField} />
          </div>
        </div>
      </form>

      {/* <form className="ui form" style={{ background: "#ecf3f7", height: "100%" }}>
        <div className="field form_div" style={{ margin: "1rem" }}>
          <label>Название</label>
          <Field name="name" component="input" type="text" />
        </div>
        <div className="field form_div" style={{ margin: "1rem" }}>
          <label>Описание</label>
          <Field name="description" component="textarea" />
        </div>

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
