import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import { getTopArticles } from '../reducer/articles.reducer';

import ArticleList from './ArticleList';

const TopicPage = React.createClass({
  componentWillMount () {
    this.props.fetchArticlesByTopic(this.props.params.topic);
  },
  render () {
    if (this.props.loading) return <p>'Loading..'</p>;
    console.log(this.props.articles);
    return (
      <div id='TopicPage'>
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
    fetchArticlesByTopic: (topic) => {
      dispatch(actions.fetchArticlesByTopic(topic));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TopicPage);