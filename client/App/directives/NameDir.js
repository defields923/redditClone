angular.module('app')
.directive('namedir', function (ChangeNameFactory) {
  return {
    restrict: 'E',
    scope: {
      k: '@',
      user: '=',
      name: '=',
      nameChange: '=',
    },
    template:
      `<h2 ng-show="name[k]">{{ nameChange[k] }}</h2>
      <input ng-hide="name[k]" ng-model="nameChange[k]"/>
      <button
        ng-show="name[k]"
        class="btn"
        ng-click="flipEdit(k)"
      >
        Change {{ k }}
      </button>
      <button
        ng-hide="name[k]"
        class="btn btn-primary"
        ng-click="submitEdit(k, nameChange[k])"
      >
        Change {{ k }}
      </button>`,
    link(scope) {
      scope.flipEdit = (k) => {
        scope.name[k] = !scope.name[k];
      };

      // Because of the resolve function in the routes, navigating back to home
      // would reflect any changes made to the name or username here, but that
      // change is not apparent in this exercise due to the lack of real database changes
      scope.submitEdit = (k, newName) => {
        scope.name[k] = !scope.name[k];
        if (scope.user[k] !== newName) {
          if (ChangeNameFactory.changeName(k, scope.user[k], newName) === 200) {
            scope.user[k] = scope.nameChange[k];
          }
        }
      };
    },
  };
});
