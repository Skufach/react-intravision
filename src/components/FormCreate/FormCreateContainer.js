import { connect } from "react-redux";
import { reduxForm } from "redux-form";

import FormCreate from "./FormCreate";

import { trigger as formCreateTrigger } from "../../store/forms/createForm/actions";

const mapStateToProps = state => ({});

const FormCreateContainer = connect(mapStateToProps, { formCreateTrigger })(
  reduxForm({
    form: "formCreate",
    // asyncBlurFields: [formConstants.signInForm.fields.login],
    initialValues: { name: "Какая-то форма" }
    // destroyOnUnmount: false,
    // onSubmit: SignInSubmit,
    // validate: SignInSubmit
  })(FormCreate)
);

export default FormCreateContainer;
