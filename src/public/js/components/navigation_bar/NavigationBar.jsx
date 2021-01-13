import React from "react";
import { Button } from "@material-ui/core";
import NavigationList from "./NavigationList";
import ComposeEmail from "./compose_email/ComposeEmail";
import SendEmailRequest from "./compose_email/SendEmailRequest";
import ComposeEmailOutcomeAlert from "./ComposeEmailOutcomeAlert";

class NavigationBar extends React.Component {
  state = {
    composeEmailOpen: false,
    errorAlertOpen: false,
    successAlertOpen: false,
    errorMessage: "Something went wrong!",
  };

  onSuccessAlertClose = () => {
    this.setState({
      successAlertOpen: false,
    });
  };

  onErrorAlertClose = () => {
    this.setState({
      errorAlertOpen: false,
    });
  };

  onCancel = () => {
    this.setState({
      composeEmailOpen: false,
    });
  };

  onSend = async (event) => {
    event.preventDefault();
    const recipients = event.target.recipients.value;
    const subject = event.target.subject.value;
    const message = event.target.message.value;
    const request = SendEmailRequest(recipients, subject, message);
    try {
      const response = await fetch("/emails", request);
      if (!response.ok) {
        const json = await response.json();
        throw new Error(json.error);
      }
      this.setState({
        composeEmailOpen: false,
        successAlertOpen: true,
      });
    } catch (error) {
      this.setState({
        composeEmailOpen: false,
        errorAlertOpen: true,
        errorMessage: error.message,
      });
    }
  };

  onCompose = () => {
    this.setState({
      composeEmailOpen: true,
    });
  };

  render() {
    return (
      <aside className="navigation-bar">
        <Button
          className="navigation-bar__compose-button"
          variant="contained"
          color="secondary"
          onClick={this.onCompose}
        >
          Compose
        </Button>
        <NavigationList />
        <ComposeEmail
          open={this.state.composeEmailOpen}
          onCancel={this.onCancel}
          onSend={this.onSend}
        />
        <ComposeEmailOutcomeAlert
          errorAlertOpen={this.state.errorAlertOpen}
          errorMessage={this.state.errorMessage}
          onErrorAlertClose={this.onErrorAlertClose}
          successAlertOpen={this.state.successAlertOpen}
          onSuccessAlertClose={this.onSuccessAlertClose}
        />
      </aside>
    );
  }
}

export default NavigationBar;
