import React from "react";
import { Field } from "redux-form";
import { Header } from "semantic-ui-react";

import "./FormCreate.css";

const FormCreate = ({ formCreateTrigger }) => {
  return (
    <React.Fragment>
      <Header
        size="medium"
        style={{
          height: "auto",
          background: "#1a4876",
          margin: 0,
          padding: "1rem",
          color: "#fff"
        }}
      >
        Новая заявка
      </Header>
      <form className="ui form" style={{ background: "#ecf3f7", height: "100%" }}>
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
      </form>
    </React.Fragment>
  );
};

export default FormCreate;
