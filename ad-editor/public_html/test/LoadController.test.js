describe("Test 'LoadController'", function(){
    var readFileServiceLocal, loadControllerLocal;
    beforeEach(module("LoadController", function($provide){
        readFileServiceLocal = {};
        $provide.value("readFileService", readFileServiceLocal);
    }));
    beforeEach(inject(function($controller){
        loadControllerLocal = $controller("loadController");
    }));
    it("for 'file' to equal NULL", function(){
        expect(loadControllerLocal.file).toBeNull();
    });
});