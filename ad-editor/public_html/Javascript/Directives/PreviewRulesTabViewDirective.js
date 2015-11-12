
var app = angular.module("PreviewRulesTabViewDirective", ["PreviewComponentsDirective", "ApproveController", "RuleListDirective", "NumberComponentsSpecificationDirective"]);

app.directive('previewRulesTabView',function(){
    return{
        restrict: 'A',
        templateUrl: 'Html/PreviewRulesTabView.html',
        controller: "panelController",
        controllerAs: "panelCtrl"
    };
});

app.controller('panelController', function() {
    this.tab = 1;
    this.selectTab = function(newTab) {
        this.tab = newTab;
    };
    this.isSelected = function(checkTab) {
        return this.tab === checkTab;
    };
});