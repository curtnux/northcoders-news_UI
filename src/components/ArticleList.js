import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import { map } from 'underscore';

import ArticleCard from './ArticleCard';

const ArticleList = React.createClass({
  componentWillMount () {
    this.props.fetchArticles();
  },
  render () {
    if (this.props.loading) return <p>'Loading..'</p>;

    return (
      <div id='ArticleList'>
        {map(this.props.articles.data, function (article, i) {
          return <ArticleCard key={i} {...article} />;
        })}
      </div>
    );
  }
});

function mapStateToProps (state) {
  return {
    articles: state.articles,
    loading: state.articles.loading,
    error: state.articles.error
  };
}

function mapDispatchToProps (dispatch, props) {
  return {
    fetchArticles: () => {
      dispatch(actions.fetchArticles(props.params.topic));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleList);
