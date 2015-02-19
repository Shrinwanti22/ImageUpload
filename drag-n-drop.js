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