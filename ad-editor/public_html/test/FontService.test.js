describe("Testing 'FontService'", function(){
   var fontServiceLocal;
   
   beforeEach(module("FontService",function($provide){
   
    }));
     beforeEach(inject(function(fontService){
        fontServiceLocal = fontService;
    }));
   it("should verify that fonts has been created", function(){
        expect(fontServiceLocal.getFonts()).toBeDefined();
   }); 
   it("should verify that font sizes has been created", function(){
       expect(fontServiceLocal.getFontsSize()).toBeDefined();
   });
});
