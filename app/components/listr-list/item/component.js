import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',
  classNameBindings: ['done'],

  done: Ember.computed.alias('item.done'),
  // we are binding the Ember object to the API object list>item>done
  actions: {
    toggleDone() {
      let id = this.get('item.id');
      let store = this.get('store');

      store.findRecord('item', id)
      .then((item) => {
        item.toggleProperty('done');
        return item;
      })
      .then((item) => item.save());
    },
    deleteItem() {
      this.get('item').destroyRecord();
    },
    // https://guides.emberjs.com/v2.5.0/models/creating-updating-and-deleting-records/
  },
  store: Ember.inject.service()
});

// alternate way to encapsulate whole element:
// click () {
//   this.get('item').toggleProperty('done');
// }
