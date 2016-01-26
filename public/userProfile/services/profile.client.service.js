angular.module('moduleProfile').factory('serviceProfile', ['$resource', function($resource){
	return $resource('api/profile/:profileId', {
		profileId: '@_id'
	}, {
		update: {
			method: 'PUT'
		}
	});
}]);