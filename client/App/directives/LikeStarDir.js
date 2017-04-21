angular.module('app')
.directive('likestar', function (LikeFactory) {
  return {
    restrict: 'E',
    scope: {
      postid: '@',
    },
    template:
      `<div
        class="glyphicon glyphicon-star greenStar"
        ng-show="checkIfLiked(postid)"
        ng-click="unlike(postid)"
      >
      </div>
      <div
        class="glyphicon glyphicon-star-empty"
        ng-hide="checkIfLiked(postid)"
        ng-click="like(postid)"
      >
      </div>`,
    link(scope) {
      scope.checkIfLiked = LikeFactory.checkIfLiked;
      scope.like = LikeFactory.like;
      scope.unlike = LikeFactory.unlike;
    },
  };
});
