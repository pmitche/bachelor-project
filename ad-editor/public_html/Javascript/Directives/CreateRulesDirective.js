var app = angular.module("CreateRulesDirective",["RuleCheckerService","ComponentsService"]);

app.directive("createRulesForm",function() {
    return{
        restrict: 'A',
        templateUrl: 'Html/CreateRuleForm.html',
        controller: "createRulesFormController",
        controllerAs: "createRulesFormCtrl"
    };
});

app.controller("createRulesFormController", function(componentsService, ruleCheckerService) {
    this.rules = ruleCheckerService.getAvailableRules();
    this.rule = this.rules.aAtPosition;
   
    this.components = componentsService.getLinearizedComponents();
    this.componentA = this.components[0];
    this.componentB = this.components[0];
    this.number = 0;
    
    this.showSecondComponent = false;
    this.showNumber = true;
  
    
    this.showAdditional = function(){
        switch (this.rule.additional) {
            case "twoComponents":
                this.setVisibilitiesSecondComponentNumber(true, false);
                break;
            case "number":
                this.setVisibilitiesSecondComponentNumber(false, true);
                break;
            default:
                this.setVisibilitiesSecondComponentNumber(false, false);
                break;
        }
    };
    
    this.setVisibilitiesSecondComponentNumber = function(secondComponent, number) {
        this.showSecondComponent = secondComponent;
        this.showNumber = number;
    };
    
    this.createRule = function(){
        ruleCheckerService.createRule(this.rule.type, this.componentA, this.componentB, this.number);
    };
    
    this.printRules = function() {
        var rules = ruleCheckerService.getRuleList();
        for (var rule=0; rule < rules.length; rule++) {
            console.log(rules[rule]);
            console.log("Rule " + rules[rule].type);
            console.log("Component A: " + rules[rule].componentA.type);
            if (rules[rule].componentB) {
                console.log("Component B: " + rules[rule].componentB.type);
            }
            console.log(rules[rule].checkRule(componentsService.getOrderOfComponents()));
        };
    };
    

    this.manipulateComponent = this.components[0];
    this.newPosition = 0;
    
    this.checkOrderManipulation = function(){
        console.log(ruleCheckerService.checkManupulationOfComponentsList(this.manipulateComponent, this.newPosition));
    };
});