import { connect } from "react-redux";
// import { reduxForm } from "redux-form";

import RequestScreen from "./RequestScreen";

import {
  getRequestList,
  getLoading
} from "../../store/requestsScreen/selectors";

const mapStateToProps = state => ({
  requestList: getRequestList(state),
  loading: getLoading(state)
});

export const RequestScreenContainer = connect(
  mapStateToProps,
  {}
)(
  //   reduxForm({
  //     form: formConstants.signInForm.name,
  //     asyncBlurFields: [formConstants.signInForm.fields.login],
  //     initialValues: { login: '' },
  //     destroyOnUnmount: false,
  //     onSubmit: SignInSubmit,
  //     validate: SignInSubmit,
  //   })
  RequestScreen
);
