import React from "react";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import SearchIcon from "@material-ui/icons/Search";

class Header extends React.Component {

 onSubmit = (event) => {
    event.preventDefault();
    alert("submit");
  }

  render() {
    return (
      <header className="header">
        <span className="header__logo">Gmail</span>
        <form className="header__search-form" onSubmit={this.onSubmit}>
          <Input fullWidth className="header__search-field"/>
          <Button type="submit" variant="contained" color="primary">
            <SearchIcon />
          </Button>
        </form>
      </header>
    )
  }
}

export default Header;