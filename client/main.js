import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

Template.test.events({
  'click #js-astro-test'(event, instance) {
      const someText = instance.find('#js-text').value;
      insertWithAstroAPI.call({ someText });
  },
  'click #js-meteor-test'(event, instance) {
      const someText = instance.find('#js-text').value;
      insertWithMeteorAPI.call({ someText });
  },
});
