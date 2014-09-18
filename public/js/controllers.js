angular.module('DemoAppRate.controllers', [])
  .controller('TaskController',['$scope',function($scope, $route, $routeParams){
    $scope.tasks = [];
    $scope.empty = false;
    $scope.name = '';
    $scope.description = '';
    $scope.id = null;
    $scope.form_action = "Create";

    $scope.create = function create(){
        if($scope.task.id !== undefined){
          $scope.tasks[$scope.task.id] = $scope.task
          $scope.task = {};
          alert("Updated successfully");
        }else{
          $scope.tasks.push($scope.task); 
          $scope.task = {};
          alert("Created successfully");
        }
        $scope.form_action = "Create";
    };

    $scope.editTask = function (index){
      $scope.task.name = $scope.tasks[index].name;
      $scope.task.description = $scope.tasks[index].description;
      $scope.task.id = index;
      $scope.form_action = "Update";
    };
    $scope.removeTask = function(index){
      $scope.tasks.splice(index, 1);
    };

  }]);
  