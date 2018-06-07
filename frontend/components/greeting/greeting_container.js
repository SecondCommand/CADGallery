import {connect} from 'react-redux';

import {signout, signin} from '../../actions/session_actions';
import Greeting from './greeting';


const mapStateToProps = ({session, entities: {users}}) => {
  return {
    currentUser: users[session.id]
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
)(Greeting);