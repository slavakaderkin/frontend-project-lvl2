import parse from './parsers';
import genAst from './genAts';
import render from './formatters';

export default (pathToBeforeFile, pathToAfterFile, format) => {
  const beforeData = parse(pathToBeforeFile);
  const afterData = parse(pathToAfterFile);

  return render(genAst(beforeData, afterData), format);
};
