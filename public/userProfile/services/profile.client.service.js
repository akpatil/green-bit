angular.module('moduleProfile').factory('serviceProfile', ['$resource', function($resource){
	return $resource('api/user/:userId', {
		userId: '@_id'
	}, {
		update: {
			method: 'PUT'
		}
	});
}]);