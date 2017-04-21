angular.module('app')
.controller('ProfileController', function ($scope, $window, user) {
  this.user = user.data;

  this.edit = {
    name: true,
    username: true,
  };
  this.nameChange = {
    name: this.user.name,
    username: this.user.username,
  };
});
