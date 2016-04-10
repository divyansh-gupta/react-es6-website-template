import Schema from 'mongoose';
import ObjectId from 'Schema';
import moment from 'moment';

let User = new Schema({
  username: String,
  password: String,
  userId: ObjectId,
  email: { type: String },
  created: { type: Date, default: moment.utc().now() },
  facebook: { type: {}, default:  '' },
  twitter: { type: {}, default: '' },
  google: { type: {}, default: '' }
});

module.exports = User;
