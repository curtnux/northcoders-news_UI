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
              <small>Created by: {props.author}</small> <small>Topic: {props.topic}</small>
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

export default ArticleCard;
