describe("Testing the directive 'ToolbarDirective'", function(){
    
    var toolbarCtrl, ruleService;
    
    beforeEach(module("ToolbarDirective",function($provide){
        ruleService = {};
        $provide.value("ruleCheckerService",ruleService);
    }));
    beforeEach(inject(function($controller){
        toolbarCtrl = $controller('toolbarController');
    }));
    
    //testing of editCtrl
    it("should not add a new component since there is no valid place for the new component according to the rules",function(){
        ruleService.checkRules = function(){return false;};
        
        toolbarCtrl.addComponent();
        
        expect(toolbarCtrl.getComponents().length).toBe(0);
    });
    
    it("should add new component since there is no rules preventing it",function(){
        ruleService.checkRules = function(){return true;};
        
        toolbarCtrl.addComponent();
        
        expect(toolbarCtrl.getComponents().length).toBe(1);
    });
    
    it("should move the component up one when it adds the second component because of the rules(this is hardcoded)",function(){
        ruleService.checkRules = function(){return true;};
        toolbarCtrl.addComponent();
        var times = 0;
        ruleService.checkRules = function(){
            if (times === 0){
                times = 1;
                return false;
            }else{
                return true;
            }
        };
        
        toolbarCtrl.addComponent();

        expect(toolbarCtrl.getComponents().length).toBe(2);
        expect(toolbarCtrl.getOrderOfComponents()[0]).toBe(1);
        expect(toolbarCtrl.getOrderOfComponents()[1]).toBe(0);
    });
});