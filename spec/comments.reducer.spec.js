import { expect } from 'chai';
import commentsReducer from '../src/reducer/comments.reducer';
import { voteCommentRequest, voteCommentSuccess, voteCommentError, postCommentRequest, postCommentSuccess, 
postCommentError, deleteCommentRequest, deleteCommentSuccess, deleteCommentError} from '../src/actions/actions';

describe('commentsReducer', () => {
    it('exists', () => {
        expect(commentsReducer).to.be.a.function;
    });
    
    it('handles vote comment requests', () => {
        const initialState = {
            loading: false,
            error: null
        };
        const expected = {
            loading: true,
            error: null
        };

        const action = voteCommentRequest();
        const actual = commentsReducer(initialState, action);

        expect(actual).to.eql(expected);
    });

    it('handles a vote comment success', () => {
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

        const action = voteCommentSuccess(1, 'up');
        const actual = commentsReducer(initialState, action);
        expect(actual).to.eql(expected);
        expect(actual).to.not.equal(initialState);
    });

    it('handles vote comment errors', () => {
        const initialState = {
            loading: false,
            error: null
        };
        const expected = {
            loading: false,
            error: 'error message'
        };
        const action = voteCommentError('error message');
        const actual = commentsReducer(initialState, action);

        expect(actual).to.eql(expected);
    });

    it('handles post comment requests', () => {
        const initialState = {
            loading: false,
            error: null
        };
        const expected = {
            loading: true, 
            error: null
        };
        const action = postCommentRequest();
        const actual = commentsReducer(initialState, action);

        expect(actual).to.eql(expected);
    });

    it('handles a post comment success', () => {
        const initialState = {
            loading: true,
            error: null,
            byId: {
                1: {belongs_to: 1, _id: 1, comment: '1st Comment'}
            }
        };
    
        const action = postCommentSuccess({_id: 2, comment: '2nd Comment'});
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

    it('handles post comment errors', () => {
        const initialState = {
            error: null,
            loading: true
        };
        const expected = {
            error: 'error message',
            loading: false
        };
        const action = postCommentError('error message');
        const actual = commentsReducer(initialState, action);

        expect(actual).to.eql(expected);
    });

    it('handles delete comment requests', () => {
        const initialState = {
            loading: false,
            error: null
        };
        const expected = {
            loading: true, 
            error: null
        };
        const action = deleteCommentRequest();
        const actual = commentsReducer(initialState, action);

        expect(actual).to.eql(expected);        
    });
    
    it('handles a delete comments success', () => {
        const initialState = {
            loading: true,
            byId: {
                1: {comment: 'test comment'}
            }
        };

        const action = deleteCommentSuccess(1);
        const actual = commentsReducer(initialState, action);
        const expected = {
            loading: false,
            byId: {}
        };
        expect(actual).to.eql(expected);
    });

    it('handles delete comment errors', () => {
        const initialState = {
            error: null,
            loading: true
        };
        const expected = {
            error: 'error message',
            loading: false
        };
        const action = deleteCommentError('error message');
        const actual = commentsReducer(initialState, action);

        expect(actual).to.eql(expected);        
    });
});
