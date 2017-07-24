angular
    .module('MainSrvc', ['ngResource'])
    .factory('MainService', function($resource) {
        return $resource('./')
    })

