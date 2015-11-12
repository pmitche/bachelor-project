
var app = angular.module("ContextMenuDirective",[]);

app.directive("contextMenu",function(){
    return{
        restrict: 'E',
        templateUrl: 'Html/ContextMenu.html'
    };
});
