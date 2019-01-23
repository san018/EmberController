import Route from '@ember/routing/route';
import EmberObject,{computed} from '@ember/object';

let Person = EmberObject.extend({
  firstname: null,
  lastname : null,
    fullname : Ember.computed('firstname', 'lastname', function()
  {
  // let s = this.get('x') + this.get('y');
  // return s ;
  return `${this.get('firstname')} ${this.get('lastname')}`
}),
setName(key, value) {
      let [firstname, lastname] = value.split(' ');

      this.set('firstname', firstname);
      this.set('lastname', lastname);

      return value;
    }
});

let name = Person.create({
  firstname: 'William',
  lastname : 'Jones'
});
// console.log(name);
console.log(name.fullname);
name.set('firstname','David');
console.log(name.fullname);
name.setName('fullname','Steeve Smith');
// console.log(name.fullname);
console.log(name.firstname);
console.log(name.lastname);
export default Route.extend({
model ()
{
  return name;
}
})
