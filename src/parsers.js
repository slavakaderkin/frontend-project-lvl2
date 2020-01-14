import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';
import ini from 'ini';

export default (pathToFile) => {
  const expansion = path.extname(pathToFile);

  if (expansion === '.yml') {
    return yaml.safeLoad(fs.readFileSync(fs.realpathSync(pathToFile), 'utf-8'));
  }

  if (expansion === '.ini') {
    return ini.parse(fs.readFileSync(fs.realpathSync(pathToFile), 'utf-8'));
  }

  return JSON.parse(fs.readFileSync(fs.realpathSync(pathToFile), 'utf-8'));
};
