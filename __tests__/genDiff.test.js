import fc from 'fs';
import genDiff from '../src';

const result = fc.readFileSync(`${__dirname}/__fixtures__/result.txt`, 'utf-8');

test('test genDiff json', () => {
  const beforeJsonPath = `${__dirname}/__fixtures__/before.json`;
  const afterJsonPath = `${__dirname}/__fixtures__/after.json`;

  const actual = genDiff(beforeJsonPath, afterJsonPath);

  expect(actual).toBe(result);
});

test('test genDiff yml', () => {
  const beforeYmlPath = `${__dirname}/__fixtures__/before.yml`;
  const afterYmlPath = `${__dirname}/__fixtures__/after.yml`;

  const actual = genDiff(beforeYmlPath, afterYmlPath);

  expect(actual).toBe(result);
});

test('test genDiff ini', () => {
  const beforeIniPath = `${__dirname}/__fixtures__/before.ini`;
  const afterIniPath = `${__dirname}/__fixtures__/after.ini`;

  const actual = genDiff(beforeIniPath, afterIniPath);

  expect(actual).toBe(result);
});
