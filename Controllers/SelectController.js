app.controller("SelectController", function($stateParams,cardService, $scope,$state){
	console.log($stateParams.id);
	$scope.idplayer =$stateParams.id;
	var flag=0;
	
	if(flag==0){
		cardService.getCards().then(function(cards){
			$scope.cards = cards.data;
			var flag=1;
			//console.log(cards.data);
		})
	}else{
		$scope.cards = cards.data;
	}
});

app.controller("CardDetailController", function($scope, $stateParams, cardService,PlayersInfo){
	var index = $stateParams.index;
	var idplayer = $stateParams.id;
	$scope.idplayer = idplayer;
	$scope.indexcreature = index;
	console.log("El id de la criatura antes de dar click es: "+index);
	//console.log(cardService.getCard(index));
	cardService.getCard(index).then(function(cards){
	console.log($scope.cards=cards.data[index]);	
	});
	$scope.selectedCard = function(id,name,img,idcreature){
		console.log("El id de la criatura es: "+ idcreature);
		PlayersInfo.addCreature(id,name,img,idcreature);
		return index
	};


});
app.factory('PlayersInfo',function(){
	var playersData = [{
		'id':0,
		'playername':'Player1',
		'creature':'',
		'creatureid':'',
		'img':'cardback'
		},{
		'id':1,
		'playername':'Player2',
		'creature':'',
		'creatureid':'',
		'img':'cardback'
	}];

	playersData.setData = function(){
		return playersData;
	}
	playersData.addCreature = function(idplayer,creature,img,idcreature){
		console.log(idplayer,creature);
    	playersData[idplayer].creature = creature;
    	playersData[idplayer].img = img;
    	playersData[idplayer].creatureid = idcreature;
  };
	return playersData
});


app.factory('cardService', function($http) {
    var promise;
    var cards = {
        getCards: function() {
            if ( !promise ) {
                var promise =  $http.get('src/DoP-Creatures.json').success(function(response) {
                    console.log("Cards load complete");
                    return response.data;
                });
                return promise;
            }
        },
        getCard: function(index){
        	if ( !promise ) {
                var promise =  $http.get('src/DoP-Creatures.json').success(function(response) {
                    console.log("One Card load complete");
                    return response[index];
                });
                return promise;
            }
        }
    };
    return cards;
});