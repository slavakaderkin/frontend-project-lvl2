import fs from 'fs';
import gendiff from '../src';

const beforeJson = `${__dirname}/__fixtures__/before.json`;
const afterJson = `${__dirname}/__fixtures__/after.json`;

const beforeYml = `${__dirname}/__fixtures__/before.yml`;
const afterYml = `${__dirname}/__fixtures__/after.yml`;

const beforeIni = `${__dirname}/__fixtures__/before.ini`;
const afterIni = `${__dirname}/__fixtures__/after.ini`;

const result = fs.readFileSync(`${__dirname}/__fixtures__/result.txt`, 'utf-8');

test.each([
  [beforeJson, afterJson, result],
  [beforeYml, afterYml, result],
  [beforeIni, afterIni, result],
])('gendiff flat %#', (a, b, expected) => {
  expect(gendiff(a, b)).toBe(expected);
});
