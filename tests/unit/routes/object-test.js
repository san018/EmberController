import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | object', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:object');
    assert.ok(route);
  });
});
