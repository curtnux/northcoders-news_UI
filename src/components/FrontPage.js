import React from 'react';
import { connect } from 'react-redux';

import { fetchArticles, fetchTopicArticles, voteArticle} from '../actions/actions';
import { getTopArticles, getTopic } from '../helper';
import ArticleList from './ArticleList';
import Loading from './Loading';

class FrontPage extends React.Component {

    componentDidMount () {
        this.fetchData.bind(this)(this.props.params.topic);
    }

    componentWillReceiveProps (nextProps) {
        if (nextProps.params.topic !== this.props.params.topic) {
            this.fetchData(nextProps.params.topic);
        }
    }

    render () {
        if (this.props.loading) return (
            <Loading />
        );

        return (
            <div>
                <ArticleList 
                    articles={this.props.articles} 
                    voteArticle={this.props.voteArticle} 
                />
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
        error: state.articles.error
    };
}

function mapDispatchToProps (dispatch) {
    return {
        fetchAllArticles: () => {
            dispatch(fetchArticles());
        },
        fetchTopicArticles: (topic) => {
            dispatch(fetchTopicArticles(topic));
        },
        voteArticle: (id, vote) => {
            dispatch(voteArticle(id, vote));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(FrontPage);