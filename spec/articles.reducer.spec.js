import { expect } from 'chai';
import articlesReducer from '../src/reducer/articles.reducer';
import * as actions from '../src/actions/actions';

describe('articlesReducer', () => {
  
    const initialState = {
      byId: {},
      loading: false,
      error: null
    };

    it('exists', () => {
        expect(articlesReducer).to.be.a.function;
    });

    it('handles fetch all articles requests', function () {
      const articles = [{_id: 1, belongs_to: 'football'}];

      const newState = {
          byId: {
            1: { _id: 1, belongs_to: 'football'}
          },
          loading: false,
          error: null
      };

      const input = articlesReducer(initialState, actions.fetchAllArticlesSuccess(articles));

      expect(input).to.eql(newState);
      expect(input).to.not.equal(initialState);
    });

    it('handles fetch Topic Articles', function () {
      const initialState = {
        byId: {
          1: { _id: 1, belongs_to: 'football'},
          2: { _id:2, belongs_to: 'cooking'}, 
          3: { _id: 3, belongs_to: 'football'}
        },
        loading: false, 
        error: null
      };

      const topic = [{_id: 1, belongs_to: 'football'}, {_id: 3, belongs_to: 'football'}];

      const newState = {
        byId: {
          1: {_id: 1, belongs_to: 'football'}, 
          3: {_id: 3, belongs_to: 'football'}
        },
        loading: false, 
        error: null
      };

      const input = articlesReducer(initialState, actions.fetchTopicArticlesSuccess(topic));

      expect(input).to.eql(newState);
      expect(initialState).to.not.eql(newState);
    });

    it('handles a vote article success', () => {

      const initialState = {
        byId: {
          1: { _id: 1, belongs_to: 'football', votes: 10},
          2: {_id: 2, belongs_to: 'cooking', votes: 7}
        },
        loading: false, 
        error: null
      };

      const vote = {_id: 1, belongs_to: 'football', votes: 11};

      const newState = {
        byId: {
          1: { _id: 1, belongs_to: 'football', votes: 11},
          2: {_id: 2, belongs_to: 'cooking', votes: 7}
        },
        loading: false, 
        error: null
      };

      const input = articlesReducer(initialState, actions.voteArticleSuccess(vote));

      expect(input).to.eql(newState);
      expect(initialState).to.not.eql(newState);
    });
});



