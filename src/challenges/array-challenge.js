const electionVotes = [
  'Harry', 'Rick', 'Ben', 'Ben', 'Harry', 'Ashley',
  'Connor', 'Rick', 'Ashley', 'Rick', 'Albert', 'Ben',
  'Michael', 'Rick', 'Albert', 'Karen', 'Harry',
  'Karen', 'Donna', 'Ashley', 'Albert', 'Harry',
  'Dane', 'Dane', 'Rick', 'Donna', 'Mortimer',
];

const tallyVotes = (votes) => [...new Set(votes)].reduce((acc, name) => ({
  ...acc,
  [name]: votes.filter((vote) => vote === name).length,
}), {});

console.log(tallyVotes(electionVotes));

/**
 * Expected Output (something like this):
 * {
 *     Harry: <some number>
 *     Donna: <some number>
 *     Rick: <some number>
 *     ...
 * }
 *
 * - can't use names within tallyVotes
 * - no mutations are allowed
 */
