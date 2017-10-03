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

  /*var meal1 = {
    breakfast: "Ham & Eggs",
    breakfastUrl : "http://allrecipes.com/recipe/77237/baked-omelet-squares/?internalSource=hub%20recipe&referringContentType=search%20results&clickId=cardslot%2016",
    lunch: "Roast Beef Sandwich",
    dinner: "Banana youghurt"
  }

  var meal2 = {
    breakfast: "Parma Sandwich",
    lunch: "Pesto Raviolli",
    dinner: "Cereal"
  }

  var meal3 = {
    breakfast: "Bacon Pancakes",
    lunch: "Ultra Salad",
    dinner: "Megaman Pie"
  }


    $scope.mealList = [meal1,meal2,meal3];
    */

  var ingredient1 = {
    "name" : "softened butter",
    "qyt" : 0.25,
    "unit" : "cups"
  }

  var recipe1 = {
    "name" : "Smoked Salmon Dill Eggs Benedict",
    "time" : 20,
    "servings" : 2,
    "calories" : 528,
    "ingredients" : [
      ingredient1,
    ]
  }


}]);
