import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import {fetchArticlesByTopic} from '../reducer/articles.reducer';

import ArticleList from './ArticleList';

const TopicPage = React.createClass({
  componentWillMount () {
    this.props.fetchArticlesByTopic();
  },
  render () {
    if (this.props.loading) return <p>'Loading..'</p>;

    return (
      <div id='TopicPage'>
        <ArticleList articles={this.props.articles} />
      </div>
    );
  }
});

function mapStateToProps (state) {
  return {
    articles: fetchArticlesByTopic(state, 'football'),
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

export default connect(mapStateToProps, mapDispatchToProps)(TopicPage);