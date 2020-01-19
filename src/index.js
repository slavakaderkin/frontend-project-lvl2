import parse from './parsers';
import genAst from './genAts';
import render from './render';

const genDiff = (pathToBeforeFile, pathToAfterFile) => {
  const beforeData = parse(pathToBeforeFile);
  const afterData = parse(pathToAfterFile);

  return render(genAst(beforeData, afterData));
};

export default genDiff;
