import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import { Link } from 'react-router';
import '../../public/css/main.css';
import {getTopArticles} from '../reducer/articles.reducer';

function NavBar () {
        return (
            <nav>
            <Link onClick={getTopArticles} className="button" to="/football">Football</Link>
            <Link onClick={getTopArticles} className="button" to="/cooking">Cooking</Link>
            <Link onClick={getTopArticles} className="button" to="/coding">Coding</Link>   
                NorthCodersNews
            </nav>
        );
} 

function mapStateToProps (state) {
    return {
        articles: getTopArticles(state, 10),
        topics: state.topics
    };
}

function mapDispatchToProps (dispatch) {
    return {
        fetchArticlesByTopic: (topic) => {
            dispatch(actions.fetchArticlesByTopic(topic));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);