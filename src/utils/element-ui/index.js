export function isObject(obj) {
  return Object.prototype.toString.call(obj) === '[object Object]';
}

export function isVNode(node) {
  return node !== null && typeof node === 'object' && hasOwn(node, 'componentOptions');
}

export function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}
