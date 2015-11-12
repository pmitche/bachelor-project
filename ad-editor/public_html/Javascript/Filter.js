
var app = angular.module("Filter",[]);

app.filter("sortByIndexArray", function(){
    return function(items, indexArray){
        var filtered = [];
        for (var i = 0; i < items.length; i++) {
            filtered[indexArray[i]] = items[i];
        }
        return filtered;
    };
});

app.filter("sortByIndexArrayWithBlocks", function(){
        
    var putItemAtCorrectPlaceInFiltered = function(item, indexArray, filtered) {
        if (item.viewType === "block") {
            var firstBlockElement = item.elements[0];
            var smallestOrderNumber = indexArray[firstBlockElement.componentListIndex];
            filtered[smallestOrderNumber] = item;
        } else {
            var orderNumber = indexArray[item.componentListIndex];
            filtered[orderNumber] = item;
        }
        return filtered;
    };
    
    return function(items, indexArray){
        var filtered = [];
        for (var i = 0; i < items.length; i++) {
            filtered = putItemAtCorrectPlaceInFiltered(items[i], indexArray, filtered);
        }
        for (var i = 0; i < filtered.length; i++) {
            if (filtered[i] === undefined) {
                filtered.splice(i, 1);
                i--;
            }
        }
        return filtered;
    };
});

app.filter("showOnlyIfNumberUnequalToZero", function() {
    return function(components) {
        var filtered = {};
        for (var key in components) {
            var component = components[key];
            if (component.maxNumber - component.usedNumber !==0) {
                filtered[key] = component;
            }
        }
        return filtered;
    };
});
