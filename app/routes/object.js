import Route from '@ember/routing/route';
import EmberObject, { computed } from '@ember/object';

//Defines Class
let Number = Ember.Object.extend({
  x : null ,
  y: null,
  sum : Ember.computed('x', 'y', function()
  {
  let s = this.get('x') + this.get('y');
  return s ;
  })
})
let obj = [];

//Creates array of objects
for(var i=0;i<10;i++)
{
let a = Number.create({
  x : i,
  y : i+1
});
obj.push(a);
}


export default Route.extend({
model ()
{
  return obj;
}
});
