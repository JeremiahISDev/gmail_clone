const React = require("react");

const {useLocation} = require("react-router-dom");

const Inbox = () => {
  const location = useLocation();
  return <h1>{location.pathname}</h1>
};

module.exports = Inbox;