const app = angular.module('app',[]);

app.controller('nameOfController',['$scope', function($scope){
  $scope.change = function(str){
    $scope.info = str.toUpperCase();
  }
}]);


app.controller('otherController', [function(){
  this.info = "hello jupiter";
}]);


app.component('comp',{
  controller: function(){
    this.info = 'hello pluto';
    this.change = function(str){
      this.info = str.toUpperCase();
    }
  },
  template:`<div>
      {{ $ctrl.info }}
      <button ng-click="$ctrl.change($ctrl.info)">Magic!</button>
    </div>`
})
