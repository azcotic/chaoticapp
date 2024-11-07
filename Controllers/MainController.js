app.controller("MainController", function($scope,PlayersInfo,cardService){
	console.log("Main Controller Says: Hello World");
	var data = PlayersInfo.setData();
	console.log(data); 
	$scope.players = data;

	$scope.startDuel = function(){
		console.log($scope.players[0].creature + " vs "+$scope.players[1].creature)
	}
	$scope.splash = true;
	$scope.removeSplash = function(){
		$scope.splash = false;
	}

});