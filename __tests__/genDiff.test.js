import fc from 'fs';
import genDiff from '../src';

const pathToJsonBeforeFile = `${__dirname}/__fixtures__/before.json`;
const pathToJsonAfterFile = `${__dirname}/__fixtures__/after.json`;
const pathToIniBeforeFile = `${__dirname}/__fixtures__/before.ini`;
const pathToIniAfterFile = `${__dirname}/__fixtures__/after.ini`;
const pathToYmlBeforeFile = `${__dirname}/__fixtures__/before.yml`;
const pathToYmlAfterFile = `${__dirname}/__fixtures__/after.yml`;

const signResult = fc.readFileSync(`${__dirname}/__fixtures__/signsResult.txt`, 'utf-8');
const plainResult = fc.readFileSync(`${__dirname}/__fixtures__/plainResult.txt`, 'utf-8');
const jsonResult = fc.readFileSync(`${__dirname}/__fixtures__/jsonResult.txt`, 'utf-8');

test.each([
  [pathToJsonBeforeFile, pathToJsonAfterFile, signResult],
  [pathToIniBeforeFile, pathToIniAfterFile, signResult],
  [pathToYmlBeforeFile, pathToYmlAfterFile, signResult],
])('test genDiff signs format', (a, b, expected) => {
  const actual = genDiff(a, b);

  expect(actual).toBe(expected);
});

test.each([
  [pathToJsonBeforeFile, pathToJsonAfterFile, plainResult],
  [pathToIniBeforeFile, pathToIniAfterFile, plainResult],
  [pathToYmlBeforeFile, pathToYmlAfterFile, plainResult],
])('test genDiff plains format', (a, b, expected) => {
  const actual = genDiff(a, b, 'plain');

  expect(actual).toBe(expected);
});

test.each([
  [pathToJsonBeforeFile, pathToJsonAfterFile, jsonResult],
  [pathToIniBeforeFile, pathToIniAfterFile, jsonResult],
  [pathToYmlBeforeFile, pathToYmlAfterFile, jsonResult],
])('test genDiff json format', (a, b, expected) => {
  const actual = genDiff(a, b, 'json');

  expect(actual).toBe(expected);
});
