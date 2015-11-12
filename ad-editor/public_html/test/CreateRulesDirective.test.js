describe("Test 'CreateRulesDirective'", function(){
    var createRulesFormCtrlLocal;
    beforeEach(module("CreateRulesDirective",function(){
    }));
    beforeEach(inject(function($controller){
        createRulesFormCtrlLocal = $controller("createRulesFormController");
    }));
    
    //test of showAdditional()
    it ("should show additional for twoComponents", function(){
        createRulesFormCtrlLocal.rule = createRulesFormCtrlLocal.rules.aBeforeB;
        createRulesFormCtrlLocal.showAdditional();
        expect(createRulesFormCtrlLocal.showSecondComponent).toBe(true);
        expect(createRulesFormCtrlLocal.showNumber).toBe(false);
    });
    it("should show additional for number components", function(){
        createRulesFormCtrlLocal.rule=createRulesFormCtrlLocal.rules.aNotAtPosition;
        createRulesFormCtrlLocal.showAdditional();
        expect(createRulesFormCtrlLocal.showSecondComponent).toBe(false);
        expect(createRulesFormCtrlLocal.showNumber).toBe(true);
    });
    it("should show additional for the other components", function(){
        createRulesFormCtrlLocal.rule=createRulesFormCtrlLocal.rules.aIsBottom;
        createRulesFormCtrlLocal.showAdditional();
        expect(createRulesFormCtrlLocal.showSecondComponent).toBe(false);
        expect(createRulesFormCtrlLocal.showNumber).toBe(false);
    });
    it("should set visibilities for second component number", function(){
        createRulesFormCtrlLocal.rule=createRulesFormCtrlLocal.rules.aIsBottom;
        createRulesFormCtrlLocal.showAdditional();
        expect(createRulesFormCtrlLocal.showSecondComponent).toBe(false);
        expect(createRulesFormCtrlLocal.showNumber).toBe(false);
        createRulesFormCtrlLocal.setVisibilitiesSecondComponentNumber(true,true);
        expect(createRulesFormCtrlLocal.showSecondComponent).toBe(true);
        expect(createRulesFormCtrlLocal.showNumber).toBe(true);
    });

});