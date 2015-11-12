describe("Testing the filters in 'Filter'", function(){
    var sortByIndexArrayFilter,showOnlyIfNumberUnequalToZeroFilter;
    
    beforeEach(module("Filter",function($provide){
        ruleService = {};
        $provide.value("fontService",{getFonts:function(){return [0,1,2,3,4,5,6,7];},
            getFontsSize:function(){return [0,1,2,3,4,5,6];}} );
        $provide.value("ruleCheckerService",ruleService);
    }));
    beforeEach(inject(function($filter){
        sortByIndexArrayFilter = $filter('sortByIndexArray');
        showOnlyIfNumberUnequalToZeroFilter = $filter('showOnlyIfNumberUnequalToZero');
    }));
   
    
    //testing of sortByIndexArray filter
    it("should return an array with components in this order [b,c,a] when  the arrayIndex = [2,0,1] and items = [a,b,c]",function(){
        var items = ["a","b","c"];
        var indexArray = [2,0,1];
        
        result = sortByIndexArrayFilter(items, indexArray);
        
        expect(result[0]).toBe("b");
        expect(result[1]).toBe("c");
        expect(result[2]).toBe("a");
    });
    
    it("should return a array with components in this order [c,b,a] when  the arrayIndex = [1,2,0] and items = [a,b,c]",function(){
        var items = ["a","b","c"];
        var indexArray = [1,2,0];
        
        var result = sortByIndexArrayFilter(items, indexArray);
        
        expect(result[0]).toBe("c");
        expect(result[1]).toBe("a");
        expect(result[2]).toBe("b");
    });
    
    //testing of showOnlyIfNumberUnequalToZero filter
    it("should make an object with 3 key objects given that one component in the list has number value 0",function(){
        var components = [{maxNumber:1, usedNumber:0},{maxNumber:1, usedNumber:0},{maxNumber:1, usedNumber:0},{maxNumber:0, usedNumber:0}];
        
        var result = showOnlyIfNumberUnequalToZeroFilter(components);

        expect(Object.keys(result).length).toBe(3);
    });
    
    it("should make an object with 2 key objects given that two components in the list have number value 0;)",function(){
        var components = [{maxNumber:2, usedNumber:0},{maxNumber:0, usedNumber:0},{maxNumber:3, usedNumber:0},{maxNumber:0, usedNumber:0}];
        
        var result = showOnlyIfNumberUnequalToZeroFilter(components);

        expect(Object.keys(result).length).toBe(2);
    });
});