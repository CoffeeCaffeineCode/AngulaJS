angular
    .module('FactCtrl', [])
    .controller('FactController', function($scope, FactService) {

        $scope.getMathFact = () => {
            FactService.get({
                type: 'math',
                number: $scope.number,
            }, (response) => {
                $scope.fact = response
            })
        }
        $scope.getTriviaFact = () => {
            FactService.get({
                type: 'trivia',
                number: $scope.number,
            }, (response) =>{
                $scope.fact = response
            })
        }
        $scope.getDateFact = () => {
            FactService.get({
                type: 'date',
                number: $scope.number,
            }, (response) => {
                $scope.fact = response
            })
        }
        $scope.getRandomFact = () => {
            const randType = Math.floor((Math.random() *3) + 1)
            let t , randNum
            let temprand = 3
            switch (randType){
                case 1: 
                    t = 'math'
                    randNum = Math.floor((Math.random() *100) + 1)
                    break;
                case 2:
                    t = 'trivia'
                    randNum = Math.floor((Math.random() *100) + 1)
                    break;
                case 3:{
                    t = 'date'
                    const month = Math.floor((Math.random() *12) + 1)
                    if(month == 1 || 3 ||5 || 7 || 8 ||10 ||12){
                        const day = Math.floor((Math.random() *31) + 1)
                        randNum = month + '/' + day
                    }
                    else if(month == 4||6||9||11){
                        const day = Math.floor((Math.random() *30) + 1)
                        randNum = month + '/' + day
                    }
                    else{
                        const day = Math.floor((Math.random() *29) + 1)
                        randNum = month + '/' + day
                    }
                    break;
                }
            }
            FactService.get({
                type: t ,
                number: randNum ,
            }, (response) => {
                $scope.fact = response
            })
        }
    })