const assert = require('assert');
const Rooster = require('../index.js');

describe('Rooster', () => {
    describe('.announceDawn', () => {
        it('returns a rooster call', () => {

            // Setup
            const expected = 'cock-a-doodle-doo!';

            // Exercise
            const actual = Rooster.announceDawn();

            // Verify
            assert.equal(actual, expected);
        });
    });
    describe('.timeAtDawn', () => {
        it('returns its argument as a string', () => {
            // Setup
            const inputNumber = 12;
            const expected = '12'

            // Exercise
            const actual = Rooster.timeAtDawn(inputNumber);

            // Verify
            assert.equal(actual, expected);
        })
    });
});
