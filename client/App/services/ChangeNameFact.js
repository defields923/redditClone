angular.module('app')
.factory('ChangeNameFactory', function ($http) {
  const changeName = (prop, currName, newName) =>
  $http.put('/changeName', {
    prop,
    currName,
    newName,
  })
    .then(() => 'A-OK')
    .catch((err) => { throw new Error(err); });

  return {
    changeName,
  };
});
