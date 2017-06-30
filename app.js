var app = angular.module('calculatorApp',[]);
app.controller('CalculatorCtrl', CalculatorCtrl);

function CalculatorCtrl($scope) {
 $scope.display = "";
 $scope.ans = 0;
 $scope.reset = false;
 $scope

$scope.math = function(val) {
     $scope.display += val;
 };

$scope.clear = function(val) {
     $scope.display = "";
 };

$scope.CE = function(val) {
     var backSpaceVar = $scope.display;
     $scope.display = backSpaceVar.slice(0, backSpaceVar.length - 1);
 };


$scope.e = function() {
         $scope.display = eval($scope.display);
 };
reset = true;

}
