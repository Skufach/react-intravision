import { connect } from "react-redux";

import CloseButton from "./CloseButton";

import { replaceTrigger } from "../../store/router/actions";

const mapStateToProps = state => ({});

const CloseButtonContainer = connect(mapStateToProps, { replaceTrigger })(
  CloseButton
);

export default CloseButtonContainer;
