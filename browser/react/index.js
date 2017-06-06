import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import store from '../redux/store';
import { AppContainer } from './containers';

import SOCKET from '../sockets';

// Hack for mobile support for materialize-ui
injectTapEventPlugin();

/*
  Provider = react-redux supplying context of store.
  Mui = materialize-ui providing a default theme for itself.
  Router = react-router
*/
const history = createHistory({
  basename: '/',
  forceRefresh: true
});

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider>
      <Router history={history}>
        <Route path='/' component={AppContainer} />
      </Router>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('react-app')
);
