//configuration
var app = angular.module("toDo", ['ngRoute']);
app.run(function(){
	console.log('angular running');
});

//route config

angular.module("toDo").config(function($routeProvider, $locationProvider){
	$routeProvider
		.when("/", {
			controller: "TodoController",
			templateUrl: "/templates/todo.html"
		});
	$locationProvider.html5Mode(true);
});


//controller

angular.module("toDo").controller("TodoController", function($scope, TodoFactory){
	$scope.todos = TodoFactory.getToDos();
	$scope.newTodo = {
		task: '',
		checked: false
	};

	$scope.add = function() {
		var newTodo = $scope.newTodo;
		$scope.todos.push(newTodo);
		$scope.newTodo = {
			task: '',
			checked: false
		}
	};

	$scope.completeTodo = function(todo) {
		todo.checked = true;
	};
});

// factory

angular.module("toDo").factory("TodoFactory", function() {
	var self = {};

	self.getToDos = function() {
		var todos = [{
			task: "Teach First Friday's session",
			checked: false
		},
		{
			task: "Release Legoland to NxJ",
			checked: false
		}];
		return todos;
	};

	return self;
});