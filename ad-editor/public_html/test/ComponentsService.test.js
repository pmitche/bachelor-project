
describe("Testing the service 'ComponentsService",function(){
    
    var localComponentsService;
    
    beforeEach(module("ComponentsService",function(){
//        fontService = {};
//        $provide.value("fontService",fontService);
    }));
    
    beforeEach(inject(function(componentsService){
        localComponentsService = componentsService;
    }));
   
    
    it("should not change the number in availableComponents",function(){
        var typesNumbersObject={"lol":{}};
        
        localComponentsService.setAvailableComponentsNumbersDuringLoading(typesNumbersObject);
        
        for(var key in localComponentsService.getAvailableComponents()){
            expect(localComponentsService.getAvailableComponents()[key].maxNumber).toBe(-1);
        };
    });
    
    it("should set the number of textAreas to 2",function(){
        var typesNumbersObject={"textArea":{maxNumber:2}};
        
        localComponentsService.setAvailableComponentsNumbersDuringLoading(typesNumbersObject);
        
        expect(localComponentsService.getAvailableComponents()["textArea"].maxNumber).toBe(2);
    });
    
    it("should add a textArea to the components",function(){
       var availableComponents = localComponentsService.getAvailableComponents();
       
       localComponentsService.addComponent(availableComponents.textArea.type,"","",false,false,0,0);
       
       expect(localComponentsService.getComponents()[0].type).toBe("textArea");
    });
    
    it("should add a textColumnArea to the components",function(){
       var availableComponents = localComponentsService.getAvailableComponents();
       
       localComponentsService.addComponent(availableComponents.textColumnArea.type,"","",false,false,0,0);
       
       expect(localComponentsService.getComponents()[0].type).toBe("textColumnArea");
    });
    
    it("should add a line to the components",function(){
       var availableComponents = localComponentsService.getAvailableComponents();
       
       localComponentsService.addComponent(availableComponents.line.type,"","",false,false,0,0);
       
       expect(localComponentsService.getComponents()[0].type).toBe("line");
    });
    
    it("should add a symbol to the components",function(){
       var availableComponents = localComponentsService.getAvailableComponents();
       
       localComponentsService.addComponent(availableComponents.symbol.type,"","",false,false,0,0);
       
       expect(localComponentsService.getComponents()[0].type).toBe("symbol");
    });
    
    it("should add a shortText to the components",function(){
       var availableComponents = localComponentsService.getAvailableComponents();
       
       localComponentsService.addComponent(availableComponents.shortText.type,"","",false,false,0,0);
       
       expect(localComponentsService.getComponents()[0].type).toBe("shortText");
    });
    
    it("should add a name to the components",function(){
       var availableComponents = localComponentsService.getAvailableComponents();
       
       localComponentsService.addComponent(availableComponents.name.type,"","",false,false,0,0);
       
       expect(localComponentsService.getComponents()[0].type).toBe("name");
    });
    
    it("should add a dateOfBirth to the components",function(){
       var availableComponents = localComponentsService.getAvailableComponents();
       
       localComponentsService.addComponent(availableComponents.dateOfBirth.type,"","",false,false,0,0);
       
       expect(localComponentsService.getComponents()[0].type).toBe("dateOfBirth");
    });
    
    it("should add a explanation to the components",function(){
       var availableComponents = localComponentsService.getAvailableComponents();
       
       localComponentsService.addComponent(availableComponents.explanation.type,"","",false,false,0,0);
       
       expect(localComponentsService.getComponents()[0].type).toBe("explanation");
    });
    
    it("should add a placeDate to the components",function(){
       var availableComponents = localComponentsService.getAvailableComponents();
       
       localComponentsService.addComponent(availableComponents.placeDate.type,"","",false,false,0,0);
       
       expect(localComponentsService.getComponents()[0].type).toBe("placeDate");
    });
    
    it("should add a familyOneColumn to the components",function(){
       var availableComponents = localComponentsService.getAvailableComponents();
       
       localComponentsService.addComponent(availableComponents.familyOneColumn.type,"","",false,false,0,0);
       
       expect(localComponentsService.getComponents()[0].type).toBe("familyOneColumn");
    });
    
    it("should add a familyTwoColumn to the components",function(){
       var availableComponents = localComponentsService.getAvailableComponents();
       
       localComponentsService.addComponent(availableComponents.familyTwoColumn.type,"","",false,false,0,0);
       
       expect(localComponentsService.getComponents()[0].type).toBe("familyTwoColumn");
    });
    
    it("should add a poem to the components",function(){
       var availableComponents = localComponentsService.getAvailableComponents();
       
       localComponentsService.addComponent(availableComponents.poem.type,"","",false,false,0,0);
       
       expect(localComponentsService.getComponents()[0].type).toBe("poem");
    });
    
    it("should add a funeralInfo to the components",function(){
       var availableComponents = localComponentsService.getAvailableComponents();
       
       localComponentsService.addComponent(availableComponents.funeralInfo.type,"","",false,false,0,0);
       
       expect(localComponentsService.getComponents()[0].type).toBe("funeralInfo");
    });
    
    it("should add a giftsInfo to the components",function(){
       var availableComponents = localComponentsService.getAvailableComponents();
       
       localComponentsService.addComponent(availableComponents.giftsInfo.type,"","",false,false,0,0);
       
       expect(localComponentsService.getComponents()[0].type).toBe("giftsInfo");
    });
    
    it("should create a new block with component A and B, since they are not in a block",function(){
        var componentA = {componentListIndex:0};
        var componentB = {componentListIndex:1};
        localComponentsService.getComponents().push(componentA);
        localComponentsService.getComponents().push(componentB);
        
        localComponentsService.getBlocks().push(-1);
        localComponentsService.getBlocks().push(-1);
        
        expect(localComponentsService.getComponents().length).toBe(2);
        
        localComponentsService.addComponentsToBlock(componentA,componentB);
        
        expect(localComponentsService.getComponents().length).toBe(1);
        expect(localComponentsService.getComponents()[0].type).toBe("block");
    });
    
    it("should merge component A with the block that component B is in",function(){
        var componentA = {componentListIndex:0};
        var componentB = {componentListIndex:1,id:0};
        var block = {elements:[componentB],id:0,type:"block",setDragableAttribute:function(){}};
        localComponentsService.getComponents().push(componentA);
        localComponentsService.getComponents().push(block);
        
        localComponentsService.getBlocks().push(-1);
        localComponentsService.getBlocks().push(0);
        
        localComponentsService.getOrderOfComponents().push(0);
        localComponentsService.getOrderOfComponents().push(1);
        
        expect(localComponentsService.getComponents().length).toBe(2);
        expect(localComponentsService.getComponents()[1].elements.length).toBe(1);
        
        localComponentsService.addComponentsToBlock(componentA,componentB);
        
        expect(localComponentsService.getComponents().length).toBe(1);
        expect(localComponentsService.getComponents()[0].elements.length).toBe(2);
    });
    
    it("should merge component B with the block that component A is in",function(){
        var componentA = {componentListIndex:0};
        var componentB = {componentListIndex:1};
        var block = {elements:[componentA],id:0,type:"block",setDragableAttribute:function(){}};
        localComponentsService.getComponents().push(componentB);
        localComponentsService.getComponents().push(block);
        
        localComponentsService.getBlocks().push(0);
        localComponentsService.getBlocks().push(-1);
        
        localComponentsService.getOrderOfComponents().push(0);
        localComponentsService.getOrderOfComponents().push(1);
        
        expect(localComponentsService.getComponents().length).toBe(2);
        expect(localComponentsService.getComponents()[1].elements.length).toBe(1);
        
        localComponentsService.addComponentsToBlock(componentA,componentB);
        
        expect(localComponentsService.getComponents().length).toBe(1);
        expect(localComponentsService.getComponents()[0].elements.length).toBe(2);
    });
    
    it("should merge block with block2",function(){
        var componentA = {componentListIndex:0};
        var componentB = {componentListIndex:1};
        var block = {elements:[componentA],id:0,type:"block",setDragableAttribute:function(){}};
        var block2 = {elements:[componentB],id:1,type:"block",setDragableAttribute:function(){}};
        localComponentsService.getComponents().push(block);
        localComponentsService.getComponents().push(block2);
        
        localComponentsService.getBlocks().push(0);
        localComponentsService.getBlocks().push(-1);
        
        localComponentsService.getOrderOfComponents().push(0);
        localComponentsService.getOrderOfComponents().push(1);
        
        expect(localComponentsService.getComponents().length).toBe(2);
        expect(localComponentsService.getComponents()[0].elements.length).toBe(1);
        expect(localComponentsService.getComponents()[1].elements.length).toBe(1);
        
        localComponentsService.addComponentsToBlock(componentA,componentB);
        
        expect(localComponentsService.getComponents().length).toBe(1);
        expect(localComponentsService.getComponents()[0].elements.length).toBe(2);
    });
    
     it("should create a new block with component A and B, since they are not in a block and make it not dragable because component A is not dragable",function(){
        var componentA = {componentListIndex:0,dragable:false,setDragableAttribute:function(){}};
        var componentB = {componentListIndex:1,setDragableAttribute:function(){}};
        localComponentsService.getComponents().push(componentA);
        localComponentsService.getComponents().push(componentB);
        
        localComponentsService.getBlocks().push(-1);
        localComponentsService.getBlocks().push(-1);
        
        expect(localComponentsService.getComponents().length).toBe(2);
        
        localComponentsService.addComponentsToBlock(componentA,componentB);
        
        expect(localComponentsService.getComponents().length).toBe(1);
        expect(localComponentsService.getComponents()[0].type).toBe("block");
        expect(localComponentsService.getComponents()[0].dragable).toBe(false);
    });
    
    it("should delete component A",function(){
        var componentA = {componentListIndex:0};
        
        localComponentsService.getComponents().push(componentA);
        localComponentsService.getBlocks().push(-1);
        localComponentsService.getOrderOfComponents().push(0);
        
        localComponentsService.deleteComponent(componentA);
        
        expect(localComponentsService.getComponents().length).toBe(0);
        expect(localComponentsService.getBlocks().length).toBe(0);
        expect(localComponentsService.getOrderOfComponents().length).toBe(0);
    });
    
    it("should delete component A and set componentB's order to 0",function(){
        var componentA = {componentListIndex:0};
        var componentB = {componentListIndex:1};
        
        localComponentsService.getComponents().push(componentA);
        localComponentsService.getComponents().push(componentB);
        localComponentsService.getBlocks().push(-1);
        localComponentsService.getBlocks().push(-1);
        localComponentsService.getOrderOfComponents().push(0);
        localComponentsService.getOrderOfComponents().push(1);
        
        
        localComponentsService.deleteComponent(componentA);
        
        expect(localComponentsService.getComponents().length).toBe(1);
        expect(localComponentsService.getBlocks().length).toBe(1);
        expect(localComponentsService.getOrderOfComponents().length).toBe(1);
        
        expect(localComponentsService.getOrderOfComponents()[0]).toBe(0);
    });
    
    it("should delete the block and readd A  to the set of components",function(){
        var componentA = {componentListIndex:0};
        var componentB = {componentListIndex:1};
        var block = {elements:[componentA],id:0,type:"block",setDragableAttribute:function(){}};
        
        localComponentsService.getComponents().push(block);
        localComponentsService.getComponents().push(componentB);
        localComponentsService.getBlocks().push(-1);
        localComponentsService.getBlocks().push(-1);
        localComponentsService.getOrderOfComponents().push(0);
        localComponentsService.getOrderOfComponents().push(1);
        
        expect(localComponentsService.getComponents()[0].type).toBe("block");
        
        localComponentsService.deleteComponent(componentA);
        
        expect(localComponentsService.getComponents().length).toBe(2);
        expect(localComponentsService.getBlocks().length).toBe(1);
        expect(localComponentsService.getOrderOfComponents().length).toBe(1);
        
        expect(localComponentsService.getOrderOfComponents()[0]).toBe(0);
    });
    
    it("should delete the componentA from the block",function(){
        var componentA = {componentListIndex:0};
        var componentB = {componentListIndex:1};
        var block = {elements:[componentA,componentB],id:0,type:"block",setDragableAttribute:function(){}};
        
        localComponentsService.getComponents().push(block);
        localComponentsService.getBlocks().push(0);
        localComponentsService.getBlocks().push(0);
        localComponentsService.getOrderOfComponents().push(0);
        localComponentsService.getOrderOfComponents().push(1);
        
        expect(localComponentsService.getComponents()[0].type).toBe("block");
        expect(localComponentsService.getComponents()[0].elements.length).toBe(2);
        
        localComponentsService.deleteComponent(componentA);
        
        expect(localComponentsService.getComponents().length).toBe(1);
        expect(localComponentsService.getBlocks().length).toBe(1);
        expect(localComponentsService.getOrderOfComponents().length).toBe(1);
        
        expect(localComponentsService.getOrderOfComponents()[0]).toBe(0);
    });
    
    it("should set the number of used textAreas 0 when the textArea component is deleted. Max number of textareas should stay consistent",function(){
        var availableComponents = localComponentsService.getAvailableComponents();
        availableComponents["textArea"] = {type: "textArea", maxNumber:3, usedNumber:1};
        
        var textAreaComponent = {componentListIndex:0,type:"textArea"};
                
        localComponentsService.getComponents().push(textAreaComponent);
        localComponentsService.getBlocks().push(-1);
        localComponentsService.getOrderOfComponents().push(0);
        expect(localComponentsService.getAvailableComponents()["textArea"].maxNumber).toBe(3);
        expect(localComponentsService.getAvailableComponents()["textArea"].usedNumber).toBe(1);
        
        localComponentsService.deleteComponent(textAreaComponent);
        
        expect(localComponentsService.getAvailableComponents()["textArea"].maxNumber).toBe(3);
        expect(localComponentsService.getAvailableComponents()["textArea"].usedNumber).toBe(0);
    });
    
    it("should change the order of component A and B",function(){
        var componentA = {componentListIndex:0};
        var componentB = {componentListIndex:1};
        
        localComponentsService.getComponents().push(componentA);
         localComponentsService.getComponents().push(componentB);
        localComponentsService.getBlocks().push(-1);
        localComponentsService.getBlocks().push(-1);
        localComponentsService.getOrderOfComponents().push(0);
        localComponentsService.getOrderOfComponents().push(1);
        
        localComponentsService.changeOrderBy("currentOrder",componentA,2);
        
        expect(localComponentsService.getOrderOfComponents()[0]).toBe(1);
    });
    
    it("should change the order of component B and A",function(){
        var componentA = {componentListIndex:0};
        var componentB = {componentListIndex:1};
        
        localComponentsService.getComponents().push(componentA);
         localComponentsService.getComponents().push(componentB);
        localComponentsService.getBlocks().push(-1);
        localComponentsService.getBlocks().push(-1);
        localComponentsService.getOrderOfComponents().push(0);
        localComponentsService.getOrderOfComponents().push(1);
        
        localComponentsService.changeOrderBy("currentOrder",componentB,0);
        
        expect(localComponentsService.getOrderOfComponents()[0]).toBe(1);
    });
    
    it("should change the order of component A and block",function(){
        var componentA = {componentListIndex:0,type:"textArea"};
        var componentB = {componentListIndex:1,type:"textArea"};
        var block = {elements:[componentB],id:0,type:"block", viewType:"block"};
        
        localComponentsService.getComponents().push(componentA);
         localComponentsService.getComponents().push(block);
        localComponentsService.getBlocks().push(-1);
        localComponentsService.getBlocks().push(0);
        localComponentsService.getOrderOfComponents().push(0);
        localComponentsService.getOrderOfComponents().push(1);
        
        localComponentsService.changeOrderBy("currentOrder",block,0);
        
        expect(localComponentsService.getOrderOfComponents()[0]).toBe(1);
        expect(localComponentsService.getOrderOfComponents()[1]).toBe(0);
    });
    
    it("should change the order of block and component A",function(){
        var componentA = {componentListIndex:0,type:"line"};
        var componentB = {componentListIndex:1,type:"line"};
        var block = {elements:[componentB],id:0,type:"block", viewType:"block"};
        
        localComponentsService.getComponents().push(block);
        localComponentsService.getComponents().push(componentA);
        localComponentsService.getBlocks().push(-1);
        localComponentsService.getBlocks().push(0);
        localComponentsService.getOrderOfComponents().push(0);
        localComponentsService.getOrderOfComponents().push(1);
        
        localComponentsService.changeOrderBy("currentOrder",componentA,2);
        
        expect(localComponentsService.getOrderOfComponents()[0]).toBe(1);
        expect(localComponentsService.getOrderOfComponents()[1]).toBe(0);
    });
    
    it("should reset the components",function(){
        localComponentsService.getBlocks().push({});
        localComponentsService.getBlocks().push({});
        localComponentsService.getBlocks().push({});
        localComponentsService.getOrderOfComponents().push(0);
        localComponentsService.getOrderOfComponents().push(0);
        localComponentsService.getOrderOfComponents().push(0);
        localComponentsService.getComponents().push({});
        localComponentsService.getComponents().push({});
        localComponentsService.getComponents().push({});
        localComponentsService.getLinearizedComponents().push({});
        localComponentsService.getLinearizedComponents().push({});
        localComponentsService.getLinearizedComponents().push({});
        expect(localComponentsService.getBlocks().length).toBe(3);
        expect(localComponentsService.getOrderOfComponents().length).toBe(3);
        expect(localComponentsService.getLinearizedComponents().length).toBe(3);
        expect(localComponentsService.getComponents().length).toBe(3);
        
        localComponentsService.resetComponents();
        
        expect(localComponentsService.getBlocks().length).toBe(0);
        expect(localComponentsService.getOrderOfComponents().length).toBe(0);
        expect(localComponentsService.getLinearizedComponents().length).toBe(0);
        expect(localComponentsService.getComponents().length).toBe(0);
    });
    
    it("should set the number of used textAreas to 1 after adding one (available textareas starts at 2)",function(){
        var availableComponents = localComponentsService.getAvailableComponents();
        availableComponents["textArea"] = {maxNumber:2, usedNumber:0};
        
        expect(localComponentsService.getAvailableComponents()["textArea"].maxNumber).toBe(2);
        expect(localComponentsService.getAvailableComponents()["textArea"].usedNumber).toBe(0);
        localComponentsService.addComponent(availableComponents.textArea.type,"","",false,false,0,0);
        
        expect(localComponentsService.getAvailableComponents()["textArea"].maxNumber).toBe(2);
        expect(localComponentsService.getAvailableComponents()["textArea"].usedNumber).toBe(1);
    });
});
