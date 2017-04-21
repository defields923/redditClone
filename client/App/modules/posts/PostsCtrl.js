angular.module('app')
.controller('PostsController', function ($scope, posts) {
  this.posts = posts.data;
});
