angular.module('app')
.factory('FetchFactory', function ($http) {
  const getPosts = () =>
  $http.get('/allPosts')
    .then(posts => posts)
    .catch((err) => { throw new Error(err); });

  const getUser = userId =>
  $http.get('/oneUser', { params: { userId } })
    .then(user => user)
    .catch((err) => { throw new Error(err); });

  const getPost = postId =>
  $http.get('/onePost', { params: { postId } })
    .then(post => post)
    .catch((err) => { throw new Error(err); });

  return {
    getPosts,
    getUser,
    getPost,
  };
});
