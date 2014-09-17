angular.module('DemoAppRate.services', []).
  factory('taskListAPI', function($http, $cookies) {

    var taskListAPI = {};

    taskListAPI.getList = function(id) {
      return $http({
        method: 'GET', 
        url: 'http://www.w3schools.com/website/Customers_JSON.php'
      });
    }
  });
