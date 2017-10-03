var openMeals = angular.module('openMeals',[]);

openMeals.controller('topBar-con',['$scope',function($scope){
  $scope.title = "OpenMeals";
  var today = new Date();
  $scope.date = today.getFullYear()+'/'+(today.getMonth()+1)+'/'+today.getDate();


  $scope.openMenu = function() {
    document.getElementById("in-top-settings").classList.remove('no-displayed');
    document.getElementById("in-top-settings").classList.add('displayed');
  }
  $scope.closeMenu = function(){
    document.getElementById("in-top-settings").classList.remove('displayed');
    document.getElementById("in-top-settings").classList.add('no-displayed');
  }

}]);

openMeals.controller('in-wrapper',['$scope',function($scope){

  var ingredient1 = {
    "name" : "softened butter",
    "qty" : 0.25,
    "unit" : "cups"
  }

  $scope.recipe1 = {
    "name" : "Smoked Salmon Dill Eggs Benedict",
    "time" : 20,
    "servings" : 2,
    "calories" : 528,
    "ingredients" : [
      ingredient1,
    ]
  }


}]);
