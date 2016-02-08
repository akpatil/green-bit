angular.module('Article').config(['$routeProvider', function($routeProvider){
	$routeProvider

	.when('/article/create', {
		templateUrl: '/Articles/views/create-article.client.view.html'
	})

	.when('/article', {
		templateUrl: '/Articles/views/list-article.client.view.html'
	})

	.when('/article/:articleId', {
		templateUrl: '/Articles/views/view-article.client.view.html'
	})

	.when('/article/:articleId/edit', {
		templateUrl: '/Articles/views/edit-article.client.view.html'
	})

	.when('/article/edit', {
		templateUrl: '/Articles/views/edit-article.client.view.html'
	})

	.when('/articles', {
		templateUrl: '/Articles/views/user-article.client.view.html'
	})
}]);