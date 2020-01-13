import fs from 'fs';
import { has } from 'lodash';

export default (path1, path2) => {
  const beforeData = JSON.parse(fs.readFileSync(fs.realpathSync(path1)));
  const afterData = JSON.parse(fs.readFileSync(fs.realpathSync(path2)));
  const keys = Array.from(new Set([...Object.keys(beforeData), ...Object.keys(afterData)]));

  const result = keys.reduce((acc, currentKey) => {
    if (has(afterData, currentKey) && has(beforeData, currentKey)) {
      return (afterData[currentKey] === beforeData[currentKey])
        ? [...acc, `  ${currentKey}: ${afterData[currentKey]}`]
        : [...acc, `+ ${currentKey}: ${afterData[currentKey]}\n- ${currentKey}: ${beforeData[currentKey]}`];
    }
    if (has(afterData, currentKey)) {
      return [...acc, `+ ${currentKey}: ${afterData[currentKey]}`];
    }

    return [...acc, `- ${currentKey}: ${beforeData[currentKey]}`];
  }, []);

  return `{\n${result.join('\n')}\n}`;
};
