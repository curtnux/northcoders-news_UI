import React from 'react';

const Votes = (props) => {

    function upVote () {
        props.voteArticle(props.id, 'up');
    }

    function downVote () {
      props.voteArticle(props.id, 'down');
    }
    
    return (
      <div className='media-left'>
        <a><i onClick={upVote} className="fa fa-arrow-up" aria-hidden="true"></i></a>
          <p>{props.votes}</p>
        <a><i onClick={downVote} className="fa fa-arrow-down" aria-hidden="true"></i></a>
      </div>
  );
};

Votes.propTypes = {
  votes: React.PropTypes.number.isRequired,
  voteArticle: React.PropTypes.func.isRequired,
  id: React.PropTypes.string.isRequired
};

export default Votes;
