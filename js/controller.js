'use strice';



app.controller('VoteViewController', ['$scope', 'FirebaseUtil', 
	function($scope, FirebaseUtil){
		var sync = FirebaseUtil.getSync();

		$scope.data = sync.$asArray();

		$scope.percentage = function(filtered) {
			var perc = filtered.length / $scope.data.length * 100;

			return perc.toFixed(2);
		}
	}	
])

//vote page
app.controller('VoteController', ['$scope', 'FirebaseUtil', 
	function($scope, FirebaseUtil) {
		
			
		$scope.vote = function(opinion) {
			var sync = FirebaseUtil.getSync();		
			$scope.opinions = sync.$asArray();

			$scope.opinions.$add( {
				opinion : opinion,
				comment : $scope.comment
			})
			$scope.comment = "";
		}
	}
])



// app.controller("voteController", ["$scope", "$firebase",
//   function($scope, $firebase) {
//     var ref = new Firebase("https://blistering-fire-4081.firebaseio.com/vote/");

//     // create an AngularFire reference to the data
//     var sync = $firebase(ref);

//     // download the data into a local object
//     $scope.data = sync.$asObject();
//   }
// ]);