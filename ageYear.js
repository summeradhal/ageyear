var ageApp=angular.module('ageApp',[]);
ageApp.controller('ageController',function($scope){
	$scope.test = "hey it works!";

	$scope.age= function(){
		console.log($scope.ageInput)
		var yearBorn=2016-$scope.ageInput;
		
		// console.log(yearBorn);
	$scope.year=yearBorn;
	}
})
