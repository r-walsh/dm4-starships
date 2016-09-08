angular.module( "Starship" )
.service( "starshipService", function( $http, $q ) {
	var baseUrl = "http://swapi.co/api/";
	var nextPage = "";

	this.getStarships = function( starshipUrlList ) {
		// $q.defer() - Creates the promise.
		var deferred = $q.defer();
		var starships = [];
		starshipUrlList.forEach( function( url ) {
			$http.get( url ).then( function( starship ) {
				starships.push( starship.data );

				if ( starships.length === starshipUrlList.length ) {
					debugger;
					// .resolve( data ) - All data is back. call .then() 
					deferred.resolve( starships );
				}
			} )
			.catch( function( err ) {
				// .reject( error ) - We got an error, call .catch()
				deferred.reject( err );
			} );
		} );

		// returning the PROMISE NOT THE DATA.
		return deferred.promise;
	}

	this.getCharacters = function() {
		if ( nextPage ) {
			return $http.get( nextPage ).then( saveNextPage );
		}

		return $http.get( baseUrl + "people" ).then( saveNextPage );

	}

	function saveNextPage( result ) {
		nextPage = result.data.next;
		console.log( result.data );
		return result;
	}
} );
