import { Meteor } from 'meteor/meteor';
import { ValidatedMethod } from 'meteor/mdg:validated-method';

insertWithAstroAPI = new ValidatedMethod({
  name: 'insertWithAstroAPI',
  validate: null,
  run({ someText }) {
    this.unblock();

    const thing = new Thing({ someText });
    const id = thing.save();

    console.log('Id of Thing from Astro save()', id);

    return id;
  },
});

insertWithMeteorAPI = new ValidatedMethod({
  name: 'insertWithMeteorAPI',
  validate: null,
  run({ someText }) {
    this.unblock();

    const id = Things.insert({ someText });

    console.log('Id of Thing from Meteor save()', id);

    return id;
  },
});
