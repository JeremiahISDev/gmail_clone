import React from "react";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import InboxRow from "./InboxRow";
import InboxEmail from "./InboxEmail";
import timestampSort from  "./timestampSort"

class Inbox extends React.Component {
  state = {
    emails: []
  }

  async componentDidMount() {
    const response = await fetch("/emails");
    const data = await response.json();
    const sortedEmails = data.sort(timestampSort);
    const emails = sortedEmails.map(incomingEmail => InboxEmail(incomingEmail));
    this.setState({
      emails
    });
  }

  render() {
    return (
      <Table>
        <TableBody>
          {this.state.emails.map(email => (
            <InboxRow 
              key={email.id}
              email={email}
             />  
          ))}
        </TableBody>
      </Table>
    )
  }
}

export default Inbox;