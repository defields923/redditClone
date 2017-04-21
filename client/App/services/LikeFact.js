angular.module('app')
.factory('LikeFactory', function () {
  // In real scenario, this object would get pulled down with api call and updated
  // as the user likes and unlikes posts, this will serve as a temp work-around
  const likedPosts = {};

  return {
    checkIfLiked: key => likedPosts[key],
    like: (key) => {
      likedPosts[key] = 1;
    },
    unlike: key => delete likedPosts[key],
  };
});
