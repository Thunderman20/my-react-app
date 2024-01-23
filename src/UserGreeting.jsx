import PropTypes from "prop-types";
function UserGreeting(props) {

  const welcomeMessage =<h2 className="welcome-msg">
                          Welcome {props.username}</h2>
 
  const loginPrompt = <h2 className="login-prompt">Please LOG IN</h2>
  return (props.isLoggedIn ? welcomeMessage : loginPrompt );
}
UserGreeting.propTypes={
  isLoggedIn: PropTypes.bool,
  username: PropTypes.string,
}
UserGreeting.defaultProps={
  isLoggedIn: false,
  username : "Guest",
}
export default UserGreeting