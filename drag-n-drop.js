function handleFileSelect(evt) 
{
  var files = evt.target.files; // FileList object
  evt.stopPropagation();
  evt.preventDefault();
  var output = {
  	url:'', img_name:''
  };
  var files = evt.dataTransfer.files;
    // Loop through the FileList and render image files as thumbnails.
    if(files.length > 0)
    {
    // 	do
    // 	{
    // 		var x = document.getElementsByTagName("img");
    // 		var j;
    // 		var counter = 0;
				// for (j = 0; j < x.length; j++) 
				// {
				// 	console.log((x[j].title) + " and " + escape(files.name));
				// 	if(x[j].title == escape(files.name))
				// 	{
		  //   		alert("You have already added this image");
		  //   		console.log("heloooooooooooooooo"+(x[j].title));
		  //   		break;
				// 	}
				// }

    		for (var i = 0, f; f = files[i]; i++) 
    		{					
		    	var reader = new FileReader();
		    // Closure to capture the file information.

		    reader.onload = (function(files) 
		    {

		    	return function(e) 
		    	{
		    		output.url = e.target.result;
		    		output.img_name = escape(files.name);
		    		addImage(output);
		    	};
		    })(f);

		    // Read in the image file as a data URL.
		    reader.readAsDataURL(f);
		  }
		  // counter++;
		// }while(counter<i);  		
	}

}

function handleDragOver(evt) 
{
	evt.stopPropagation();
	evt.preventDefault();
	evt.dataTransfer.dropEffect = 'copy';
}

var dropZone = document.getElementById('drop_zone');
dropZone.addEventListener('dragover', handleDragOver, false);
dropZone.addEventListener('drop', handleFileSelect, false);