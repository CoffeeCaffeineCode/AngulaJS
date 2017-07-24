angular
	.module('app',['ngRoute','ngResource', 'SignupCtrl', 'SignupSrvc','MainCtrl','MainSrvc'])
	.config(['$locationProvider',function($locationProvider){
		$locationProvider.hashPrefix('')
	}])
	.config(['$routeProvider','$locationProvider',function($routeProvider, $locationProvider){
		$routeProvider
			.when('/',{
				templateUrl: 'client/views/main.html',
				controller:'MainController'
			})
				.when('/signup',{
				templateUrl: 'client/views/signup.html',
				controller: 'SignupController'
			})
			/*.otherwise({
                redirectTo: '/'
            })*/
	}])