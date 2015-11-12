
var app = angular.module("SaveController",["Filter"]);

app.controller("saveController",function(componentsService,ruleCheckerService,readFileService,fontService, sortByIndexArrayFilter){
    this.save=function(){
        if (typeof(Storage) !== "undefined"){
            var jsonAvailableComponents = JSON.stringify(componentsService.getAvailableComponents());
            var jsonComponentsList = createComponentsJsonList();
            var jsonComponents = JSON.stringify(jsonComponentsList);
            var jsonRule= JSON.stringify(createRuleJsonList(jsonComponentsList));
            var jsonFile = '{"availableComponents":'+jsonAvailableComponents+', "components":'+jsonComponents + ', "rules":' + jsonRule+"}"; 
            localStorage.setItem("file",jsonFile);
            this.loadSavedAd();
        }
    };
    
    this.loadSavedAd = function(){
        readFileService.loadRulesAndComponentsFromString(localStorage.getItem("file"));
    };
    
    var createComponentsJsonList = function() {
        var jsonComponentsList = sortByIndexArrayFilter(componentsService.getLinearizedComponents(), componentsService.getOrderOfComponents());
        saveFontsAsIndex(jsonComponentsList);
        return jsonComponentsList;
    };
    
    var saveFontsAsIndex = function(componentsList) {
        for (var i = 0; i < componentsList.length; i++) {
            if (componentsList[i].font !== undefined) {
                componentsList[i].font = fontService.getFonts().indexOf(componentsList[i].font);
                componentsList[i].fontSize = fontService.getFontsSize().indexOf(componentsList[i].fontSize);
            }
        }
    };
    
    var createRuleJsonList=function(jsonComponentsList) {
        var jsonRuleList = new Array();
        var ruleList = ruleCheckerService.getRuleList();
        for(var i = 0; i<ruleList.length; i++){
            var ruleData = ruleList[i];
            var rule = {};
            rule.type= ruleData.type;
            rule.componentIndexA = jsonComponentsList.indexOf(ruleData.componentA);
            rule.componentIndexB = jsonComponentsList.indexOf(ruleData.componentB);
            rule.position = ruleData.position;
            jsonRuleList.push(rule);
        }
        return jsonRuleList;
    };
});
