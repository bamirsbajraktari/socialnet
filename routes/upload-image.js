

exports.upload=function (req, res) {
    var fileUpload = require('express-fileupload');
    var sampleFile;
 
	if (!req.files) {
		res.send('No files were uploaded.');
		return;
	}
 
	sampleFile = req.files.file-0;
    
    console.log(JSON.stringify(sampleFile));
	sampleFile.mv('/uploads/foto.jpg', function(err) {
		if (err) {
            console.log("error");
			res.status(500).send(err);
		}
		else {
			res.send('File uploaded!');
		}
	});
};
