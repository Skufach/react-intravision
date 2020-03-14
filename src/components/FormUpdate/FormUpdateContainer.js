import { connect } from "react-redux";
import { reduxForm, formValueSelector } from "redux-form";

import FormUpdate from "./FormUpdate";

import {
  getUpdateItem,
  getStatuses
} from "../../store/requestsScreen/selectors";
// import { trigger as formCreateTrigger } from "../../store/forms/createForm/actions";

import { getStatus } from "../../store/forms/updateForm/selectors";

const selectStatus = formValueSelector("formUpdate");

const mapStateToProps = state => ({
  item: getUpdateItem(state),
  statuses: getStatuses(state),
  initialValues: {
    status: getUpdateItem(state).statusId,
    description: getUpdateItem(state).description
  },
  newStatus: selectStatus(state, "status")
});

const FormUpdateContainer = connect(mapStateToProps, { getStatus })(
  reduxForm({
    form: "formUpdate",
    enableReinitialize: true
    // destroyOnUnmount: false
  })(FormUpdate)
);

export default FormUpdateContainer;
