import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions/actions';
import NavLink from './NavLink';

const NavBar = () => { //TODO: MAP through topics to create a DRY component
    return (
        <section className='hero is-primary'>
            <div className='hero-body'>
                <div className='container'>
                    <h1 className='title'>Northcoders News</h1>
        <nav className='nav-menu nav-left'>
            <NavLink className="nav-item is-tab is-hidden-mobile" to="/articles">All Articles</NavLink> 
            <NavLink className="nav-item is-tab is-hidden-mobile" to="/football">Football</NavLink>
            <NavLink className="nav-item is-tab is-hidden-mobile" to="/coding">Coding</NavLink>
            <NavLink className="nav-item is-tab is-hidden-mobile" to="/cooking">Cooking</NavLink>
        </nav>
                </div>
            </div>
        </section>
    );
};

function mapStateToProps () {
    return {      
    };
}

function mapDispatchToProps (dispatch) {
    return {
        fetchTopicArticles: (topic) => {
            dispatch(actions.fetchTopicArticles(topic));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);