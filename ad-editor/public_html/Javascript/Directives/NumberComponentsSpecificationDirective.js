
var app = angular.module("NumberComponentsSpecificationDirective",["ComponentsService"]);

app.directive("numberComponentsSpecification",function() {
    return{
        restrict: 'A',
        templateUrl: 'Html/NumberComponentsSpecification.html',
        controller: "numberComponentsSpecificationController",
        controllerAs: "numberComponentsSpecificationCtrl"
    };
});

app.controller("numberComponentsSpecificationController", function(componentsService) {
    this.availableComponents = componentsService.getAvailableComponents();
});