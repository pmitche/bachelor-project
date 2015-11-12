
var app = angular.module("FontService",[]);

app.service("fontService",function(){
    var fonts = [{name:"Olisipone-Bold", class:"olisipone-bold"},
        {name:"Olisipone-HeadBook", class:"olisipone-headbook"},
        {name:"Olisipone-HeadDemi", class:"olisipone-headdemi"}];
    
    var fontsSize = [{name: "8", class:"size8"},
        {name:"10", class:"size10"},
        {name:"12", class:"size12"},
        {name:"14", class:"size14"},
        {name:"16", class:"size16"},
        {name:"18", class:"size18"},
        {name:"20", class:"size20"}];
    
    this.getFonts = function(){
        return fonts;
    };
    this.getFontsSize = function(){
        return fontsSize;
    };
});


