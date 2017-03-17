import * as types from './types';
import axios from 'axios';

import { ROOT } from '../../config';

export function fetchArticles () {
  return (dispatch) => {
    dispatch(fetchArticlesRequest());
    axios
      .get(`${ROOT}/articles`)
      .then(res => {
        dispatch(fetchArticlesSuccess(res.data.articles));
      })
      .catch(err => {
         dispatch(fetchArticlesError(err.message));
      });
  };
}

export function fetchArticlesRequest () {
  return {
    type: types.FETCH_ARTICLES_REQUEST
  };
}

export function fetchArticlesSuccess (articles) {
  return {
    type: types.FETCH_ARTICLES_SUCCESS,
    data: articles
  };
}

export function fetchArticlesError (error) {
  return {
    type: types.FETCH_ARTICLES_ERROR,
    error
  };
}

export function fetchArticlesByTopic (topic) {
  return (dispatch) => {
    dispatch(fetchArticlesByTopicRequest());
    axios
      .get(`${ROOT}/topics/${topic}/articles`)
      .then(res => {
        dispatch(fetchArticlesByTopicSuccess(res.data.articles));
      })
      .catch(err => {
         dispatch(fetchArticlesByTopicError(err.message));
      });
  };
}

export function fetchArticlesByTopicRequest () {
  return {
    type: types.FETCH_TOPICS_REQUEST
  };
}

export function fetchArticlesByTopicSuccess (data) {
  return {
    type: types.FETCH_TOPICS_SUCCESS,
    data
  };
}

export function fetchArticlesByTopicError (err) {
  return {
    type: types.FETCH_TOPICS_ERROR,
    err
  };
}

export function voteArticle (id, vote) {
  return function (dispatch) {
    dispatch(voteArticleRequest());
    axios.put(`${ROOT}/articles/${id}?vote={vote}`)
      .then(res => {
        dispatch(voteArticleSucces(res.data));
      })
      .catch(error => {
        dispatch(voteArticleError(error.message));
      });
  };
}

export function voteArticleRequest () {
  return {type: types.VOTE_ARTICLE_REQUEST};
}

export function voteArticleSucces (data) {
  return {type: types.VOTE_ARTICLE_SUCCESS},
        data;
}

export function voteArticleError (error) {
  return {type: types.VOTE_ARTICLE_ERROR},
          error;
}