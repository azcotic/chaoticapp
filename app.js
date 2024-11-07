var app = angular.module("chaoticApp", ["ionic", "Tek.progressBar"]);

app.config(function($stateProvider,$urlRouterProvider){
	$stateProvider

	.state('main',{
		url:'/main',
		templateUrl: 'main.html',
		controller: 'MainController'
	})
	.state('Select', {
		url:'/Select/:id',
		templateUrl: 'SelectCreature.html',
		controller: 'SelectController'
	})
	.state('Duel', {
		url:'/Duel',
		templateUrl: 'Duel.html',
		controller: 'DuelController'
	})
/* 	.state('Duel2', {
		url:'/Duel2',
		templateUrl: 'Duel2.html',
		controller: 'DuelController'
	}) */
	.state('CardDetail',{
		url:'CardDetail/:id/:index',
		templateUrl:'CardDetail.html',
		controller:'CardDetailController',
		resolve: {
         id: ['$stateParams', function ($stateParams) {
             return $stateParams.id;
         }],
         index: ['$stateParams', function ($stateParams) {
             return $stateParams.index;
         }]
     }
	})
	$urlRouterProvider.otherwise('/main');
});