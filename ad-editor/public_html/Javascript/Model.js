
var app = angular.module("myApp",
    ["ToolbarDirective", "LoadController", "SaveController", "EditComponentsDirective", "PreviewRulesTabViewDirective", "dndLists"]
 );
 
 app.controller("userInformationController", function() {
    this.userRole = "admin";
    this.templateView = this.userRole === "admin" ? true : false;
    
    this.changeUserRole = function() {
        if (this.templateView) {
            this.templateView = false;
        } else {
            this.templateView = true;
        }
    };
});
