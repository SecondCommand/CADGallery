import {connect} from 'react-redux';

import {signout, signin} from '../../actions/session_actions';
import NavBar from './nav_bar';

const mapStateToProps = ({session, entities: {users}}, ownProps) => {

  return {
    currentUser: users[session.id],
    ownProps
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signout: () => dispatch(signout()),
    signin: (user) => dispatch(signin(user))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);