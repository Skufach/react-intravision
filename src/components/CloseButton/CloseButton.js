import React from "react";

import "./CloseButton.css";


const CloseButton = ({replaceTrigger}) => {
  return (
    <i
      className="icon"
      onClick={event => {
        event.preventDefault();
        replaceTrigger({ path: "/requests" });
      }}
    >
      &#9747;
    </i>
  );
};

export default CloseButton;
