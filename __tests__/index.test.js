import fs from 'fs';
import gendiff from '../src';

const beforeJson = `${__dirname}/__fixtures__/before.json`;
const afterJson = `${__dirname}/__fixtures__/after.json`;

const beforeYml = `${__dirname}/__fixtures__/before.yml`;
const afterYml = `${__dirname}/__fixtures__/after.yml`;

const result = fs.readFileSync(`${__dirname}/__fixtures__/result.txt`, 'utf-8');

test('gendiff json', () => {
  expect(gendiff(beforeJson, afterJson)).toBe(result);
});

test('gendiff yml', () => {
  expect(gendiff(beforeYml, afterYml)).toBe(result);
});
