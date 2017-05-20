import { expect } from 'chai';
import commentsReducer from '../src/reducer/comments.reducer';
import * as actions from '../src/actions/actions';

describe('commentsReducer', () => {
    it('exists', () => {
        expect(commentsReducer).to.be.a.function;
    });
    it('handles vote comments success', () => {
        const initialState = {
            byId: {
                1: { _id: 1, votes: 10}
            },
            loading: true
        };

        const expected = {
            byId: {
                1: {_id: 1, votes: 11}
            }, 
            loading: false
        };

        const action = actions.voteCommentSuccess(1, 'up');
        const actual = commentsReducer(initialState, action);
        expect(actual).to.eql(expected);
        expect(actual).to.not.equal(initialState);
    });

    it('handles post comments', () => {
        const action = actions.postCommentSuccess({_id: 2, comment: '2nd Comment'});
        const initialState = {
            loading: true,
            error: null,
            byId: {
                1: {belongs_to: 1, _id: 1, comment: '1st Comment'}
            }
        };
    
        const actual = commentsReducer(initialState, action);
        const expected = {
            loading: false,
            error: null,
            byId: {
                1: {belongs_to: 1, _id: 1, comment: '1st Comment'}, 
                2: {_id: 2, comment: '2nd Comment'}
            }
        };

        expect(actual).to.eql(expected);
        expect(actual).to.not.equal(initialState);
    });
    
    it('handles deleting comments', () => {
        const action = actions.deleteCommentSuccess(1);
        const initialState = {
            loading: true,
            byId: {
                1: {comment: 'test comment'}
            }
        };

        const actual = commentsReducer(initialState, action);
        const expected = {
            loading: false,
            byId: {}
        };
        expect(actual).to.eql(expected);
    });
});
