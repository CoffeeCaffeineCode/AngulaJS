angular
    .module('SpotifyCtrl', [])
    .controller('SpotifyController', function($scope, SpotifyService) {

        $scope.searchArtist = () => {
            SpotifyService.search.get({
                artistname: $scope.artistname
            }, (response) => {               
                $scope.results = response 
                console.log("result of search is", response,$scope.results)              
                $scope.searchview = true
                $scope.detailsview = false
            })
        }
        $scope.artistDetails = (artistid, artistimage, artistname) => {
            SpotifyService.details.get({
                id: artistid
            }, (response) => {                
                $scope.results = response
                if(artistimage){
                    $scope.image=artistimage
                }
                else{
                    $scope.image=null
                }                
                $scope.name=artistname                
                $scope.searchview = false
                $scope.detailsview = true
            })
        }
    })