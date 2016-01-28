angular.module('user').factory('Users', ['$resource', function($resource){
	return $resource('api/user/:userId', {
		userId: '@_id'
	}, {
		update: {
			method: 'PUT'
		}
	});
}]);