import React  from "react";
import {BrowserRouter as Router, Route}  from "react-router-dom";

import Header  from "../header/Header";
import NavigationBar  from "../navigation_bar/NavigationBar"
import Email from "../email/Email"
import Paths  from "../../config/paths";
import Inbox  from '../inbox/Inbox';

const App = () => {
  return (
    <Router>
    <div>
      <Header />
      <div className="content">
        <NavigationBar />
        <Route exact path={Paths.root} component={Inbox}/>
        <Route path={Paths.emailTemplate} component={Email}/>
        <Route path={Paths.important} component={Inbox}/>
        <Route path={Paths.sentMail} component={Inbox}/>
        <Route path={Paths.drafts} component={Inbox}/>
        <Route path={Paths.spam} component={Inbox}/>
      </div>
    </div>
    </Router>
  );
};

export default App