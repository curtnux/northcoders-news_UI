import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import { Link } from 'react-router';
import '../../public/css/main.css';

const NavBar = React.createClass({
    componentWillMount () {
        this.props.fetchTopics ();
    },
    render () {
        return (
            <nav>
            <Link className="button" onClick={(e) => this.generateArticles(e)} to="/topics/football/articles">Football</Link>
            <Link className="button" onClick={(e) => this.generateArticles(e)} to="/topics/cooking/articles">Cooking</Link>
            <Link className="button" onClick={(e) => this.generateArticles(e)} to="/topics/coding/articles">Coding</Link>   
                NorthCodersNews
            </nav>
        );
    },
    generateArticles (e) { // this is where we need to create an action to be able to call this this function will be on the reducer
        this.props.articles.data.filter(function (article, i) {
          if (article.belongs_to === e)
          return article.belongs_to;
        });
    }
});

function mapStateToProps (state) {
    return {
        topics: state.topics,
        articles: state.articles
    };
}

function mapDispatchToProps (dispatch, props) {
    return {
        fetchTopics: () => {
            dispatch(actions.fetchTopics(props.topic));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);