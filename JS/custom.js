

var model ={
	user: "Dawid",
	items:[{action:"Kupic kwiaty", done:false ,date:'yyyy-MM-dd'},
			{action:"Pouczyc sie angielskiego",done:false ,date:'yyyy-MM-dd'},
			{action:"Pisać prace inzynierska",done:false,date:'yyyy-MM-dd'},
			{action:"Ogarnac praktyki",done:false, date:'yyyy-MM-dd'}]
	
			};

var todoApp= angular.module("todoApp",[]);

			
todoApp.filter("checkedItems",function(){
	return function (items , showComplete){
	var resultArr = [] ;
	angular.forEach(items ,function(item){
	if(item.done == false || showComplete == true){
	resultArr.push(item)}
	});
	return resultArr;}
	});

todoApp.controller( "ToDoCtrl", function($scope)
{
	$scope.todo = model;

	$scope.inCompliteCount = function(){
	var count=0;
	angular.forEach($scope.todo.items , function(item){
	if(!item.done){count++} });
	return count;}
	
	$scope.warningLevel = function(){
	return $scope.inCompliteCount() < 3 ? "label-success" : "label-warning" ;
	}	
	
	$scope.addNewItem = function(actionText) {
		$scope.todo.items.push({action : actionText , done: false , date:'yyyy-MM-dd' });
	}
	
	

});
			
