
var app = angular.module("ApproveController",[]);

app.controller("approveController",function(){
    //this.previewHeightClass = "preview-height-general";
    this.approve = function(){
        //dirty hack! do not use if other solution possible!
        //hacked by SuperBUBS1337
        $('#printable').removeClass("preview-height-general").addClass("preview-height-image-creation");
        createImage();

    };
  
    var createImage = function(){
        html2canvas(document.getElementById("printable"),{
            onrendered: function(canvas) {
                var scale = 3.125;
                var newCanvas = document.createElement("canvas");
                newCanvas.width = canvas.width*scale;
                newCanvas.height = canvas.height*scale;
                var ctx = newCanvas.getContext("2d");
        
                ctx.scale(scale,scale);
                ctx.drawImage(canvas,0,0);
                
                var dataURL = newCanvas.toDataURL("image/png",1);

                var width = newCanvas.width;
                var height = newCanvas.height;
                                
                localStorage.setItem("image",dataURL);
                makePDF(dataURL,width,height);
                
                saveCanvasAsHtml(dataURL, newCanvas);
                
                //dirty hack! do not use if other solution possible!
                //hacked by SuperBUBS1337
                $('#printable').removeClass("preview-height-image-creation").addClass("preview-height-general");

            }
        });
    };
    
    var saveCanvasAsHtml = function(dataURL, newCanvas) {
        var htmlString = "<html><head><meta charset='utf-8'/></head><body><img src="+dataURL+"></body></html>";
        var uri = "data:application/octet-stream;base64,"+btoa(htmlString);
        window.location.href=uri;
    };
    
    var makePDF = function(imageURL,widthInPixels,heightInPixels){
        if (imageURL !== null){
            var doc = new jsPDF();
            var width = (widthInPixels*25.6)/300;
            var height = (heightInPixels*25.6)/300;
            doc.addImage(imageURL,"PNG",15,40,width,height);
            doc.save('test.pdf');
        };
    };    
});