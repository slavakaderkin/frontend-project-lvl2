import fs from 'fs';
import gendiff from '../src';

const before = `${__dirname}/__fixtures__/before.json`;
const after = `${__dirname}/__fixtures__/after.json`;
const result = fs.readFileSync(`${__dirname}/__fixtures__/result.txt`, 'utf-8');

test('gendiff json', () => {
  expect(gendiff(before, after)).toBe(result);
});
