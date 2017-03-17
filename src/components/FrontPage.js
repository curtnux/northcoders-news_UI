import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import {getTopArticles} from '../reducer/articles.reducer';

import ArticleList from './ArticleList';

const FrontPage = React.createClass({
  componentWillMount () {
    this.props.fetchArticles();
  },
  render () {
    if (this.props.loading) return <p>'Loading..'</p>;

    return (
      <div id='FrontPage'>
        <ArticleList articles={this.props.articles} />
      </div>
    );
  }
});

function mapStateToProps (state) {
  return {
    articles: getTopArticles(state, 10),
    loading: state.articles.loading,
    error: state.articles.error
  };
}

function mapDispatchToProps (dispatch) {
  return {
    fetchArticles: () => {
      dispatch(actions.fetchArticles());
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FrontPage);
