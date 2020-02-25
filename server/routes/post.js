const router = require('express').Router();
let Post = require('../models/post.model');

//Get all posts
router.route('/').get((req, res) => {
  let numPosts = req.query.count;

  Post.find().sort('-date').limit(Number(numPosts))
    .then(posts => res.json(posts))
    .catch(err => res.status(400).json('Error: ' + err));
});

//Create a new post
router.route('/add').post((req, res) => {
  const newPost = new Post(req.body);

  console.log(newPost);

  newPost.save()
    .then(() => res.json(newPost))
    .catch(err => res.status(400).json('Error: ' + err));
});

//Get single post
router.route('/:id').get((req, res) => {
  Post.findById(req.params.id)
    .then(post => res.json(post))
    .catch(err => res.status(400).json('Error: ' + err));
});

//Delete post
router.route('/:id').delete((req, res) => {
  Post.findByIdAndDelete(req.params.id)
    .then(post => res.json(post) )
    .catch(err => res.status(400).json('Error: ' + err));
});

//Update post
router.route('/:id/update').put((req, res) => {
  Post.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then(post => res.json(post))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;