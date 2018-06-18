'use strict';

const Item = (function () {

  const validateName = function(name) {
    if (name === '' || name === undefined) {
      throw new TypeError('name does not exist');
    }
  };
  const create = function(name) {
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
