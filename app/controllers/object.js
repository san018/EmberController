import Controller from '@ember/controller';

export default Controller.extend({
actions: {
  //Action to change the values
  change()
  {
    let counter = 10;
    let m = this.get('model');
    for(var i=0;i<10;i++)
    {
      m[i].set('x', counter);
      m[i].set('y', counter+1);
      counter++;
      console.log(m[i]);
    }
  }
}
});
