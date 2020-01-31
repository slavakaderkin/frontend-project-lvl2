import { isObject } from 'lodash';

const tab = (depth = 0) => '  '.repeat(depth);

const objectToString = (object, depth) => {
  const formattedObject = Object.keys(object)
    .map((key) => `${key}: ${object[key]}`)
    .join('\n');
  return `{\n${tab(depth + 4)}${formattedObject}\n${tab(depth + 2)}}`;
};

const stringify = (value, depth) => (isObject(value) ? objectToString(value, depth) : value);

const toString = (key, value, depth, sign) => `${tab(depth + 1)}${sign} ${key}: ${stringify(value, depth)}`;

const propertyActions = {
  unchanged: (object, depth) => toString(object.key, object.value, depth, ' '),
  changed: (object, depth) => (
    `${toString(object.key, object.newValue, depth, '+')}\n${toString(object.key, object.oldValue, depth, '-')}`),
  parrent: (object, depth, func) => `${tab(depth + 2)}${object.key}: ${func(object.children, depth + 2)}`,
  added: (object, depth) => toString(object.key, object.value, depth, '+'),
  deleted: (object, depth) => toString(object.key, object.value, depth, '-'),
};

const render = (ast) => {
  const iter = (data, depth = 0) => {
    const result = data
      .map((object) => propertyActions[object.type](object, depth, iter))
      .join('\n');

    return `{\n${result}\n${tab(depth)}}`;
  };

  return iter(ast);
};


export default render;
