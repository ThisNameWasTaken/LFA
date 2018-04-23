import { expect } from 'chai';
import Grammar from '../js/grammar';

const transitions = {
    'S': { 'a': ['S'], 'b': ['A'] },
    'A': { 'c': ['A'] }
};

describe('getWords', function () {
    it('should return the list of words known by a given grammar', function () {
        expect(new Grammar('S', 'A', transitions).getWords(2)).to.deep.equal(["ab", "bc"]);
        expect(new Grammar('S', 'A', transitions).getWords(3)).to.deep.equal(["aab", "abc", "bcc"]);
        expect(new Grammar('S', 'A', transitions).getWords(4)).to.deep.equal(["aaab", "aabc", "abcc", "bccc"]);
    });
});