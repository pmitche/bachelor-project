
var app = angular.module("LoadController",["ReadFileService"]);

app.controller("loadController",function(readFileService){
    this.file = null;
    
    this.loadFile = function(){
        if (this.file !== null){
            readFileService.loadRulesAndComponentsFromString(this.file);  
        };
    };
});


app.directive("fileread", [function () {
    return {
        scope: {
            fileread: "="
        },
        link: function (scope, element, attributes) {
            element.bind("change", function (changeEvent) {
                var reader = new FileReader();
                reader.onload = function (loadEvent) {
                    scope.$apply(function () {
                        scope.fileread = loadEvent.target.result;
                    });
                };
                reader.readAsText(changeEvent.target.files[0], "utf-8");
            });
        }
    };
}]);
