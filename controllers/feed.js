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
  const title = req.body.title;
  const content = req.body.content;
  console.log(req);
  res
    .status(201)
    .json({
      message: 'Post created',
      post: {
        _id: new Date().toISOString(),
        title: title,
        content: content,
        creator: {name: 'Vzdrizhni'},
        createdAt: new Date()
      }
    })
}