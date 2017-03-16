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
import NavBar from './components/NavBar';
import ArticleList from './components/ArticleList';
import reducer from './reducer/index.reducer';

const store = createStore(reducer, applyMiddleware(thunk, createLogger()));

ReactDOM.render(<Provider store={store}>
                  <Router history={browserHistory}>
                    <Route path='/' component={App}>
                      <IndexRoute component={ArticleList}/>
                      <Route path='/articles' component={ArticleList} />
                      <Route path='/topics/:topic/articles' component={ArticleList} />
                    </Route>
                  </Router>
                </Provider>, document.getElementById('app'));
