angular.module( "Starships" )
.service( "starshipService", function( $http, $q ) {
	var baseUrl = "http://swapi.co/api/";

	this.getCharacters = function() {
		return $http.get( baseUrl + "people" );
	}

	this.getNextPage = function( url ) {
		return $http.get( url );
	}

	this.getStarships = function( starshipLinkArray ) {
		var deferred = $q.defer();
		var starships = [];

		starshipLinkArray.forEach( function( link ) {
			$http.get( link ).then( function( ship ) {
				starships.push( ship.data );
				if ( starships.length === starshipLinkArray.length ) {
					deferred.resolve( starships );
				}
			} );
		} );

		return deferred.promise;
	}
} );
