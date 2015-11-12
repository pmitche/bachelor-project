
var app = angular.module("SymbolService",[]);

app.service("symbolService",function(){
    images = [{location:"Resources/2 fugler.png",index:0}
        ,{location:"Resources/2 hjerter.png",index:1}
        ,{location:"Resources/Bamse.png",index:2}
        ,{location:"Resources/Due_i_hjerteny.png",index:3}
        ,{location:"Resources/Engel_2.png",index:4}
        ,{location:"Resources/Fiskermann.jpg",index:5}
        ,{location:"Resources/Fjell med fugl.png",index:6}
        ,{location:"Resources/Fransk lilje.png",index:7}];
    this.getImages = function(){
        return images;
    };
});

