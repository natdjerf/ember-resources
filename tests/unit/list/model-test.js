import { moduleForModel, test } from 'ember-qunit';

moduleForModel('list', 'Unit | Model | list', {
  // Specify the other units that are required for this test.
  needs: ['model:item']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
