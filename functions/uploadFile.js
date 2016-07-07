var uuid = require('node-uuid');
var fs=require("fs");
var path=require("path");
const imagemin = require('imagemin');
const imageminMozjpeg = require('imagemin-mozjpeg');
const imageminPngquant = require('imagemin-pngquant');
//var sharp = require('sharp');

exports.uploadfile=function(req,res){
    var files=[];
    files=req.files.shareImg;
   // var i = 0;
   
writefiles(files,function(err,log){
    
    res.send(log);
});
    
    
  
    
    
    
};
function writefiles(files,callback){
    var log="";
     console.log('Files: ' +JSON.stringify(files));
    console.log("files length "+Object.keys(files).length);
    if(files.length){// more then 1 file
          files.forEach(function(file,i) {
           // optimization      
imagemin([file.path], 'uploads/media', {
	plugins: [
		imageminMozjpeg({targa: true}),
		imageminPngquant({quality: '65-80'})
	]
}).then(filesmin => {
    console.log("files path "+filesmin);
    var fileName=uuid.v4()+path.extname(file.name);
    fs.rename(filesmin[0].path,"./uploads/media/"+fileName, function(err){
        console.log("file : ./uploads/media/"+fileName+"+ commpression and rename was sucessfull");
    });
    

   
});
    
});//for loop
    
    }else{// one file
        // optimization  
        
imagemin([files.path], 'uploads/media', {
	plugins: [
		imageminMozjpeg({targa: true}),
		imageminPngquant({quality: '65-80'})
	]
}).then(filesmin => {
    console.log("files path "+filesmin[0].path);
    var fileName=uuid.v4()+path.extname(files.name);
    fs.rename(filesmin[0].path,"./uploads/media/"+fileName, function(err){
        console.log("file : ./uploads/media/"+fileName+" commpression and rename was sucessfull");
    });
    

   
});
        
    /*    
     var fileName=uuid.v4()+path.extname(files.name);   
    sharp(files.path+"/"+files.name)
  .resize(1000,1000)
  .min()
  .quality(80)
  .withoutEnlargement()
  .toFile('./uploads/media/'+fileName, function(err,info) {
    // output.jpg is a 300 pixels wide and 200 pixels high image
    // containing a scaled and cropped version of input.jpg
  });*/
        
        
        
        
         }//else single file
       
    
   callback(false,"upload ok"); 
};

//old image file saving
    //=> [{data: <Buffer 89 50 4e …>, path: 'build/images/foo.jpg'}, …]
       /* fs.readFile(files.path, function (err, data) {
        var fileName=uuid.v4()+path.extname(files.name);
              
        fs.writeFile("./uploads/media/"+fileName, data, function (err) {
           console.log("Uploading "+fileName);
            if(!err){
              log=log+"Uploaded ./uploads/media/"+files.name+"\n";  
            }else{
             callback(true,"error: "+err);  
            }
        });
    });*/