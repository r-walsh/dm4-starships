angular.module( "Starship" )
.controller( "homeCtrl", function( $scope, starshipService ) {
	// create a function that is called on Next Page button click
	// get characters on the next page.
	$scope.getCharacters = function() {
		starshipService
			.getCharacters()
			.then( function( characters ) {
				$scope.characters = characters.data.results;
			} )
			.catch( function( err ) {
				console.error( "Something broke: " + err );
			} );		
	}

	$scope.getStarships = function( starshipUrlList ) {
		starshipService
			.getStarships( starshipUrlList )
			.then( function( starships ) {
				$scope.starships = starships;
			} )
			.catch( function( err ) {
				console.error( err );
			} );
	}

	function init() {
		$scope.characters = [];
		$scope.starships = [];
		$scope.getCharacters();
	}
	init();

} );
