import fc from 'fs';
import genDiff from '../src';

const result = fc.readFileSync(`${__dirname}/__fixtures__/result.txt`, 'utf-8');
const pathToFixtures = `${__dirname}/__fixtures__`;

test('test genDiff json', () => {
  const beforeJsonPath = `${pathToFixtures}/before.json`;
  const afterJsonPath = `${pathToFixtures}/after.json`;

  const actual = genDiff(beforeJsonPath, afterJsonPath);

  expect(actual).toBe(result);
});

test('test genDiff yml', () => {
  const beforeYmlPath = `${pathToFixtures}/before.yml`;
  const afterYmlPath = `${pathToFixtures}/after.yml`;

  const actual = genDiff(beforeYmlPath, afterYmlPath);

  expect(actual).toBe(result);
});

test('test genDiff ini', () => {
  const beforeIniPath = `${pathToFixtures}/before.ini`;
  const afterIniPath = `${pathToFixtures}/after.ini`;

  const actual = genDiff(beforeIniPath, afterIniPath);

  expect(actual).toBe(result);
});
