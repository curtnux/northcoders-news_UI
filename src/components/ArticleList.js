import React from 'react';
import ArticleCard from './ArticleCard';

const ArticleList = (props) => {
  return (
    <div id='ArticleList'>
      {props.articles.map(function (article, i) {
        
        return <ArticleCard 
          key={i}
          {...article}
          voteArticle={props.voteArticle}
          />;
      })}
    </div>
  );
};

ArticleList.propTypes = {
  articles: React.PropTypes.array.isRequired,
  voteArticle: React.PropTypes.func.isRequired
};

export default ArticleList;