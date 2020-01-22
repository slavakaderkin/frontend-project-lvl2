import fs from 'fs';
import path from 'path';
import parse from './parsers';
import genAst from './genAts';
import render from './formatters';

const getData = (pathToFile) => fs.readFileSync(fs.realpathSync(pathToFile), 'utf-8');
const getType = (pathToFile) => {
  const expansion = path.extname(pathToFile);
  return expansion.slice(1);
};

export default (pathToBeforeFile, pathToAfterFile, format) => {
  const typeBeforeFile = getType(pathToBeforeFile);
  const typeAfterFile = getType(pathToAfterFile);

  const beforeData = parse(getData(pathToBeforeFile), typeBeforeFile);
  const afterData = parse(getData(pathToAfterFile), typeAfterFile);

  return render(genAst(beforeData, afterData), format);
};
