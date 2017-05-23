import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import './css/bulma.css';
import './css/font-awesome.css';
import './css/index.css';

import reducer from './reducer/reducer';
import App from './components/App';
import FrontPage from './components/FrontPage';
import ArticlePage from './components/ArticlePage';
import NotFound from './components/NotFound';
import UserPage from './components/UserPage';

const store = createStore(reducer, applyMiddleware(thunk, createLogger()));

ReactDOM.render(<Provider store={store}>
                  <Router history={browserHistory}>
                    <Route path='/' component={App}>
                      <IndexRoute component={FrontPage}/>
                      <Route path=':topic' component={FrontPage} />
                      <Route path='articles/:article_id' component={ArticlePage} />
                      <Route path='users/:username' component={UserPage} />
                      <Route path='*' component={NotFound} />
                    </Route>
                  </Router>
                </Provider>, document.getElementById('app'));
