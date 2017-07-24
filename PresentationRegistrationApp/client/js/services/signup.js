angular
    .module('SignupSrvc', ['ngResource'])
    .factory('SignupService', function($resource) {
        return $resource('./')
    })