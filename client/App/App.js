angular.module('app', ['ui.router', 'ngResource'])
.config(function ($locationProvider, $stateProvider, $urlRouterProvider) {
  $locationProvider.html5Mode(true);

  $urlRouterProvider.otherwise('/posts');

  $stateProvider
    .state('nav', {
      templateUrl: 'App/modules/nav/nav.html',
      controller: 'NavController as nav',
      abstract: true,
    })
    .state('nav.posts', {
      url: '/posts',
      views: {
        pageContent: {
          templateUrl: 'App/modules/posts/posts.html',
          controller: 'PostsController as posts',
        },
      },
      resolve: {
        posts(FetchFactory) {
          return FetchFactory.getPosts();
        },
      },
    })
    .state('nav.details', {
      url: '/details/:username/:id',
      views: {
        pageContent: {
          templateUrl: 'App/modules/details/details.html',
          controller: 'DetailsController as details',
        },
      },
      resolve: {
        post(FetchFactory, $stateParams) {
          return FetchFactory.getPost($stateParams.id);
        },
      },
    })
    .state('nav.profile', {
      url: '/profile/:id',
      views: {
        pageContent: {
          templateUrl: 'App/modules/profile/profile.html',
          controller: 'ProfileController as profile',
        },
      },
      resolve: {
        user(FetchFactory, $stateParams) {
          return FetchFactory.getUser($stateParams.id);
        },
      },
    });
})
.run(function () {

});
