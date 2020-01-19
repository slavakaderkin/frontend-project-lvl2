import parse from './parsers';
import genAst from './genAts';
import render from './formaters';

const genDiff = (pathToBeforeFile, pathToAfterFile, format) => {
  const beforeData = parse(pathToBeforeFile);
  const afterData = parse(pathToAfterFile);

  return render(genAst(beforeData, afterData), format);
};

export default genDiff;
