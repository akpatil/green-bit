angular.module('Article').factory('Articles', ['$resource', function($resource){
	return $resource('api/article/:articleId', {
		articleId: '@_id'
	}, {
		update: {
			method: 'PUT'
		}
	});
}]);