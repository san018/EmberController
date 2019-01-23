import Route from '@ember/routing/route';
import EmberObject, { computed } from '@ember/object';

let Number = EmberObject.extend({
  x : 1,
  y : 2,
  sum : Ember.computed('x', 'y', function()
  {
  let s = this.get('x') + this.get('y');
  return s ;
  })
});

let a = Number.create({
  x: 1,
  y: 2
});
console.log(a);

a.y = 6;
console.log(a.y);

//console.log(obj);
export default Route.extend({
model ()
{
  return a;
}
});
