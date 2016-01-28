var mainApplicationModuleName = 'greenBit';

var mainApplicationModule = angular.module(mainApplicationModuleName, ['ngRoute', 'ngResource', 'user']);

mainApplicationModule.config(['$locationProvider', function($locationProvider){
	$locationProvider.hashPrefix('!');
}]);

if(window.location.hash === '') window.location.hash = '#!/';

angular.element(document).ready(function(){
	angular.bootstrap(document, [mainApplicationModuleName]);
});