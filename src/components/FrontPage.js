import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions/actions';
import { getTopArticles, getTopic } from '../helper';
import ArticleList from './ArticleList';

class FrontPage extends React.Component {

    componentDidMount () {
        this.fetchData.bind(this)(this.props.params.topic);
        this.props.fetchUsers();
    }

    componentWillReceiveProps (nextProps) {
        if (nextProps.params.topic !== this.props.params.topic) {
            this.fetchData(nextProps.params.topic);
        }
    }

    render () {
        if (this.props.loading) return <p className="fa fa-spinner fa-pulse fa-3x fa-fw"></p>;

        return (
            <div id='FrontPage'>
                <ArticleList articles={this.props.articles} voteArticle={this.props.voteArticle} />
            </div>
        );
    }
    
    fetchData (topic) {
        topic = getTopic(topic);

        if (topic) {
            this.props.fetchTopicArticles(topic);
        } else {
            this.props.fetchAllArticles();
        }
    }
}

// PropType Validation below
FrontPage.propTypes = {
    articles: React.PropTypes.array.isRequired,
    loading: React.PropTypes.bool.isRequired,
    params: React.PropTypes.object.isRequired,
    fetchAllArticles: React.PropTypes.func.isRequired,
    fetchTopicArticles: React.PropTypes.func.isRequired,
    voteArticle: React.PropTypes.func.isRequired
};


function mapStateToProps (state) {
    return {
        articles: getTopArticles(state, 10),
        loading: state.articles.loading,
        error: state.articles.error,
        users: state.users.users
    };
}

function mapDispatchToProps (dispatch) {
    return {
        fetchAllArticles: () => {
            dispatch(actions.fetchArticles());
        },
        fetchTopicArticles: (topic) => {
            dispatch(actions.fetchTopicArticles(topic));
        },
        voteArticle: (id, vote) => {
            dispatch(actions.voteArticle(id, vote));
        },
        fetchUsers: () => {
            dispatch(actions.fetchUsers());
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(FrontPage);