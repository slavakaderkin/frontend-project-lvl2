import { has, union, isObject } from 'lodash';

const isSharedKey = (object1, object2, key) => has(object1, key) && has(object2, key);
const hasSameValue = (object1, object2, key) => object1[key] === object2[key];
const isNewKey = (object1, object2, key) => has(object2, key) && !has(object1, key);
const areObjects = (object1, object2, key) => isObject(object1[key]) && isObject(object2[key]);

const propertyActions = [
  {
    check: (object1, object2, key) => areObjects(object1, object2, key),
    process: (object1, object2, key, func) => ({
      key, type: 'parrent', children: func(object1[key], object2[key]),
    }),
  },
  {
    check: (object1, object2, key) => hasSameValue(object1, object2, key),
    process: (object1, object2, key) => ({
      key, type: 'unchanged', value: object1[key],
    }),
  },
  {
    check: (object1, object2, key) => isSharedKey(object1, object2, key)
      && !hasSameValue(object1, object2, key),
    process: (object1, object2, key) => ({
      key, type: 'changed', oldValue: object1[key], newValue: object2[key],
    }),
  },
  {
    check: (object1, object2, key) => isNewKey(object1, object2, key),
    process: (object1, object2, key) => ({
      key, type: 'added', value: object2[key],
    }),
  },
  {
    check: (object1, object2, key) => !isNewKey(object1, object2, key),
    process: (object1, object2, key) => ({
      key, type: 'deleted', value: object1[key],
    }),
  },
];

const getPropertyAction = (object1, object2, key) => propertyActions.find(
  ({ check }) => check(object1, object2, key),
);

const genAst = (data1, data2) => {
  const keys = union(Object.keys(data2), Object.keys(data1)).sort();

  return keys.map((key) => {
    const { process } = getPropertyAction(data1, data2, key);
    return process(data1, data2, key, genAst);
  });
};

export default genAst;
