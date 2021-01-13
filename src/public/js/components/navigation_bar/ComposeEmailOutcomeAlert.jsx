import React from "react";
import Alert from "../alert/Alert";

const ComposeEmailOutcomeAlert = (props) => {
  const {
    errorAlertOpen,
    errorMessage,
    onErrorAlertClose,
    successAlertOpen,
    onSuccessAlertClose,
  } = props;
  return (
    <div>
      <Alert
        title="Email failed"
        text={errorMessage}
        open={errorAlertOpen}
        onClose={onErrorAlertClose}
      />
      <Alert
        title="Email was successfully sent"
        text="Your email has been sent!"
        open={successAlertOpen}
        onClose={onSuccessAlertClose}
      />
    </div>
  );
};

export default ComposeEmailOutcomeAlert;
