import React from 'react';

const Votes = (props) => {
    
    return (
      <div className='media-left'>
        <a><i onClick={props.voteArticle.bind(null, 'up')} className="fa fa-arrow-up" aria-hidden="true"></i></a>
          <p>{props.votes}</p>
        <a><i onClick={props.voteArticle.bind(null, 'down')} className="fa fa-arrow-down" aria-hidden="true"></i></a>
      </div>
  );
};

Votes.propTypes = {
  votes: React.PropTypes.number.isRequired,
  voteArticle: React.PropTypes.func.isRequired
};

export default Votes;
