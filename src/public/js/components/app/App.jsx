const React = require("react");
const {BrowserRouter: Router, Route} = require("react-router-dom");

const Header = require("../header/Header");
const NavigationBar = require("../navigation_bar/NavigationBar")
const Paths = require("../../config/paths");
const Inbox = require('../inbox/Inbox');

module.exports = () => {
  return (
    <Router>
    <div>
      <Header />
      <div className="content">
      <NavigationBar />
      <Route exact path={Paths.root} component={Inbox}/>
      <Route path={Paths.inbox} component={Inbox}/>
      <Route path={Paths.important} component={Inbox}/>
      <Route path={Paths.sentMail} component={Inbox}/>
      <Route path={Paths.drafts} component={Inbox}/>
      <Route path={Paths.spam} component={Inbox}/>
      </div>
    </div>
    </Router>
  );
};