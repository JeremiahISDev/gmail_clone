import React, { Component } from 'react';
import IconButton from "@material-ui/core/IconButton";
import {Star as StarIcon, StarBorder as StarBorderIcon} from "@material-ui/icons"

export class InboxRowIcons extends Component {

  onClick = () => {
    alert(`Set ${this.props.emailId} to important`)
  }

  render() {
    return (
      <div>
        <IconButton onClick={this.onClick}>
          {this.props.isImportant 
            ? <StarIcon className="inbox__star" />
            : <StarBorderIcon/>}
        </IconButton>
      </div>
    )
  }
}

export default InboxRowIcons
