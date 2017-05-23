import React from 'react';
import { connect } from 'react-redux';

import { fetchTopicArticles } from '../actions/actions';
import NavLink from './NavLink';

const NavBar = () => {
    return (
        <section className='hero is-info is-bold'>
            <div className='hero-body'>
                <div className='container'>
                    <b><h1 className='title is-1'>Northcoders News</h1></b>
                        <nav className='nav-menu nav-left'>
                            <NavLink className="nav-item is-tab is-hidden-mobile" activeClassName="is-active" to="/articles">All Articles</NavLink> 
                            <NavLink className="nav-item is-tab is-hidden-mobile" activeClassName="is-active" to="/football">Football</NavLink>
                            <NavLink className="nav-item is-tab is-hidden-mobile" activeClassName="is-active" to="/coding">Coding</NavLink>
                            <NavLink className="nav-item is-tab is-hidden-mobile" activeClassName="is-active" to="/cooking">Cooking</NavLink>
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
            dispatch(fetchTopicArticles(topic));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
