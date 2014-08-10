'use strice';


//Firebase Util for providing sync
app.service('FirebaseUtil', ['$firebase', 
	function($firebase){
		return {
			getSync : function(){
				var ref = new Firebase('https://blistering-fire-4081.firebaseio.com/vote/');
				var sync = $firebase(ref);
				return sync;
			}
		}
	}
])