import { Mongo } from 'meteor/mongo';
import { Class } from 'meteor/jagi:astronomy';

Things = new Mongo.Collection('things');

Thing = Class.create({
  name: 'Thing',
  collection: Things,
  secured: true,
  fields: {
    someText: String,
  },
});
