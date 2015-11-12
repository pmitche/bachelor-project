var app = angular.module("EditComponentsDirective",["ContextMenuDirective", "SymbolService", "Filter", "FontService", "ComponentsService"]);

app.directive('editComponents', function(){
    return{
        restrict: 'A',
        templateUrl: 'Html/components/EditComponents.html',
        controller: "editComponentsController",
        controllerAs: "editComponentsCtrl"
        
    };
});

app.controller("editComponentsController", function(symbolService, fontService, componentsService){
    
    this.fonts = fontService.getFonts();
    this.fontsSize = fontService.getFontsSize();
    this.images = symbolService.getImages();
    
    this.getComponents = function() {
        return componentsService.getComponents();
    };
    
    this.getOrderOfComponents = function() {
        return componentsService.getOrderOfComponents();
    };
    
    this.handleDeleteComponent = function(component) {
        if (component.isGeneratedFromTemplate) {
            component.setActiveAttribute(!component.active);
        } else {
            componentsService.deleteComponent(component);
        }
    };
    
    this.setMouse = function(event, field){
        if(event.which === 1 && field.contextMenuShowing === true){ 
            if(!(event.x >= this.rawLeft && event.y >= this.rawTop &&
               event.x <= this.rawLeft+170 && event.y <= this.rawTop+130 )){
                field.hideContextMenu();
            }
        }else if(event.which === 1 && field.contextMenuShowing === false){
            field.hideContextMenu();
        }else{
            this.setTop(event.y);
            this.setLeft(event.x);
        };
    };
    
    this.setTop = function(i){
        this.top = i + 'px';
        this.rawTop = i;
    };
    this.setLeft = function(i){
        this.left = i + 'px';
        this.rawLeft = i;
    };
    
    
    this.checkControllerType = function(controllerType,controllerClass){
        if (controllerClass===controllerType){
            return true;
        }
        return false;
    };
    
    this.setSelectedImageTo = function(field,imageId){
        field.valueOne = imageId;
    };
});

app.directive('ngRightClick', function($parse) {
    return function(scope, element, attrs) {
        var fn = $parse(attrs.ngRightClick);
        element.bind('contextmenu', function(event) {
            scope.$apply(function() {
                event.preventDefault();
                fn(scope, {$event:event});
            });
        });
    };
});