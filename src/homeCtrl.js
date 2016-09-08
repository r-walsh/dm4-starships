angular.module( "Starships" )
.controller( "homeCtrl", function( $scope, starshipService ) {
	$scope.characters = [];
	$scope.starships = [];
	$scope.nextPage = "";

	starshipService
		.getCharacters()
		.then( function( characters ) {
			$scope.characters = characters.data.results;
			$scope.nextPage = characters.data.next;
		} );

	$scope.getNextPage = function() {
		starshipService
			.getNextPage( $scope.nextPage )
			.then( function( characters ) {
				$scope.characters = characters.data.results;
				$scope.nextPage = characters.data.next;
			} );
	}

	$scope.getCharacterStarships = function( starshipLinkArray ) {
		starshipService
			.getStarships( starshipLinkArray )
			.then( function( ships ) {
				$scope.starships = ships;
			} );
	}
} );
