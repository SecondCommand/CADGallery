import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signin, clearErrors} from '../../actions/session_actions';
import SigninForm from './signin_form';

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    clearErrors: () => dispatch(clearErrors()),
    processForm: (user) => dispatch(signin(user)),

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SigninForm);

