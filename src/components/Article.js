import React from 'react';

import Votes from './Votes';

const Article = (props) => {
    return (
        <div className='box'>
            <article className='media'>
                <div className='level'>
                    <Votes votes={props.article.votes} 
                           id={props.article._id} 
                           voteArticle={props.voteArticle} 
                    />
                        <div className='media-content'>
                            <div className='content'>
                                <b className='title is-3'>{props.article.title}</b>
                                    <div>submitted by: <strong>{props.article.created_by}</strong></div>
                                        <div><b>{props.article.comment_count} comments</b></div>
                                    <p className='message-body'>{props.article.body}</p>
                            </div>
                        </div>
                </div>
            </article>
        </div>
    );
};

Article.propTypes = {
    article: React.PropTypes.object.isRequired,
    voteArticle: React.PropTypes.func.isRequired
};

export default Article;
