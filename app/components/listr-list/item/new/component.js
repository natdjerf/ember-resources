import Ember from 'ember';

export default Ember.Component.extend({
  form: {},
  actions: {
    submit (item) {
      // item.set('list_id', this.get('list.id')) << this doesn't work because item is not an Ember object
      Ember.set(item, 'list', this.get('list'));
      this.sendAction('submit', this.get('form'));
    },
  },
});
