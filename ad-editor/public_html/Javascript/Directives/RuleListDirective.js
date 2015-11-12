var app = angular.module("RuleListDirective",["RuleCheckerService"]);

app.directive("ruleList",function() {
    return{
        restrict: 'A',
        templateUrl: 'Html/RuleList.html',
        controller: "ruleListController",
        controllerAs: "ruleListCtrl"
    };
});

app.controller("ruleListController", function(ruleCheckerService) {
    this.rules = ruleCheckerService.getRuleList();
});