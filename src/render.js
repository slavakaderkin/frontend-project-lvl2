import { isObject } from 'lodash';

const tab = (depth = 0) => '  '.repeat(depth);

const objectToString = (object, depth) => {
  const formattedObject = Object.keys(object)
    .map((key) => `${key}: ${object[key]}`)
    .join('\n');
  return `{\n${tab(depth + 4)}${formattedObject}\n${tab(depth + 2)}}`;
};

const stringify = (value, depth) => (isObject(value) ? objectToString(value, depth) : value);

const toString = (key, value, depth, sign) => {
  const formattedValue = stringify(value, depth);
  return `${tab(depth + 1)}${sign} ${key}: ${formattedValue}`;
};


const propertyActions = [
  {
    check: (object) => object.type === 'unchanged',
    process: (object, depth) => (`${toString(object.key, object.value, depth, ' ')}`),
  },
  {
    check: (object) => object.type === 'changed',
    process: (object, depth) => (`${toString(object.key, object.newValue, depth, '+')}\n${toString(object.key, object.oldValue, depth, '-')}`),
  },
  {
    check: (object) => object.type === 'parrent',
    process: (object, depth, func) => `${tab(depth + 2)}${object.key}: ${func(object.children, depth + 2)}`,
  },
  {
    check: (object) => object.type === 'added',
    process: (object, depth) => (`${toString(object.key, object.value, depth, '+')}`),
  },
  {
    check: (object) => object.type === 'deleted',
    process: (object, depth) => (`${toString(object.key, object.value, depth, '-')}`),
  },
];

const getPropertyAction = (object) => propertyActions.find(({ check }) => check(object));

const render = (ast, depth = 0) => {
  const result = ast
    .map((key) => {
      const { process } = getPropertyAction(key);
      return process(key, depth, render);
    })
    .join('\n');

  return `{\n${result}\n${tab(depth)}}`;
};

export default render;
