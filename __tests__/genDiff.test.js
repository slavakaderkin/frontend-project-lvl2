import fc from 'fs';
import genDiff from '../src';

const pathToJsonBeforeFile = `${__dirname}/__fixtures__/before.json`;
const pathToJsonAfterFile = `${__dirname}/__fixtures__/after.json`;
const pathToIniBeforeFile = `${__dirname}/__fixtures__/before.ini`;
const pathToIniAfterFile = `${__dirname}/__fixtures__/after.ini`;
const pathToYmlBeforeFile = `${__dirname}/__fixtures__/before.yml`;
const pathToymlAfterFile = `${__dirname}/__fixtures__/after.yml`;

const result = fc.readFileSync(`${__dirname}/__fixtures__/result.txt`, 'utf-8');

test.each([
  [pathToJsonBeforeFile, pathToJsonAfterFile, result],
  [pathToIniBeforeFile, pathToIniAfterFile, result],
  [pathToYmlBeforeFile, pathToymlAfterFile, result],
])('test genDiff', (a, b, expected) => {
  const actual = genDiff(a, b);

  expect(actual).toBe(expected);
});
