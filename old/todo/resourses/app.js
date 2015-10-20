var todoApp = angular.module('todoApp',['LocalStorageModule']);
todoApp.controller('todoCtlr',['$scope','$timeout','localStorageService',function($scope,$timeout,localStorageService){

	var value = localStorageService.get('todos');
	$scope.todos = [];
	$scope.todoObj = [];
	if(value){
		$scope.todos = value
	}
	$scope.send = function(){
		if($scope.todoTitle.length != 0){
			$scope.todos.push({title:$scope.todoTitle,time:($scope.todoTime*60),currTime:0,alarm:$scope.todoAlarm,active:false});
			updateStorage('todos',$scope.todos);
		}
	}
	$scope.invoke = function(i){
		if($scope.todoObj[i]){
			$scope.todos[i]['active'] = true;
		}else{
			$scope.todos[i]['active'] = false;
		}
	}
	var countDown = function() {
		if($scope.todos.length != 0){
			for (var i = 0; i <  $scope.todos.length; i++) {
				if(!$scope.todos[i]['active']){
					if($scope.todos[i]['time'] != 0 ){
						$scope.todos[i]['time'] -= 1;
						date = new Date(null, null, null, 0, 0, $scope.todos[i]['time']);
						if($scope.todos[i]['time']==0){
							if($scope.todos[i]['alarm']){
								playSound();
							}
							$scope.todos[i]['currTime'] = "Done";
						}else{
							current = "";
							if(date.getHours() != 0 ) current += date.getHours() + ":";
							if(date.getMinutes() != 0 ) current += date.getMinutes() + ":";
							if(date.getSeconds() != 0 ) current += date.getSeconds();
							$scope.todos[i]['currTime'] = current; 
						}
					}
				}
			};
			updateStorage('todos',$scope.todos);

		}
        $timeout(countDown, 1000);
    }
	$timeout(countDown, 1000);
	var updateStorage = function(key,value){
		localStorageService.set(key,value);
		$scope.countTodo = value.length;
	}
	$scope.clear = function(){
		// alert(0)
		localStorageService.clearAll();
		location.reload();
	}
	$scope.removeTodo = function(i){
		$scope.todos.splice(i,1);
		updateStorage('todos',$scope.todos);

	}
}])
function playSound() {
	  document.getElementById("dummy").innerHTML=
    	"<embed src='resourses/alarm.mp3' hidden=\"true\" autostart=\"true\" loop=\"false\" />";
}