app = angular.module("ReadFileService",["ComponentsService", "RuleCheckerService"]);

app.service("readFileService", function($http, componentsService, ruleCheckerService) {
    
    this.readFieldsToComponents = function(filePath) {
        $http.get(filePath).then(function(results){
            for(var i=0; i<results.data.components.length; i++) {
                var field = results.data.components[i];
                componentsService.addComponent(field);
            }
        }, function(results){
            console.log("Error: " + results.data + "; " + results.status);
        });
    };
    
    this.loadRulesAndComponentsFromString= function(string){
        componentsService.resetComponents();
        ruleCheckerService.resetRules();
        var fieldsAndRules = JSON.parse(string);
        componentsService.setAvailableComponentsNumbersDuringLoading(fieldsAndRules.availableComponents);
        for(var i = 0; i< fieldsAndRules.components.length; i++) {
            var object = fieldsAndRules.components[i];
            var isGeneratedFromTemplate = true;
            componentsService.addComponent(object.type, object.valueOne, object.valueTwo, isGeneratedFromTemplate, object.active, object.font, object.fontSize);
        }
        for(var i = 0; i< fieldsAndRules.rules.length;i++) {
            var object = fieldsAndRules.rules[i];
            var linearizedComponents = componentsService.getLinearizedComponents();
            var componentA = linearizedComponents[object.componentIndexA];
            var componentB = linearizedComponents[object.componentIndexB];
            var position = object.position;
            ruleCheckerService.createRule(object.type, componentA, componentB, position);
        }
    };

});


