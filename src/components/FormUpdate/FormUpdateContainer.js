import { connect } from "react-redux";
import { reduxForm } from "redux-form";

import FormUpdate from "./FormUpdate";

import { getUpdateItem } from "../../store/requestsScreen/selectors";
// import { trigger as formCreateTrigger } from "../../store/forms/createForm/actions";

const mapStateToProps = state => ({
  item: getUpdateItem(state)
});

const FormUpdateContainer = connect(
  mapStateToProps,
  {}
)(
  reduxForm({
    form: "formUpdate",
    // asyncBlurFields: [formConstants.signInForm.fields.login],
    initialValues: { status: "al" }
    // destroyOnUnmount: false,
    // onSubmit: SignInSubmit,
    // validate: SignInSubmit
  })(FormUpdate)
);

export default FormUpdateContainer;
