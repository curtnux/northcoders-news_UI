import { expect } from 'chai';
import { fetchArticlesByTopic } from '../src/reducer/articles.reducer';

describe('reducer', () => {
    const initialState = {
        articles: {
        byId: {
            '1': { belongs_to: 'football', name: 'hello'},
            '2': { belongs_to: 'cooking'},
            '3': { belongs_to: 'football'}
            }
        }
    };

    it('exists', () => {
        expect(fetchArticlesByTopic).to.be.a.function;
    });
    it('reduce state to only include football', () => {
        var input = fetchArticlesByTopic(initialState, 'football');
        var expected = [{ belongs_to: 'football', name: 'hello'}, { belongs_to: 'football'}];
        expect(input).to.eql(expected);
    });
});
