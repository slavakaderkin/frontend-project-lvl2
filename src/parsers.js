import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

export default (pathToFile) => {
  const expansion = path.extname(pathToFile);

  if (expansion === '.yml') {
    return yaml.safeLoad(fs.readFileSync(fs.realpathSync(pathToFile)));
  }
  if (expansion === '.json') {
    return JSON.parse(fs.readFileSync(fs.realpathSync(pathToFile)));
  }
};
