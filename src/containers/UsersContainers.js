import { connect } from "react-redux";
import Users from "../components/Users";

const mapStateToProps = state => {
  console.log("state from container", state);
  return {
    users: state.users
  };
};

export default connect(
  mapStateToProps,
  null
)(Users);
