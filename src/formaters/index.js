import plainFormatter from './plainFormatter';
import signsFormatter from './signsFormatter';

const formatters = {
  signs: signsFormatter,
  plain: plainFormatter,
  json: JSON.stringify,
};

export default (ast, format = 'signs') => formatters[format](ast, null, 4);
