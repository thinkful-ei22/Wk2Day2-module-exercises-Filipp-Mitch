'use strict';

/* global cuid, Item, $ */

const store = (function () {
  const items = [];
  let hideCheckedItems = false;
  let searchTerm = '';

  function findById(id) {
    return store.items.find(x => x.id === id);
  }

  function addItem(name) {
    try {
      Item.validateName(name);
      Item.create(name);
    }
    catch(error) {
      console.log(`Cannot add item: ${error.message} for now.`);
    }
  }

  function findAndToggleChecked(id) {
    const foundItem = findById(id);
    console.log('checked!');
    foundItem.checked = !foundItem.checked;
  } 

  function findAndUpdateName(id, newName) {
    try {
      Item.validateName(newName);
    }
    catch(error){
      console.log(`Cannot update name: ${error.message}.`);
    }
    findById(id).name = newName;
  }

  function findAndDelete(id) {
    this.items.findIndex(x => x.id === id);
    store.items.splice(id, 1);
  }

  
  function deleteListItem(id) {
    const index = store.items.findIndex(item => item.id === id);
    store.items.splice(index, 1);
  }

  function toggleCheckedFilter() {
    this.hideCheckedItems = !this.hideCheckedItems;
  }

  function setSearchTerm(val) {
    this.searchTerm = val;
  }

  return {
    items: items, findById, addItem, findAndToggleChecked, findAndUpdateName, findAndDelete, deleteListItem, toggleCheckedFilter, setSearchTerm,
  };

}());