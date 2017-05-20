import React from 'react';

import NavLink from './NavLink';
import Votes from './Votes';

const Article = (props) => {
    return (
        <div className='box'>
            <article className='media'>
                <div className='level'>
                    <Votes votes={props.article.votes} id={props.article._id} voteArticle={props.voteArticle} />
                        <div className='media-content'>
                            <div className='content'>
                                <b className='title is-3'>{props.article.title}</b>
                                    <div>submitted by: <NavLink >{props.article.created_by} </NavLink></div>
                                        <div><b>{props.article.comments} comments</b></div>
                                    <p>{props.article.body}</p>
                            </div>
                        </div>
                </div>
            </article>
        </div>
    );
};

//TODO: style above component and add proptypes

Article.propTypes = {
    article: React.PropTypes.object.isRequired
};

export default Article;