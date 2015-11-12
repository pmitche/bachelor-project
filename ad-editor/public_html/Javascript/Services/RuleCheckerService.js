

var app = angular.module("RuleCheckerService", ["ComponentsService", "StringService"]);


app.service("ruleCheckerService",function(componentsService, stringService){
    
    var availableRules = {aAtPosition:{type: "aAtPosition", description: stringService.getNorwegianString("A at position X"), additional: "number"},
        aNotAtPosition:{type: "aNotAtPosition", description: stringService.getNorwegianString("A not at position X"), additional: "number"},
        aBeforeB:{type: "aBeforeB", description: stringService.getNorwegianString("A before B"), additional: "twoComponents"},
        aIsDirectlyBeforeB:{type: "aIsDirectlyBeforeB", description: stringService.getNorwegianString("A is directly before B"), additional: "twoComponents"},
        aNotDirectlyBeforeB:{type: "aNotDirectlyBeforeB", description: stringService.getNorwegianString("A is not directly before B"), additional: "twoComponents"},
        aIsBottom:{type: "aIsBottom", description: stringService.getNorwegianString("A is at the bottom"), additional: "none"},
        aNotBottom:{type: "aNotBottom", description: stringService.getNorwegianString("A is not at the bottom"), additional: "none"}
    };
    
    this.getAvailableRules = function() {
        return availableRules;
    };
    
    var ruleList = Array();   
    
    this.getRuleList = function(){
        return ruleList;
    };
    
    this.checkRules = function() {
        return checkRules(componentsService.getOrderOfComponents());
    };
    
    var checkRules = function(orderOfComponents) {
        for(var rule = 0; rule < ruleList.length; rule++){
            if (ruleList[rule].checkRule(orderOfComponents) === false) {
                return false;
            }
        };
        return true;
    };

    var checkManipulationOfComponentsList = function(component, placeholderPosition) {
        var currentOrderOfComponents = componentsService.getOrderOfComponents();
        var manipulatedOrderOfComponents = currentOrderOfComponents.slice(0);
        componentsService.changeOrderBy(manipulatedOrderOfComponents, component, placeholderPosition);
        return checkRules(manipulatedOrderOfComponents);
    };
    
    this.checkManipulationOfComponentsListWithComponentSearch = function(placeholderPosition) {
        var components = componentsService.getComponents();
        for (var i = 0; i < components.length; i++) {
            if (components[i].dragged === true) {
                return checkManipulationOfComponentsList(components[i], placeholderPosition);
            }
        }
    };
    
    this.createRule = function(type, componentA, componentB, number) {
        switch(type) {
            case availableRules.aAtPosition.type:
                createAAtPosition(componentA, number);
                break;
            case availableRules.aNotAtPosition.type:
                createANotAtPosition(componentA, number);
                break;
            case availableRules.aBeforeB.type:
                createABeforeB(componentA, componentB); 
                break;
            case availableRules.aIsDirectlyBeforeB.type:
                createAIsDirectlyBeforeB(componentA, componentB);
                break;
            case availableRules.aNotDirectlyBeforeB.type:
                createANotDirectlyBeforeB(componentA, componentB);
                break;
            case availableRules.aIsBottom.type:
                createAIsBottom(componentA);
                break;
            case availableRules.aNotBottom.type:
                createANotBottom(componentA);
                break;
        }
    };
    
    function Rule(type, description, componentA) {
        this.type = type;
        this.description = description;
        this.componentA = componentA;
    };
    
    PositionRule.prototype = new Rule();
    PositionRule.prototype.constructor = PositionRule;
    function PositionRule(type, description, componentA, position) {
        Rule.call(this, type, description, componentA);
        this.position = position;
    };
    
    BeforeRule.prototype = new Rule();
    BeforeRule.prototype.constructor = BeforeRule;
    function BeforeRule(type, description, componentA, componentB) {
        Rule.call(this, type, description, componentA);
        this.componentB = componentB;
    };
    
    var createAAtPosition = function(componentA, position) {
        var aAtPosition = new PositionRule(availableRules.aAtPosition.type, availableRules.aAtPosition.description, componentA, position);
        aAtPosition.checkRule = function(orderOfComponents) {
            var indexOfComponentA = orderOfComponents[this.componentA.componentListIndex];
            return indexOfComponentA === this.position;
        };
        if (addRuleIfItApplies(aAtPosition, componentA)) {
            componentA.setDragableAttribute(false);
            updateBlockDragable(componentA);
        }
    };
    
    var createANotAtPosition = function(componentA, position) {
        var aNotAtPosition = new PositionRule(availableRules.aNotAtPosition.type, availableRules.aNotAtPosition.description, componentA, position);
        aNotAtPosition.checkRule = function(orderOfComponents) {
            var indexOfComponentA = orderOfComponents[this.componentA.componentListIndex];
            return indexOfComponentA !== this.position;
        };
        addRuleIfItApplies(aNotAtPosition, componentA);
    };
    
    var createABeforeB = function(componentA, componentB){
        var aBeforeB = new BeforeRule(availableRules.aBeforeB.type, availableRules.aBeforeB.description, componentA, componentB);
        aBeforeB.checkRule = function(orderOfComponents){
            var indexOfComponentA = orderOfComponents[this.componentA.componentListIndex];
            var indexOfComponentB = orderOfComponents[this.componentB.componentListIndex];
            return indexOfComponentA < indexOfComponentB;
        };
        addRuleIfItApplies(aBeforeB, componentA, componentB); 
    };

    var createAIsDirectlyBeforeB = function(componentA, componentB){
        var aIsDirectlyBeforeB = new BeforeRule(availableRules.aIsDirectlyBeforeB.type, availableRules.aIsDirectlyBeforeB.description, componentA, componentB);
        aIsDirectlyBeforeB.checkRule = function(orderOfComponents) {
            var indexOfComponentA = orderOfComponents[this.componentA.componentListIndex];
            var indexOfComponentB = orderOfComponents[this.componentB.componentListIndex];
            return indexOfComponentB - indexOfComponentA === 1;
        };
        if (addRuleIfItApplies(aIsDirectlyBeforeB, componentA, componentB)) {
        componentsService.addComponentsToBlock(componentA, componentB);
        }
    };
    
    var createANotDirectlyBeforeB = function(componentA, componentB) {
        var aNotDirectlyBeforeB = new BeforeRule(availableRules.aNotDirectlyBeforeB.type, availableRules.aNotDirectlyBeforeB.description, componentA, componentB);
        aNotDirectlyBeforeB.checkRule = function(orderOfComponents) {
            var indexOfComponentA = orderOfComponents[this.componentA.componentListIndex];
            var indexOfComponentB = orderOfComponents[this.componentB.componentListIndex];
            return indexOfComponentB - indexOfComponentA !== 1;
        };
        addRuleIfItApplies(aNotDirectlyBeforeB, componentA, componentB);
    };

    var createAIsBottom = function(componentA){
        var aIsBottom = new Rule(availableRules.aIsBottom.type, availableRules.aIsBottom.description, componentA);
        aIsBottom.checkRule = function(orderOfComponents){
            var indexOfComponentA = orderOfComponents[this.componentA.componentListIndex];
            var indexOfLastComponent = orderOfComponents.length-1;
            return indexOfComponentA === indexOfLastComponent;
        };
        if (addRuleIfItApplies(aIsBottom, componentA)) {
            componentA.setDragableAttribute(false);
            updateBlockDragable(componentA);
        }
    };
    
    var createANotBottom = function(componentA){
        var aNotBottom = new Rule(availableRules.aNotBottom.type, availableRules.aNotBottom.description, componentA);
        aNotBottom.checkRule = function(orderOfComponents){
            var indexOfComponentA = orderOfComponents[this.componentA.componentListIndex];
            var indexOfLastComponent = orderOfComponents.length-1;
            return indexOfComponentA !== indexOfLastComponent;
        };
        addRuleIfItApplies(aNotBottom, componentA);
    };
    
    var addRuleIfItApplies = function(rule, componentA, componentB) {
        var currentOrderOfComponents = componentsService.getOrderOfComponents();
        if(rule.checkRule(currentOrderOfComponents)) {
            componentA.isGeneratedFromTemplate = true;
            componentA.setActiveAttribute(componentA.active);
            if(componentB) {
                componentB.isGeneratedFromTemplate = true;
                componentB.setActiveAttribute(componentB.active);
            }
            ruleList.push(rule);
            return true;
        } else {
            alert("The rule could not be added, as it does not apply to the current order of the components");
        }
        return false;
    };

    var updateBlockDragable = function(component) {
        var blockId = componentsService.getBlocks()[component.componentListIndex];
        if (blockId !== -1) {
            var block = componentsService.getBlockFromId(blockId);
            block.setDragableAttribute(false);
            for (var j = 0; j < block.elements.length; j++) {
                block.elements[j].setDragableAttribute(false);
            }
        }
   };

    this.resetRules = function(){
        for(var i = ruleList.length; i>0;i--){
            ruleList.pop();
        }
    };
});
