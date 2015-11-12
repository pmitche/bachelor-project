describe("Testing the controller 'testController' in exampleTest", function(){
    var editCtrl;
    beforeEach(module("test"));
    beforeEach(inject(function($controller){
        editCtrl = $controller('testController');
    }));
    describe("Greeting", (function(){
       it("should say 'hei'", function(){
           expect(editCtrl.message).toBe("hei");
       }); 
    }));   
    });


