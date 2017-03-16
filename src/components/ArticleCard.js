import React from 'react';

const ArticleCard = function (props) {
  return (
    <div className='box'>
      <article className='media'>
        <div className='media-left'>
          <p>Upvotes:</p>
          {props.votes}
        </div>
        <div className='media-content'>
          <div className='content'>
            <h3 className='title is-3'>{props.title}</h3>
            <span>
              <small>Created by: {props.created_by}</small> <small>Topic: {props.belongs_to}</small>
            </span>
            <p>
              <strong>{props.comments} comments</strong>
            </p>
          </div>
        </div>
      </article>
    </div>
  );
};

ArticleCard.propTypes = {
  votes: React.PropTypes.number.isRequired,
  title: React.PropTypes.string.isRequired,
  created_by: React.PropTypes.string.isRequired,
  belongs_to: React.PropTypes.string.isRequired,
  comments: React.PropTypes.number.isRequired
};

export default ArticleCard;
