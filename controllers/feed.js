const {validationResult} = require('express-validator');

const Post = require('../models/post');

exports.getPosts = (req, res, next) => {
  res
    .status(200)
    .json({
      posts: [
        {
          _id: '1',
          message: 'First Post',
          content: 'This is a dummy content',
          imageUrl: 'images/soup.jpg',
          creator: {
            name: 'Vzdrizhni'
          },
          createdAt: new Date()
        }
      ]
    })
}

exports.createPost = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty) {
    const error = new Error('Entered data is incorrect');
    error.statusCode = 422;
    throw error;
  }
  const title = req.body.title;
  const content = req.body.content;
  const post = new Post({
    title: title,
    content: content,
    imageUrl: 'images/soup.jpg',
    creator: {
      name: 'Vzdrizhni'
    }
  });
  post
    .save()
    .then(result => {
      res
        .status(201)
        .json({message: 'Post created', post: result})
    })
    .catch(err => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
}