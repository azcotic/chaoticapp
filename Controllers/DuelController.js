app.controller("DuelController",  function($stateParams,cardService, $scope,$state,PlayersInfo){
		//console.log(cards.data);
		var data = PlayersInfo.setData();
		console.log(data);
		//console.log(data[1].creatureid);
		cardService.getCard(data[1].creatureid).then(function(cards){
			console.log($scope.card1=cards.data[data[0].creatureid]);
			$scope.card1.EnergyMax = $scope.card1.Energy;
			$scope.card1.Energypercent = 100;
			console.log($scope.card2=cards.data[data[1].creatureid]); 
			$scope.card2.EnergyMax = $scope.card2.Energy;
			$scope.card2.Energypercent = 100;
			
		});
		$scope.decreaseEnergy = function(card){
			var damage = 5; 
			//console.log("La energía actual antes del daño es: "+$scope.card1.Energy );
			card.Energy = card.Energy - damage; 
			//console.log("La energía actual despues del daño es: "+$scope.card1.Energy );
			//console.log("La energía porcentual antes de la regla de tres es: "+$scope.card1.Energypercent );
			card.Energypercent = (100*card.Energy)/card.EnergyMax;
			//console.log("La energía en porcentaje es: "+$scope.card1.Energypercent+" La energía después del daño en el cálculo fue : "+$scope.card1.Energy+" La energía máxima de la criatura es: "+$scope.card1.EnergyMax );
		}
		$scope.addingEnergy = function(card){
			var heal = 5; 
			card.Energy = card.Energy + heal;
			card.Energypercent = (100*card.Energy)/card.EnergyMax;
		}
});