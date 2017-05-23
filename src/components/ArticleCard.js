import React from 'react';

import Votes from './Votes';
import NavLink from './NavLink';

const ArticleCard = (props) => {
  return (
    <div className='box'>
      <article className='media'>

      <div className='level'>
      <Votes votes={props.votes} id={props._id} voteArticle={props.voteArticle} />
        <div className='media-content'>
          <div className='content'>
            <NavLink to={`/articles/${props._id}`}><h3 className='title is-3'>{props.title}</h3></NavLink>
            <p>submitted by: <strong>{props.created_by}</strong> to <NavLink className='link' to={`/${props.belongs_to}`}>NcN/{props.belongs_to}</NavLink></p>
            <b><NavLink className='link' to={`/articles/${props._id}`}>{props.comment_count} comments</NavLink></b>
          </div>
        </div>
      </div>
      
      </article>
    </div>
  );
};

ArticleCard.propTypes = {
  title: React.PropTypes.string.isRequired,
  created_by: React.PropTypes.string.isRequired,
  belongs_to: React.PropTypes.string.isRequired,
  comment_count: React.PropTypes.number.isRequired,
  votes: React.PropTypes.number.isRequired,
  _id: React.PropTypes.string.isRequired,
  voteArticle: React.PropTypes.func.isRequired
};

export default ArticleCard;
