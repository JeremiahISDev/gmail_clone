import React from 'react';
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import InboxRowIcons from "./InboxRowIcons";
import {Link} from "react-router-dom";
import Paths from "../../config/paths"

const InboxRow = ({email}) => {
  //add formatting based on whether email is viewed or not
  const className = email.viewedAt 
    ? "inbox__table-row--viewed" 
    : "inbox__table-row";

  return (
    <TableRow className={className}>
      <TableCell className="inbox__table-cell">
        <InboxRowIcons 
          isImportant={email.isImportant} 
          emailId={email.id}
        />
      </TableCell>
      <TableCell className="inbox__table-cell--bold">
        <Link className="link inbox__link" to={Paths.email(email.id)}>
          {email.subject}
        </Link>
      </TableCell>
      <TableCell className="inbox__table-cell">
        <Link className="link inbox__link" to={Paths.email(email.id)}>
          {email.body}
        </Link>
      </TableCell>
      <TableCell className="inbox__table-cell--bold">
        <Link className="link inbox__link" to={Paths.email(email.id)}>
          {email.timestamp}
        </Link>
      </TableCell>
    </TableRow>
  )
}

export default InboxRow