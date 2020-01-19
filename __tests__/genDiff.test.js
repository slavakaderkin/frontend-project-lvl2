import fc from 'fs';
import genDiff from '../src';

const pathToJsonBeforeFile = `${__dirname}/__fixtures__/before.json`;
const pathToJsonAfterFile = `${__dirname}/__fixtures__/after.json`;
const pathToIniBeforeFile = `${__dirname}/__fixtures__/before.ini`;
const pathToIniAfterFile = `${__dirname}/__fixtures__/after.ini`;
const pathToYmlBeforeFile = `${__dirname}/__fixtures__/before.yml`;
const pathToymlAfterFile = `${__dirname}/__fixtures__/after.yml`;

const signResult = fc.readFileSync(`${__dirname}/__fixtures__/signsResult.txt`, 'utf-8');
const plainResult = fc.readFileSync(`${__dirname}/__fixtures__/plainResult.txt`, 'utf-8');

test.each([
  [pathToJsonBeforeFile, pathToJsonAfterFile, signResult],
  [pathToIniBeforeFile, pathToIniAfterFile, signResult],
  [pathToYmlBeforeFile, pathToymlAfterFile, signResult],
])('test genDiff signs format', (a, b, expected) => {
  const actual = genDiff(a, b);

  expect(actual).toBe(expected);
});

test.each([
  [pathToJsonBeforeFile, pathToJsonAfterFile, plainResult],
  [pathToIniBeforeFile, pathToIniAfterFile, plainResult],
  [pathToYmlBeforeFile, pathToymlAfterFile, plainResult],
])('test genDiff plains format', (a, b, expected) => {
  const actual = genDiff(a, b, 'plain');

  expect(actual).toBe(expected);
});
