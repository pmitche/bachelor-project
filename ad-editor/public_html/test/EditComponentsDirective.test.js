describe("Test 'editComponentsDirective'", function(){
    var editComponentCtrlLocal, component, componentsServiceLocal;
    //var fontServiceLocal, symbolServiceLocal;
    //symbolService, fontService, componentsService
    beforeEach(module("EditComponentsDirective",function($provide){
      
        componentsServiceLocal = {deleteComponent:function(component){component.deleted=true;}};
    
        $provide.value("componentsService", componentsServiceLocal);
    }));
    beforeEach(inject(function($controller){
        editComponentCtrlLocal = $controller("editComponentsController");
    }));
    it("should hide component", function(){
        component = {isGeneratedFromTemplate:true,
                    active:true,
                    setActiveAttribute:function(bool){component.active=bool}
        };
        expect(component.active).toBe(true);
        editComponentCtrlLocal.handleDeleteComponent(component);
        expect(component.active).toBe(false);
    });
    it("should delete component", function(){
        component = {isGeneratedFromTemplate:false,
            deleted:false
        };
        editComponentCtrlLocal.handleDeleteComponent(component);
        expect(component.deleted).toBe(true);
    });
    
});

