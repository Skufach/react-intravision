import { connect } from "react-redux";

import RequestScreen from "./RequestScreen";

import {
  getRequestList,
  getLoading
} from "../../store/requestsScreen/selectors";

import { getLocation } from "../../store/router/selectors";
import { trigger as updateFormLoadingTrigger } from "../../store/router/updateFormLoading/actions";

const mapStateToProps = state => ({
  requestList: getRequestList(state),
  loading: getLoading(state),
  location: getLocation(state)
});

export const RequestScreenContainer = connect(mapStateToProps, {
  updateFormLoadingTrigger
})(RequestScreen);
