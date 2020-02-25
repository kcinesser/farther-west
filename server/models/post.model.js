const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
  title: { type: String, required: true },
  excerpt: { type: String, required: true },
  body: { type: String, required: true },
  // featuredImage: { type: Schema.Types.ObjectId, ref: 'Upload' },
  featuredImage: { type: String, default: 'https://farther-west.s3.us-east-2.amazonaws.com/assets/post-default.jpg' },
  date: { type: Date, default: Date.now },
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;