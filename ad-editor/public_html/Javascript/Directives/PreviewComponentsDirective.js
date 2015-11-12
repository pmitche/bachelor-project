
var app = angular.module("PreviewComponentsDirective", ['ngSanitize', "SymbolService", "ComponentsService", "Filter"]);

app.directive('previewComponents',function(){
    return{
        restrict: 'E',
        templateUrl: 'Html/components/PreviewComponents.html',
        controller: "previewComponentsController",
        controllerAs: "previewComponentsCtrl"
    };
});

app.controller("previewComponentsController",function(symbolService, componentsService){
    this.linearizedComponents = componentsService.getLinearizedComponents();
    this.orderOfComponents = componentsService.getOrderOfComponents();
    
    this.images = symbolService.getImages();
});

app.filter('formatText', function(){
  return function(input) {
    if(!input) return input;
    if (typeof input === 'string'){
        var output = input
      //replace possible line breaks.
      .replace(/\n\r?/g, '<br/>')
      //replace spaces.
      .replace(/ /g, '&nbsp;');
      return output;
    }
  };
});