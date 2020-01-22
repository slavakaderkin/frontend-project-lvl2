import fc from 'fs';
import genDiff from '../src';

const makePathTo = (name, type) => `${__dirname}/__fixtures__/${name}.${type}`;

const table = [
  ['json', 'signs'],
  ['ini', 'plain'],
  ['yml', 'json'],
];

test.each(table)('Test genDiff for two %s files output to %s', (format, outputFormat) => {
  const beforePath = makePathTo('before', format);
  const afterPath = makePathTo('after', format);

  const actual = genDiff(beforePath, afterPath, outputFormat);
  const result = fc.readFileSync(makePathTo('result', outputFormat), 'utf-8');

  expect(actual).toBe(result);
});
