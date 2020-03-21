import { connect } from "react-redux";
import { reduxForm, formValueSelector } from "redux-form";

import FormUpdate from "./FormUpdate";

import {
  getUpdateItem,
  getStatuses,
  getUsers
} from "../../store/requestsScreen/selectors";

import { trigger as formUpdateTrigger } from "../../store/forms/updateForm/actions";

import { getStatus } from "../../store/forms/updateForm/selectors";

const selectStatus = formValueSelector("formUpdate");

const mapStateToProps = state => ({
  item: getUpdateItem(state),
  statuses: getStatuses(state),
  users: getUsers(state),
  initialValues: {
    status: getUpdateItem(state).statusId,
    executor: getUpdateItem(state).executorId
  },
  newStatus: selectStatus(state, "status")
});

const FormUpdateContainer = connect(mapStateToProps, {
  getStatus,
  formUpdateTrigger
})(
  reduxForm({
    form: "formUpdate",
    enableReinitialize: true
    // destroyOnUnmount: false
  })(FormUpdate)
);

export default FormUpdateContainer;
