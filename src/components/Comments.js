import React from 'react';
var moment = require('moment');

// TODO: INSERT VOTE COMMENTS HERE

import NavLink from './NavLink';

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
                                <strong><NavLink>{props.created_by}</NavLink></strong>
                            </div>
                            <p>{getDate(props.created_at)}</p>
                            <p>{props.body}</p>
                        </div>
                    </div>
                    <a><i 
                            className="fa fa-times-circle"
                            aria-hidden='true'
                            onClick={props.deleteComment.bind(null, props._id)}
                            >
                    </i></a>
            </article>
        </div>
    );
};

function getDate (num) {
    let date = moment(num);
    return date.format('dddd Do MMMM YYYY');
}

function deleteHandler (props) {
    if (props.created_by === 'Northcoder') {
        return props.deleteComment.bind
    }
}

Comments.propTypes = {
    votes: React.PropTypes.number.isRequired,
    created_by: React.PropTypes.string.isRequired,
    body: React.PropTypes.string.isRequired,
    voteComment: React.PropTypes.func.isRequired,
    _id: React.PropTypes.string.isRequired,
    created_at: React.PropTypes.number.isRequired
};

export default Comments;