angular.module('app')
.controller('DetailsController', function ($scope, $stateParams, post) {
  this.post = post.data;
  this.username = $stateParams.username;
});
