import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';
import ini from 'ini';

const parserJson = (pathToFile) => JSON.parse(fs.readFileSync(fs.realpathSync(pathToFile), 'utf-8'));
const parserYml = (pathToFile) => yaml.safeLoad(fs.readFileSync(fs.realpathSync(pathToFile), 'utf-8'));
const parserIni = (pathToFile) => ini.parse(fs.readFileSync(fs.realpathSync(pathToFile), 'utf-8'));

export default (pathToFile) => {
  const expansion = path.extname(pathToFile);

  if (expansion === '.yml') {
    return parserYml(pathToFile);
  }

  if (expansion === '.ini') {
    return parserIni(pathToFile);
  }

  return parserJson(pathToFile);
};
