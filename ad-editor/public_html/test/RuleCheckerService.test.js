describe("Testing the service 'RuleCheckerService'", function(){
    
    var localRuleCheckerService, componentsService;
    
    beforeEach(module("RuleCheckerService",function($provide){
        componentsService = {
            getOrderOfComponents:function(){
                return new Array();},
            getBlocks:function(){
                return new Array();
            },
            getBlockFromId:function(){
                return {setDragableAttribute:function(){}};
            },
            addComponentsToBlock:function(){
            }
        };
        $provide.value("componentsService",componentsService);
    }));
    
    beforeEach(inject(function(ruleCheckerService){
        localRuleCheckerService = ruleCheckerService;
    }));
    
    it("should validate the rules as true given no components and no rules",function(){
       expect(localRuleCheckerService.checkRules()).toBe(true); 
    });
    
    it("should create a rule 'aAtPosition' and add it to the rulesList",function(){
        var availableRules = localRuleCheckerService.getAvailableRules();
        var order = new Array();
        componentsService.getOrderOfComponents = function(){return order;};
        order.push(0);
        var blocks = [-1];
        componentsService.getBlocks = function(){return blocks;};
        
        localRuleCheckerService.createRule(availableRules.aAtPosition.type,{setDragableAttribute:function(){}, setActiveAttribute:function(){}, componentListIndex:0},{},0);
        
        expect(localRuleCheckerService.getRuleList()[0].type).toBe('aAtPosition');
        expect(localRuleCheckerService.getRuleList().length).toBe(1);
    });
    
    it("should create a rule 'aNotAtPosition' and add it to the rulesList",function(){
        var availableRules = localRuleCheckerService.getAvailableRules();
        var order = new Array();
        componentsService.getOrderOfComponents = function(){return order;};
        order.push(1);
        
        localRuleCheckerService.createRule(availableRules.aNotAtPosition.type,{setDragableAttribute:function(){}, setActiveAttribute:function(){}, componentListIndex:0},{},0);
        
        expect(localRuleCheckerService.getRuleList()[0].type).toBe('aNotAtPosition');
        expect(localRuleCheckerService.getRuleList().length).toBe(1);
    });
    
    it("should create a rule 'aNotAtPosition' and add it to the rulesList as the rule applies",function(){
        var availableRules = localRuleCheckerService.getAvailableRules();
        var order = new Array();
        componentsService.getOrderOfComponents = function(){return order;};
        order.push(1);
        
        localRuleCheckerService.createRule(availableRules.aNotAtPosition.type,{setDragableAttribute:function(){}, setActiveAttribute:function(){}, componentListIndex:0},{},0);
        
        expect(localRuleCheckerService.getRuleList()[0].type).toBe('aNotAtPosition');
        expect(localRuleCheckerService.getRuleList().length).toBe(1);
    });
    
    it("should not create a rule 'aNotAtPosition' and not add it to the rulesList as the rule would not apply",function(){
        var availableRules = localRuleCheckerService.getAvailableRules();
        var order = new Array();
        componentsService.getOrderOfComponents = function(){return order;};
        order.push(0);
        
        localRuleCheckerService.createRule(availableRules.aNotAtPosition.type,{setDragableAttribute:function(){}, setActiveAttribute:function(){}, componentListIndex:0},{},0);
        
        expect(localRuleCheckerService.getRuleList().length).toBe(0);
    });
    
    it("should create a rule 'aBeforeB' and add it to the rulesList",function(){
        var availableRules = localRuleCheckerService.getAvailableRules();
        var order = new Array();
        componentsService.getOrderOfComponents = function(){return order;};
        order.push(0);
        order.push(1);
        
        localRuleCheckerService.createRule(availableRules.aBeforeB.type,{setDragableAttribute:function(){}, setActiveAttribute:function(){}, componentListIndex:0},{setDragableAttribute:function(){}, setActiveAttribute:function(){}, componentListIndex:1},0);
        
        expect(localRuleCheckerService.getRuleList()[0].type).toBe('aBeforeB');
        expect(localRuleCheckerService.getRuleList().length).toBe(1);
    });
    
    it("should create a rule 'aIsDirectlyBeforeB' and add it to the rulesList",function(){
        var availableRules = localRuleCheckerService.getAvailableRules();
        var order = new Array();
        componentsService.getOrderOfComponents = function(){return order;};
        order.push(0);
        order.push(1);
        
        localRuleCheckerService.createRule(availableRules.aIsDirectlyBeforeB.type,{setDragableAttribute:function(){}, setActiveAttribute:function(){}, componentListIndex:0},{setDragableAttribute:function(){}, setActiveAttribute:function(){}, componentListIndex:1},0);
        
        expect(localRuleCheckerService.getRuleList()[0].type).toBe('aIsDirectlyBeforeB');
        expect(localRuleCheckerService.getRuleList().length).toBe(1);
    });
    
    it("should create a rule 'aNotDirectlyBeforeB' and add it to the rulesList",function(){
        var availableRules = localRuleCheckerService.getAvailableRules();
        var order = new Array();
        componentsService.getOrderOfComponents = function(){return order;};
        order.push(1);
        order.push(0);
        
        localRuleCheckerService.createRule(availableRules.aNotDirectlyBeforeB.type,{setDragableAttribute:function(){}, setActiveAttribute:function(){}, componentListIndex:0},{setDragableAttribute:function(){}, setActiveAttribute:function(){}, componentListIndex:1},0);
        
        expect(localRuleCheckerService.getRuleList()[0].type).toBe('aNotDirectlyBeforeB');
        expect(localRuleCheckerService.getRuleList().length).toBe(1);
    });
    
    it("should create a rule 'aIsBottom' and add it to the rulesList",function(){
        var availableRules = localRuleCheckerService.getAvailableRules();
        var order = new Array();
        componentsService.getOrderOfComponents = function(){return order;};
        order.push(2);
        order.push(0);
        order.push(1);
        var blocks = [-1, -1, -1];
        componentsService.getBlocks = function(){return blocks;};
        
        localRuleCheckerService.createRule(availableRules.aIsBottom.type,{setDragableAttribute:function(){}, setActiveAttribute:function(){}, componentListIndex:0},{},0);
                
        expect(localRuleCheckerService.getRuleList()[0].type).toBe('aIsBottom');
        expect(localRuleCheckerService.getRuleList().length).toBe(1);
    });
    
    it("should create a rule 'aNotBottom' and add it to the rulesList",function(){
        var availableRules = localRuleCheckerService.getAvailableRules();
        var order = new Array();
        componentsService.getOrderOfComponents = function(){return order;};
        order.push(1);
        order.push(0);
        order.push(2);
        
        localRuleCheckerService.createRule(availableRules.aNotBottom.type,{setDragableAttribute:function(){}, setActiveAttribute:function(){}, componentListIndex:0},{},0);
        
        expect(localRuleCheckerService.getRuleList()[0].type).toBe('aNotBottom');
        expect(localRuleCheckerService.getRuleList().length).toBe(1);
    });
    
    it("should create a rule 'aAtPosition' at index 0 and check that it returns true when checking the rules because the component is at position 0",function(){
        var order = new Array();
        componentsService.getOrderOfComponents = function(){return order;};
        var componentA = {setDragableAttribute:function(){}, setActiveAttribute:function(){},componentListIndex:0};
        order.push(0);
        var availableRules = localRuleCheckerService.getAvailableRules();
        var blocks = [-1];
        componentsService.getBlocks = function(){return blocks;};
        
        localRuleCheckerService.createRule(availableRules.aAtPosition.type,componentA,null,0);
        
        expect(localRuleCheckerService.getRuleList().length).toBe(1);
        expect(localRuleCheckerService.checkRules()).toBe(true);
    });
    
    it("should create a rule 'aAtPosition' at index 1 and check that it returns false when checking the rules after the component is moved to position 0",function(){
        var order = new Array();
        componentsService.getOrderOfComponents = function(){return order;};
        var componentA = {setDragableAttribute:function(){}, setActiveAttribute:function(){}, componentListIndex:0};
        order.push(1);
        order.push(0);
        var availableRules = localRuleCheckerService.getAvailableRules();
        var blocks = [-1];
        componentsService.getBlocks = function(){return blocks;};
        
        localRuleCheckerService.createRule(availableRules.aAtPosition.type,componentA,null,1);
        order[0] = 0;
        order[1] = 1;
        
        expect(localRuleCheckerService.getRuleList().length).toBe(1);
        expect(localRuleCheckerService.checkRules()).toBe(false);
    });
    
    it("should create a rule 'aNotAtPosition' at index 0 and check that it returns true when checking the rules because the component is at position 1",function(){
        var order = new Array();
        componentsService.getOrderOfComponents = function(){return order;};
        var componentA = {setDragableAttribute:function(){}, setActiveAttribute:function(){}, componentListIndex:0};
        order.push(1);
        order.push(0);
        var availableRules = localRuleCheckerService.getAvailableRules();
        
        localRuleCheckerService.createRule(availableRules.aNotAtPosition.type,componentA,null,0);
        
        expect(localRuleCheckerService.getRuleList().length).toBe(1);
        expect(localRuleCheckerService.checkRules()).toBe(true);
    });
    
    it("should create a rule 'aNotAtPosition' at index 1 and check that it returns false when checking the rules after the component is moved to position 1",function(){
        var order = new Array();
        componentsService.getOrderOfComponents = function(){return order;};
        var componentA = {setDragableAttribute:function(){}, setActiveAttribute:function(){}, componentListIndex:0};
        order.push(0);
        order.push(1);
        var availableRules = localRuleCheckerService.getAvailableRules();
        
        localRuleCheckerService.createRule(availableRules.aNotAtPosition.type,componentA,null,1);
        order[0] = 1;
        order[1] = 0;
        
        expect(localRuleCheckerService.getRuleList().length).toBe(1);
        expect(localRuleCheckerService.checkRules()).toBe(false);
    });
    
    it("should create a rule 'aBeforeB' with component A at 0 and B at 1 and check that it returns true when checking the rules because the order ads up",function(){
        var order = new Array();
        componentsService.getOrderOfComponents = function(){return order;};
        var componentA = {setDragableAttribute:function(){}, setActiveAttribute:function(){}, componentListIndex:0};
        var componentB = {setDragableAttribute:function(){}, setActiveAttribute:function(){}, componentListIndex:1};
        order.push(0);
        order.push(1);
        var availableRules = localRuleCheckerService.getAvailableRules();
        
        localRuleCheckerService.createRule(availableRules.aBeforeB.type,componentA,componentB,0);
        
        expect(localRuleCheckerService.getRuleList().length).toBe(1);
        expect(localRuleCheckerService.checkRules()).toBe(true);
    });
    
    it("should create a rule 'aBeforeB' with component A at 0 and B at 1 and check that it returns true when checking the rules because the order ads up",function(){
        var order = new Array();
        componentsService.getOrderOfComponents = function(){return order;};
        var componentA = {setDragableAttribute:function(){}, setActiveAttribute:function(){}, componentListIndex:0};
        var componentB = {setDragableAttribute:function(){}, setActiveAttribute:function(){}, componentListIndex:2};
        order.push(0);
        order.push(1);
        order.push(2);
        var availableRules = localRuleCheckerService.getAvailableRules();
        
        localRuleCheckerService.createRule(availableRules.aBeforeB.type,componentA,componentB,0);
        
        expect(localRuleCheckerService.getRuleList().length).toBe(1);
        expect(localRuleCheckerService.checkRules()).toBe(true);
    });
    
    it("should create a rule 'aBeforeB' and check that it returns false when checking the rules because component A is shifted to position 1 and B to 0",function(){
        var order = new Array();
        componentsService.getOrderOfComponents = function(){return order;};
        var componentA = {setDragableAttribute:function(){}, setActiveAttribute:function(){}, componentListIndex:0};
        var componentB = {setDragableAttribute:function(){}, setActiveAttribute:function(){}, componentListIndex:1};
        order.push(0);
        order.push(1);
        var availableRules = localRuleCheckerService.getAvailableRules();
        
        localRuleCheckerService.createRule(availableRules.aBeforeB.type,componentA,componentB,0);
        order[0] = 1;
        order[1] = 0;
        
        expect(localRuleCheckerService.getRuleList().length).toBe(1);
        expect(localRuleCheckerService.checkRules()).toBe(false);
    });
    
    it("should create a rule 'aIsDirectlyBeforeB' with component A at 0 and B at 1 and check that it returns true when checking the rules because the order ads up",function(){
        var order = new Array();
        componentsService.getOrderOfComponents = function(){return order;};
        var componentA = {setDragableAttribute:function(){}, setActiveAttribute:function(){}, componentListIndex:0};
        var componentB = {setDragableAttribute:function(){}, setActiveAttribute:function(){}, componentListIndex:1};
        order.push(0);
        order.push(1);
        var availableRules = localRuleCheckerService.getAvailableRules();
        
        localRuleCheckerService.createRule(availableRules.aIsDirectlyBeforeB.type,componentA,componentB,0);
        
        expect(localRuleCheckerService.getRuleList().length).toBe(1);
        expect(localRuleCheckerService.checkRules()).toBe(true);
    });
    
    it("should create a rule 'aIsDirectlyBeforeB' and check that it returns false when checking the rules because A is shifted to position 0 and B to 1",function(){
        var order = new Array();
        componentsService.getOrderOfComponents = function(){return order;};
        var componentA = {setDragableAttribute:function(){}, setActiveAttribute:function(){}, componentListIndex:0};
        var componentB = {setDragableAttribute:function(){}, setActiveAttribute:function(){}, componentListIndex:1};
        order.push(0);
        order.push(1);
        var availableRules = localRuleCheckerService.getAvailableRules();
        
        localRuleCheckerService.createRule(availableRules.aIsDirectlyBeforeB.type,componentA,componentB,0);
        order[0] = 1;
        order[1] = 0;
        
        expect(localRuleCheckerService.getRuleList().length).toBe(1);
        expect(localRuleCheckerService.checkRules()).toBe(false);
    });
    
    it("should create a rule 'aIsDirectlyBeforeB' and check that it returns false when checking the rules because A is shifted to position 0 and B to 2",function(){
        var order = new Array();
        componentsService.getOrderOfComponents = function(){return order;};
        var componentA = {setDragableAttribute:function(){}, setActiveAttribute:function(){}, componentListIndex:0};
        var componentB = {setDragableAttribute:function(){}, setActiveAttribute:function(){}, componentListIndex:1};
        order.push(0);
        order.push(1);
        order.push(2);
        var availableRules = localRuleCheckerService.getAvailableRules();
        
        localRuleCheckerService.createRule(availableRules.aIsDirectlyBeforeB.type,componentA,componentB,0);
        order[1] = 2;
        order[2] = 1;
        
        expect(localRuleCheckerService.getRuleList().length).toBe(1);
        expect(localRuleCheckerService.checkRules()).toBe(false);
    });
    
    it("should create a rule 'aNotDirectlyBeforeB' with component A at 1 and B at 0 and check that it returns true when checking the rules because the order ads up",function(){
        var order = new Array();
        componentsService.getOrderOfComponents = function(){return order;};
        var componentA = {setDragableAttribute:function(){}, setActiveAttribute:function(){}, componentListIndex:0};
        var componentB = {setDragableAttribute:function(){}, setActiveAttribute:function(){}, componentListIndex:1};
        order.push(1);
        order.push(0);
        var availableRules = localRuleCheckerService.getAvailableRules();
        
        localRuleCheckerService.createRule(availableRules.aNotDirectlyBeforeB.type,componentA,componentB,0);
        
        expect(localRuleCheckerService.getRuleList().length).toBe(1);
        expect(localRuleCheckerService.checkRules()).toBe(true);
    });
    
    it("should create a rule 'aNotDirectlyBeforeB' and check that it returns true when checking the rules because A is at position 0 and B at 2",function(){
        var order = new Array();
        componentsService.getOrderOfComponents = function(){return order;};
        var componentA = {setDragableAttribute:function(){}, setActiveAttribute:function(){}, componentListIndex:0};
        var componentB = {setDragableAttribute:function(){}, setActiveAttribute:function(){}, componentListIndex:2};
        order.push(0);
        order.push(1);
        order.push(2);
        var availableRules = localRuleCheckerService.getAvailableRules();
        
        localRuleCheckerService.createRule(availableRules.aNotDirectlyBeforeB.type,componentA,componentB,0);
        
        expect(localRuleCheckerService.getRuleList().length).toBe(1);
        expect(localRuleCheckerService.checkRules()).toBe(true);
    });
    
    it("should create a rule 'aNotDirectlyBeforeB' and check that it returns false when checking the rules because A is shifted to position 0 and B to 1",function(){
        var order = new Array();
        componentsService.getOrderOfComponents = function(){return order;};
        var componentA = {setDragableAttribute:function(){}, setActiveAttribute:function(){}, componentListIndex:0};
        var componentB = {setDragableAttribute:function(){}, setActiveAttribute:function(){}, componentListIndex:1};
        order.push(1);
        order.push(0);
        var availableRules = localRuleCheckerService.getAvailableRules();
        
        localRuleCheckerService.createRule(availableRules.aNotDirectlyBeforeB.type,componentA,componentB,0);
        order[0] = 0;
        order[1] = 1;
        
        expect(localRuleCheckerService.getRuleList().length).toBe(1);
        expect(localRuleCheckerService.checkRules()).toBe(false);
    });
    
    it("should create a rule 'aIsBottom' and check that it returns true when checking the rules because A is at position 2 and there are 3 components",function(){
        var order = new Array();
        componentsService.getOrderOfComponents = function(){return order;};
        var componentA = {setDragableAttribute:function(){}, setActiveAttribute:function(){}, componentListIndex:0};
        order.push(2);
        order.push(1);
        order.push(0);
        var availableRules = localRuleCheckerService.getAvailableRules();
        var blocks = [-1, -1, -1];
        componentsService.getBlocks = function(){return blocks;};
        
        localRuleCheckerService.createRule(availableRules.aIsBottom.type,componentA,null,0);
        
        expect(localRuleCheckerService.getRuleList().length).toBe(1);
        expect(localRuleCheckerService.checkRules()).toBe(true);
    });
    
    it("should create a rule 'aIsBottom' and check that it returns false when checking the rules because A is shifted to position 0 and there are 2 components",function(){
        var order = new Array();
        componentsService.getOrderOfComponents = function(){return order;};
        var componentA = {setDragableAttribute:function(){}, setActiveAttribute:function(){}, componentListIndex:0};
        order.push(1);
        order.push(0);
        var availableRules = localRuleCheckerService.getAvailableRules();
        var blocks = [-1, -1];
        componentsService.getBlocks = function(){return blocks;};
        
        localRuleCheckerService.createRule(availableRules.aIsBottom.type,componentA,null,0);
        order[0] = 0;
        order[1] = 1;
        
        expect(localRuleCheckerService.getRuleList().length).toBe(1);
        expect(localRuleCheckerService.checkRules()).toBe(false);
    });
    
    it("should create a rule 'aNotBottom' and check that it returns true when checking the rules because A is at position 0 and there are 3 components",function(){
        var order = new Array();
        componentsService.getOrderOfComponents = function(){return order;};
        var componentA = {setDragableAttribute:function(){}, setActiveAttribute:function(){}, componentListIndex:0};
        order.push(0);
        order.push(1);
        order.push(2);
        var availableRules = localRuleCheckerService.getAvailableRules();
        
        localRuleCheckerService.createRule(availableRules.aNotBottom.type,componentA,null,0);
        
        expect(localRuleCheckerService.getRuleList().length).toBe(1);
        expect(localRuleCheckerService.checkRules()).toBe(true);
    });
    
    it("should create a rule 'aNotBottom' and check that it returns true when checking the rules because A is at position 1 and there are 3 components",function(){
        var order = new Array();
        componentsService.getOrderOfComponents = function(){return order;};
        var componentA = {setDragableAttribute:function(){}, setActiveAttribute:function(){}, componentListIndex:1};
        order.push(0);
        order.push(1);
        order.push(2);
        var availableRules = localRuleCheckerService.getAvailableRules();
        
        localRuleCheckerService.createRule(availableRules.aNotBottom.type,componentA,null,0);
        
        expect(localRuleCheckerService.getRuleList().length).toBe(1);
        expect(localRuleCheckerService.checkRules()).toBe(true);
    });
    
    it("should create a rule 'aNotBottom' and check that it returns false when checking the rules because A is shifted to position 1 and there are 2 components",function(){
        var order = new Array();
        componentsService.getOrderOfComponents = function(){return order;};
        var componentA = {setDragableAttribute:function(){}, setActiveAttribute:function(){}, componentListIndex:0};
        order.push(0);
        order.push(1);
        var availableRules = localRuleCheckerService.getAvailableRules();
        
        localRuleCheckerService.createRule(availableRules.aNotBottom.type,componentA,null,0);
        order[0] = 1;
        order[1] = 0;
        
        expect(localRuleCheckerService.getRuleList().length).toBe(1);
        expect(localRuleCheckerService.checkRules()).toBe(false);
    });
    
    it("should make the ruleList empty after resetting the rules",function(){
        var availableRules = localRuleCheckerService.getAvailableRules();
        var componentA = {setDragableAttribute:function(){}, setActiveAttribute:function(){}, componentListIndex:0};
        localRuleCheckerService.createRule(availableRules.aNotBottom.type,componentA,null,0);
        expect(localRuleCheckerService.getRuleList().length).toBe(1);
        
        localRuleCheckerService.resetRules();
        
        expect(localRuleCheckerService.getRuleList().length).toBe(0);
    });
    
    it("should do nothing since the component is not dragged",function(){
        var components = new Array();
        var order = new Array();
        componentsService.getComponents = function(){
            return components;
        };
        componentsService.getOrderOfComponents = function(){
            return order;
        };
        var componentA = {setDragableAttribute:function(){}, setActiveAttribute:function(){}, dragged:false, componentListIndex:0};
        components.push(componentA);
        order.push(0);
        
        var result = localRuleCheckerService.checkManipulationOfComponentsListWithComponentSearch(1);
        
        expect(result).not.toBeDefined();
    });
    
    it("should return true since there are no rules and the component is dragged",function(){
        var components = new Array();
        var order = new Array();
        componentsService.getComponents = function(){
            return components;
        };
        componentsService.getOrderOfComponents = function(){
            return order;
        };
        componentsService.changeOrderBy = function(){};
        var componentA = {setDragableAttribute:function(){}, setActiveAttribute:function(){}, dragged:true, componentListIndex:0};
        components.push(componentA);
        order.push(0);
        
        var result = localRuleCheckerService.checkManipulationOfComponentsListWithComponentSearch(1);
        
        expect(result).toBe(true);
    });

});