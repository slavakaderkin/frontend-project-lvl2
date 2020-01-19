import plainFormatter from './plainFormatter';
import signsFormatter from './signsFormatter';

const formatters = {
  signs: signsFormatter,
  plain: plainFormatter,
};

export default (ast, format = 'signs') => formatters[format](ast);
