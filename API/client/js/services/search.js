angular.module('SpotifySrvc', [])
    .factory('SpotifyService', function($resource) {
        return {
            search: $resource('/api/search'),
            details: $resource('/api/details')           
        }
       
    })