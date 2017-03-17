import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import './css/bulma.css';
import './css/font-awesome.css';

import App from './components/App';
import FrontPage from './components/FrontPage';
import TopicPage from './components/TopicPage';
import reducer from './reducer/index.reducer';

const store = createStore(reducer, applyMiddleware(thunk, createLogger()));

ReactDOM.render(<Provider store={store}>
                  <Router history={browserHistory}>
                    <Route path='/' component={App}>
                      <IndexRoute component={FrontPage}/>
                      <Route path='/:topic' component={TopicPage} />
                    </Route>
                  </Router>
                </Provider>, document.getElementById('app'));
