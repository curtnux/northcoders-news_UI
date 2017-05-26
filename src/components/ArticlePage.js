import React from 'react';
import { connect } from 'react-redux';
import { fetchArticle, voteArticle, voteComment, postComment, deleteComment  } from '../actions/actions';

import { getTopComments } from '../helper';
import Article from './Article';
import Comments from './Comments';
import CommentForm from './CommentForm';
import Loading from './Loading';

class ArticlePage extends React.Component {
    constructor (props) {
        super (props);

        this.state = {
            input: ''
        };
    this.inputHandler = this.inputHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
    }

    componentDidMount () {
        this.props.fetchArticleByID(this.props.params.article_id);
    }

    render () {

        if (this.props.loading) return (
            <Loading />
        );

        return (
            <div>
            <Article 
                article={this.props.article} 
                voteArticle={this.props.voteArticle.bind(null, this.props.article._id)}  
            />
            <CommentForm 
                inputHandler={this.inputHandler}
                submitHandler={this.submitHandler}
                input={this.state.input}
            />
            <div className='box'>
                <h1 className='title is-4'>Comments</h1>
                {this.getComments()}
            </div>
            </div>
        );
    }

    getComments () {
        return (
            Object.keys(this.props.comments).map((comments, i) => {
                const comment = this.props.comments[comments];
                
                return (
                    <Comments 
                        key={i}
                        {...comment}
                        voteComment={this.props.voteComment}
                        deleteComment={this.props.deleteComment}
                    />
                );
            })
        );
    }

    inputHandler (event) {
        this.setState ({
            input: event.target.value
        });
    }

    submitHandler (event) {
        event.preventDefault();
        this.props.postComment(this.props.params.article_id, this.state.input);
        this.setState({ input: '' });
    }
}

ArticlePage.propTypes = {
    fetchArticleByID: React.PropTypes.func.isRequired,
    params: React.PropTypes.object.isRequired,
    loading: React.PropTypes.bool.isRequired,
    comments: React.PropTypes.array.isRequired,
    article: React.PropTypes.object.isRequired,
    postComment: React.PropTypes.func.isRequired,
    voteComment: React.PropTypes.func.isRequired,
    voteArticle: React.PropTypes.func.isRequired, 
    deleteComment: React.PropTypes.func.isRequired
};

function mapStateToProps (state, props) {
    return {
        article: state.articles.byId[props.params.article_id],
        comments: getTopComments(state, 10),
        loading: state.comments.loading,
        error: state.comments.error
    };
}

function mapDispatchToProps (dispatch) {
    return {
        fetchArticleByID: (id) => {
            dispatch(fetchArticle(id));
        },
        voteArticle: (id, vote) => {
            dispatch(voteArticle(id, vote));
        },
        voteComment: (id, vote) => {
            dispatch(voteComment(id, vote));
        },
        postComment: (id, comment) => {
            dispatch(postComment(id, comment));
        },
        deleteComment: (comment_id) => {
            dispatch(deleteComment(comment_id));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps) (ArticlePage);
