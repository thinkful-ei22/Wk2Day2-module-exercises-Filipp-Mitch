'use strict';
/* global store, cuid, $ */
const Item = (function () {

  const validateName = function(name) {
    if (name === '' || name === undefined) {
      throw new TypeError('name does not exist');
    }
  };
  const create = function(name) {
    store.items.push({ id: cuid(), name: name, checked: false });
    return {
      id: cuid(),
      name: name,
      checked: false
    };
  };

  return {
    validateName, create 
  };
}() );
