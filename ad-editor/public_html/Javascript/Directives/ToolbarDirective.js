var app = angular.module("ToolbarDirective",["ComponentsService", "RuleCheckerService", "CreateRulesDirective", "Filter"]);

app.directive("toolbar",function() {
    return{
        restrict: 'A',
        templateUrl: 'Html/Toolbar.html',
        controller: "toolbarController",
        controllerAs: "toolbarCtrl"
    };
});

app.controller("toolbarController", function(componentsService, ruleCheckerService) {
    var components = componentsService.getComponents();
    
    var orderOfComponents = componentsService.getOrderOfComponents();
    
    var availableComponents = componentsService.getAvailableComponents();
    this.availableComponents = availableComponents;
    this.component = this.availableComponents.dateOfBirth;
        
        
    this.getComponents = function() {
        return components;
    };
    
    this.getOrderOfComponents = function() {
        return orderOfComponents;
    };
        
    this.addComponent = function() {
        componentsService.addComponent(this.component.type, this.component.defaultValue[0], this.component.defaultValue[1], false, true, 0, 3);
        moveNewComponentToValidPosition();
    };
    
    var moveNewComponentToValidPosition = function() {
        var newComponent = components[components.length-1];
        var newPosition = components.length-2;
        while(!ruleCheckerService.checkRules()) {
            if (newPosition >= 0) {
                componentsService.changeOrderBy("currentOrder", newComponent, newPosition);
                newPosition -= 1;
            } else {
                removeLastAddedComponent();
                alert("There is no valid position for the component of type " + newComponent.type + ".");
                break;
            }
        }
    };
    
    var removeLastAddedComponent = function() {
        components.pop();
        orderOfComponents.pop();
    };
});