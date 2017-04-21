angular.module('app')
.controller('DetailsController', function ($scope, post, username) {
  this.post = post.data;
  this.username = username;
});
