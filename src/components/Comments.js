import React from 'react';
var moment = require('moment');

const Comments = (props) => {
    return (
        <div className='box'>
            <article className='media'>
                
                <div className='media-left'>
                    <a><i 
                        onClick={props.voteComment.bind(null, props._id, 'up')} 
                        className="fa fa-arrow-up" 
                        aria-hidden="true">
                    </i></a>
                        <p>{props.votes}</p>
                    <a><i 
                        onClick={props.voteComment.bind(null, props._id, 'down')} 
                        className="fa fa-arrow-down" 
                        aria-hidden="true">
                    </i></a>
                </div>

                    <div className='media-content'>
                        <div className='content'>
                            <div>
                                <strong className='title is-4'>{props.created_by}</strong>
                            </div>
                            <p className='subtitle is-5'>Posted on {getDate(props.created_at)}</p>
                            <p className='message-body'>{props.body}</p>
                        </div>
                    </div>
                    <a><i 
                        className="delete"
                        aria-hidden='true'
                        onClick={props.deleteComment.bind(null, props._id)}>
                    </i></a>
            </article>
        </div>
    );
};

function getDate (num) {
    let date = moment(num);
    return date.format('dddd Do MMMM YYYY');
}

Comments.propTypes = {
    votes: React.PropTypes.number.isRequired,
    created_by: React.PropTypes.string.isRequired,
    body: React.PropTypes.string.isRequired,
    voteComment: React.PropTypes.func.isRequired,
    _id: React.PropTypes.string.isRequired,
    created_at: React.PropTypes.number.isRequired,
    deleteComment: React.PropTypes.func.isRequired
};

export default Comments;
