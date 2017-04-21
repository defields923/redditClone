const express = require('express');
const rp = require('request-promise');

const router = express.Router();

router.get('/allPosts', (req, res) => {
  const results = {
    posts: null,
  };

  const postParams = {
    url: 'http://jsonplaceholder.typicode.com/posts',
    method: 'GET',
  };
  const userParams = {
    url: 'http://jsonplaceholder.typicode.com/users',
    method: 'GET',
  };
  rp(postParams)
    .then((results1) => {
      results.posts = results1;
      return rp(userParams);
    })
    .then((users) => {
      const tempUsers = JSON.parse(users).reduce((memo, obj) => {
        memo[obj.id] = memo[obj.id] || obj.username;
        return memo;
      }, {});

      const updated = JSON.parse(results.posts).map((post) => {
        post.username = tempUsers[post.userId];
        return post;
      });
      res.send(JSON.stringify(updated));
    })
    .catch(err => console.error('ERROR: ', err));
});

router.get('/oneUser', (req, res) => {
  let user = null;

  const userParams = {
    url: `http://jsonplaceholder.typicode.com/users/${req.query.userId}`,
    method: 'GET',
  };
  const postParams = {
    url: `http://jsonplaceholder.typicode.com/posts?userId=${req.query.userId}`,
    method: 'GET',
  };
  rp(userParams)
    .then((userResult) => {
      user = JSON.parse(userResult);
      return rp(postParams);
    })
    .then((postResult) => {
      user.posts = JSON.parse(postResult);
      res.send(JSON.stringify(user));
    })
    .catch(err => console.error('ERROR: ', err));
});

router.get('/onePost', (req, res) => {
  let post = null;

  const postParams = {
    url: `http://jsonplaceholder.typicode.com/posts/${req.query.postId}`,
    method: 'GET',
  };
  const commentParams = {
    url: `http://jsonplaceholder.typicode.com/comments?postId=${req.query.postId}`,
    method: 'GET',
  };
  rp(postParams)
    .then((postResult) => {
      post = JSON.parse(postResult);
      return rp(commentParams);
    })
    .then((commentResult) => {
      post.comments = JSON.parse(commentResult);
      res.send(JSON.stringify(post));
    })
    .catch(err => console.error('ERROR: ', err));
});

router.put('/changeName', (req, res) => {
  const nameParams = {
    url: `http://jsonplaceholder.typicode.com/users?${req.body.prop}=${req.body.name}`,
    method: 'PUT',
    data: {
      [req.body.prop]: req.query.newName,
    },
  };
  rp(nameParams)
    .then(() => {
      res.sendStatus(200);
    })
    .catch((err) => {
      res.send(err);
    });
});

module.exports = router;
