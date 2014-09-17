angular.module('DemoAppRate.controllers', [])
  .controller('TaskController', function($scope, $route, $routeParams){
    $scope.tasks = {};
    $scope.empty = false;
    $scope.name = '';
    $scope.description = '';
    $scope.tasks = [
          {name:'Crete a form',description:'Allow a user to create a form.'},
          {name:'List form',description:'List all the forms Created.'},
          {name:'Edit form',description:'Edit a form data.'}
        ];

   $scope.create = function create(){
      $scope.tasks.push($scope.task); 
      alert("Created successfully!");
    };

    $scope.editTask = function(index){
      alert($scope.tasks[index].name);
      $scope.tasks.name = $scope.tasks[index].name;
      $scope.tasks.description = $scope.tasks[index].description;
      //alert(JSON.stringify($scope.task));
      //$scope.tasks.push($scope.task); 
      //alert("Created successfully!");
    };
  
    // $scope.addItem = function(item){
    //   $scope.items.push(item);
    //   $scope.newItem = null;
    // };

    $scope.removeTask = function(index){
      $scope.tasks.splice(index, 1);
    };

  });
  