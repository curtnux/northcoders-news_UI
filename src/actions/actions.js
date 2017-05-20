import * as types from './types';
import axios from 'axios';

import { ROOT } from '../../config';

// ******* FETCH ALL ARTICLES *******************
export function fetchAllArticlesRequest () {
    return {
        type: types.FETCH_ALL_ARTICLES_REQUEST
    };
}

export function fetchAllArticlesSuccess (data) {
    return {
        type: types.FETCH_ALL_ARTICLES_SUCCESS,
        data
    };
}

export function fetchAllArticlesError (error) {
    return {
        type: types.FETCH_ALL_ARTICLES_ERROR,
        error
    };
}

export function fetchArticles () {
    return dispatch => {
        dispatch(fetchAllArticlesRequest ());
            axios
              .get(`${ROOT}/articles`)
              .then(res => {
                  dispatch(fetchAllArticlesSuccess (res.data.articles));
              })
              .catch(error => {
                  dispatch(fetchAllArticlesError (error.message));
              });
        };
    }
// *****************************************************

// ****************** FETCH TOPICS *********************
export function fetchTopicArticlesRequest () {
    return {
        type: types.FETCH_TOPIC_ARTICLES_REQUEST
    };
}

export function fetchTopicArticlesSuccess (data) {
    return {
        type: types.FETCH_TOPIC_ARTICLES_SUCCESS,
        data
    };
}

export function fetchTopicArticlesError (error) {
    return {
        type: types.FETCH_TOPIC_ARTICLES_ERROR,
        error
    };
}

export function fetchTopicArticles (TOPIC) {
    return dispatch => {
        dispatch(fetchTopicArticlesRequest ());
            axios
              .get(`${ROOT}/topics/${TOPIC}/articles`)
              .then(res => {
                  dispatch(fetchTopicArticlesSuccess(res.data.articles));
              })
              .catch(error => {
                dispatch(fetchTopicArticlesError(error.message));
              });
    };
}
// *****************************************************

// ************** FETCH ARTICLE ********************
export function  fetchArticleRequest () {
    return {
        type: types.FETCH_ARTICLE_REQUEST
    };
}

export function fetchArticleSuccess (data) {
    return {
        type: types.FETCH_ARTICLE_SUCCESS,
        data
    };
}

export function fetchArticleError (error) {
    return {
        type: types.FETCH_ARTICLE_ERROR,
        error
    };
}

export function fetchArticle (ID) {
    return function (dispatch) {
        dispatch(fetchArticleRequest (ID));
            axios
              .get(`${ROOT}/articles/${ID}/comments`)
              .then(res => {
                  dispatch(fetchArticleSuccess (res.data.comments));
              })
              .catch(error => {
                  dispatch(fetchArticleError (error.message));
              });
    };
}
// *****************************************************

// **************** VOTE ARTICLE **********************
export function voteArticle (article_id, vote) {
  return (dispatch) => {
    dispatch(voteArticleRequest ());
    axios
      .put(`${ROOT}/articles/${article_id}?vote=${vote}`)
      .then(res => {
        dispatch(voteArticleSuccess(res.data));
      })
      .catch(error => {
         dispatch(voteArticleError(error.message));
      });
  };
}

export function voteArticleSuccess (data) {
  return {
    type: types.VOTE_ARTICLE_SUCCESS,
    data
  };
}

export function voteArticleError (error) {
  return {
    type: types.VOTE_ARTICLE_ERROR,
    error
  };
}

export function voteArticleRequest () {
  return {
    type: types.VOTE_ARTICLE_REQUEST
  };
}
// *****************************************************

// ****************** Vote Comment *********************
export function voteComment (comment_id, vote) {
    return dispatch => {
        dispatch(voteCommentRequest ());
            axios
                .put(`${ROOT}/comments/${comment_id}?vote=${vote}`)
                .then(res => {
                    dispatch(voteCommentSuccess(res.data.comment));
                })
                .catch(error => {
                    dispatch(voteCommentError(error.message));
                });
    };
}

export function voteCommentRequest () {
    return {
        type: types.VOTE_COMMENT_REQUEST
    };
}

export function voteCommentSuccess (id, vote) {
    return {
        type: types.VOTE_COMMENT_SUCCESS,
        id,
        vote
    };
}

export function voteCommentError (error) {
    return {
        type: types.VOTE_COMMENT_ERROR,
        error
    };
}
// *****************************************************

// **************** POST COMMENT ***********************

export function postComment (article_id, comment) {
    return (dispatch) => {
        dispatch(postCommentRequest());
            axios
                .post(`${ROOT}/articles/${article_id}/comments`, { 
                    comment: comment
                })
                .then(res => {
                    dispatch(postCommentSuccess(res.data.comment));
                })
                .catch(error => {
                    dispatch(postCommentError(error.message));
                });
    };
}

export function postCommentRequest () {
    return {
        type: types.POST_COMMENT_REQUEST
    };
}

export function postCommentSuccess (data) {
    return {
        type: types.POST_COMMENT_SUCCESS,
        data
    };
}

export function postCommentError (error) {
    return {
        type: types.POST_COMMENT_ERROR,
        error
    };
}
// *****************************************************

// *************** DELETE COMMENTS *********************

export function deleteCommentRequest () {
    return {
        type: types.DELETE_COMMENT_REQUEST
    };
}

export function deleteCommentSuccess (comment_id) {
    return {
        type: types.DELETE_COMMENT_SUCCESS,
        comment_id
    };
}

export function deleteCommentError (error) {
    return {
        type: types.DELETE_COMMENT_ERROR,
        error
    };
}

export function deleteComment (comment_id) {
    return (dispatch) => {
        dispatch(deleteCommentRequest());
            axios
                .delete(`${ROOT}/comments/${comment_id}`)
                .then(() => {
                    dispatch(deleteCommentSuccess (comment_id));
                })
                .catch(error => {
                    dispatch(deleteCommentError (error));
                });
    };
}

// *****************************************************

// ****************** USERS ****************************
export function fetchUsers () {
    return dispatch => {
        dispatch(fetchUserRequest ());
            axios
                .get(`${ROOT}/users`)
                .then(res => {
                    dispatch(fetchUserSuccess (res.data.users));
                })
                .catch(error => {
                    dispatch(fetchUserError (error));
                });
    };
}

export function fetchUserRequest () {
    return {
        type: types.FETCH_USERS_REQUEST
    };
}

export function fetchUserSuccess (data) {
    return {
        type: types.FETCH_USERS_SUCCESS,
        data
    };
}

export function fetchUserError (error) {
    return {
        type: types.FETCH_USERS_ERROR,
        error
    };
}
// *****************************************************


