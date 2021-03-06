import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store'
import { signin, signout, signup } from './actions/session_actions';
import {fetchProjects, fetchProject} from './actions/project_actions';
import {createProject} from './util/project_util';
import Root from './components/root';


document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  // const store = configureStore();
  let store;  
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: {[window.currentUser.id]: window.currentUser}
      },
      session: window.currentUser
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  // window.signin = signin;
  // window.signout = signout;
  // window.signup = signup;
  window.createProject = createProject;
  // window.fetchProject = fetchProject;
  // window.fetchProjects = fetchProjects;
  // window.getState = store.getState; // for testing
  // window.dispatch = store.dispatch; // for testing
  ReactDOM.render(<Root store={store}/>, root);
});